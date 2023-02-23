function validate() {
    if (window.localStorage.getItem("accessToken") == null) {
        window.location.replace("./login.html");
    }
}
validate();

function button_function(id, category, link) {
    $("#status").fadeIn(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
        overflow: "hidden"
    });
    if (category == "join") {
        $.ajax({
            url: baseURL + link,
            method: "GET",
            contentType: "application/json",
            accepts: "application/json",
            headers: {
                authorization: "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $("#status").fadeOut(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "visible"
                });
                alert("Redirecting..");
                window.location.replace(data.url);
            },
            error: function(data) {
                $("#status").fadeOut(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "visible"
                });
                if (data.status == 401 || data['responseJSON'].code == "auth/error-logging-in") {
                    if (localStorage.getItem("accessToken") != null) {
                        localStorage.removeItem("accessToken");
                    }
                    alert("Login to continue.");
                    window.location.replace("./login.html");
                } else if (data['responseJSON'].code == "join/event-not-started" || data['responseJSON'].code == "join/workshop-not-started")
                    alert("The meet has not yet started.");
                else
                    alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");

            },
        });
    } else if (category == "receipt") {
        $.ajax({
            url: baseURL + link,
            method: "GET",
            contentType: "application/json",
            accepts: "application/json",
            headers: {
                authorization: "Bearer " + localStorage.getItem("accessToken")
            },
            success: function(data) {
                $("#status").fadeOut(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "visible"
                });
                alert("Redirecting..");
                window.open(data.receiptUrl, "_blank");
            },
            error: function(data) {
                $("#status").fadeOut(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "visible"
                });
                if (data.status == 401 || data['responseJSON'].code == "auth/error-logging-in") {
                    if (localStorage.getItem("accessToken") != null) {
                        localStorage.removeItem("accessToken");
                    }
                    alert("Login to continue.");
                    window.location.replace("./login.html");
                } else
                    alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
            },
        });
    } else if (category == "team") {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        if (link == "undefined") {
            alert("Team details form is not yet initiated. ");
        } else {
            alert("Redirecting..");
            window.open(link, "_blank");
        }
    }
}


$.ajax({
    url: baseURL + "/profile",
    method: "GET",
    contentType: "application/json",
    accepts: "application/json",
    headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken")
    },
    success: function(data) {
        console.log(data);
        var join = "join"
        team = "team",
            receipt = "receipt";
        if (data.workshopRegistrations.length == 0 && data.eventRegistrations.length == 0) {
            document.getElementById('cardParent').innerHTML = '<div class="error"><div><img class="whiteman"src="images/White_Logo_Man.png" alt=""></div><h1>Nothing to show!</h1><p class="error_text">Ahoy! All set for the contest...?, then why the wait!?<br>Register for the events and workshops to be a part of the journey.</p><div class="joinbutton"><a href="event.html"><button class="butn draw-border">Events</button></a><a href="workshop.html"><button class="butn draw-border">Workshop</button></a></div></div>';
        } else {
            for (let i = 0; i < data.workshopRegistrations.length; i++) {
                var id = data.workshopRegistrations[i].id;
                var name = data.workshopRegistrations[i].name.toUpperCase();;
                var link1 = "/workshop/" + id + "/join";
                var link2 = "/payment/" + id;
                var date = data.workshopRegistrations[i].schedules[0].date;
                var time = data.workshopRegistrations[i].schedules[0].startTime + " - " + data.workshopRegistrations[i].schedules[0].endTime;
                document.getElementById('cardParent').innerHTML += '<div class="acard"><span class="pro">WORKSHOP</span><div class="card__image"><img class="event-logo" src="images/events/' + id + '.png" alt="Person"></div><p class="card__name">' + name + '</p><div class="parent-detail"><div class="detail"><h4><i class="fas fa-calendar-week"></i></h4><p>' + date + '</p></div><div class="detail"><h4><i class="fas fa-clock"></i></h4><p>' + time + '</p></div></div><div class="joinbutton"><button onclick="button_function(\'' + id + '\',\'' + join + '\',\'' + link1 + '\')" class="btn draw-border">Join Now</button><button onclick="button_function(\'' + id + '\',\'' + receipt + '\',\'' + link2 + '\')" class="btn draw-border">Receipt</button></div></div>';
            }
            for (let i = 0; i < data.eventRegistrations.length; i++) {
                var id = data.eventRegistrations[i].id;
                var name = data.eventRegistrations[i].name.toUpperCase();
                var link1 = "/event/" + id + "/join";
                var link2 = "/payment/-1";
                var link3 = data.eventRegistrations[i].teamUrl;
                var date = data.eventRegistrations[i].schedules[0].date;
                var time = data.eventRegistrations[i].schedules[0].startTime + " - " + data.eventRegistrations[i].schedules[0].endTime;
                var category = data.eventRegistrations[i].category;
                if (category == "G")
                    document.getElementById('cardParent').innerHTML += ' <div class="acard"><span class="pro">EVENT</span><div class="card__image"><img class="event-logo" src="images/events/' + id + '.png" alt="Person"></div><p class="card__name">' + name + '</p><div class="parent-detail"><div class="detail"><h4><i class="fas fa-calendar-week"></i></h4><p>' + date + '</p></div><div class="detail"><h4><i class="fas fa-clock"></i></h4><p>' + time + '</p></div></div><div class="joinbutton"><button onclick="button_function(\'' + id + '\',\'' + join + '\',\'' + link1 + '\')" class="btn draw-border">Join Now</button><button onclick="button_function(\'' + id + '\',\'' + receipt + '\',\'' + link2 + '\')" class="btn draw-border">Receipt</button><button onclick="button_function(\'' + id + '\',\'' + team + '\',\'' + link3 + '\')" class="btn draw-border">Team Link</button></div></div>';
                else if (id == 55)
                    document.getElementById('cardParent').innerHTML += ' <div class="acard"><span class="pro">GUEST SPEAKER</span><div class="card__image"><img class="event-logo" src="images/events/' + id + '.png" alt="Person"></div><p class="card__name">' + name + '</p><div class="parent-detail"><div class="detail"><h4><i class="fas fa-calendar-week"></i></h4><p>' + date + '</p></div><div class="detail"><h4><i class="fas fa-clock"></i></h4><p>' + time + '</p></div></div><div class="joinbutton"><button onclick="button_function(\'' + id + '\',\'' + join + '\',\'' + link1 + '\')" class="btn draw-border">Join Now</button><button onclick="button_function(\'' + id + '\',\'' + receipt + '\',\'' + link2 + '\')" class="btn draw-border">Receipt</button></div></div>';
                else
                    document.getElementById('cardParent').innerHTML += ' <div class="acard"><span class="pro">EVENT</span><div class="card__image"><img class="event-logo" src="images/events/' + id + '.png" alt="Person"></div><p class="card__name">' + name + '</p><div class="parent-detail"><div class="detail"><h4><i class="fas fa-calendar-week"></i></h4><p>' + date + '</p></div><div class="detail"><h4><i class="fas fa-clock"></i></h4><p>' + time + '</p></div></div><div class="joinbutton"><button onclick="button_function(\'' + id + '\',\'' + join + '\',\'' + link1 + '\')" class="btn draw-border">Join Now</button><button onclick="button_function(\'' + id + '\',\'' + receipt + '\',\'' + link2 + '\')" class="btn draw-border">Receipt</button></div></div>';
            }
        }
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
    },
    error: function(data) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        if (data.status == 401) {
            if (localStorage.getItem("accessToken") != null) {
                localStorage.removeItem("accessToken");
            }
            alert("Login to continue.");
            window.location.replace("./login.html");
        } else
            alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
    },
});