var flag = 0;
var id_g = 0;

function backend(id) {
    $.ajax({
        url: baseURL + "/event/" + id + "/register",
        method: "GET",
        contentType: "application/json",
        accepts: "application/json",
        headers: {
            authorization: "Bearer " + localStorage.getItem("accessToken")
        },
        success: function(data) {
            if (data.registered) {
                document.getElementById('btn_' + id).innerText = "REGISTERED";
                document.getElementById('btn_' + id).disabled = true;
            }

            //The else below is added for registration closed.
            else {
                document.getElementById('btn_' + id).innerText = "REGISTRATION CLOSED";
                document.getElementById('btn_' + id).disabled = true;
                document.getElementById('btn_' + id).className = "coming_soon"
            }
        },
        error: function(data) {
            //The three lines below are added for registration closed
            document.getElementById('btn_' + id).innerText = "REGISTRATION CLOSED";
            document.getElementById('btn_' + id).disabled = true;
            document.getElementById('btn_' + id).className = "coming_soon"

            if (window.localStorage.getItem("accessToken") != null) {
                if (data.status == 401 || data['responseJSON'].code == "auth/error-logging-in") {
                    if (localStorage.getItem("accessToken") != null) {
                        localStorage.removeItem("accessToken");
                    }
                } else if (data['responseJSON'].code == "profile/profile-not-completed") {
                    alert("Complete the profile first.");
                    window.location.replace("./signup2.html");
                } else if (data['responseJSON'].code == "registration/general-fee-not-paid") {} else
                    alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
            }
        },
    });
}
backend(55);
$(window).focus(function() {
    if (flag == 1 && id_g != 0) {
        $("#status").fadeIn(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "hidden"
        });
        $.ajax({
            url: baseURL + "/payment/-1",
            method: "GET",
            contentType: "application/json",
            accepts: "application/json",
            headers: {
                authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
            success: function(data) {
                receipt_url = data.receiptUrl;
                if (data.status == 'S') {
                    $.ajax({
                        url: baseURL + "/event/" + id_g + "/register",
                        method: "POST",
                        contentType: "application/json",
                        accepts: "application/json",
                        headers: {
                            authorization: "Bearer " + localStorage.getItem("accessToken")
                        },
                        success: function(data1) {
                            $("#status").fadeOut(); // will first fade out the loading animation
                            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                            $("body").delay(350).css({
                                overflow: "visible"
                            });
                            document.getElementById('btn_' + id_g).innerText = "REGISTERED";
                            document.getElementById('btn_' + id_g).disabled = true;
                            flag = 0;
                            id_g = 0;
                            alert("Payment Successful. Redirecting to receipt page.");
                            window.open(receipt_url, "_blank");
                        },
                        error: function(data) {
                            $("#status").fadeOut(); // will first fade out the loading animation
                            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                            $("body").delay(350).css({
                                overflow: "visible"
                            });
                            if (window.localStorage.getItem("accessToken") != null) {
                                if (data.status == 401 || data['responseJSON'].code == "auth/error-logging-in") {
                                    if (localStorage.getItem("accessToken") != null) {
                                        localStorage.removeItem("accessToken");
                                    }
                                    alert("Session expired. Login again.");
                                    window.location.replace("./login.html");
                                } else if (data['responseJSON'].code == "profile/profile-not-completed") {
                                    alert("Complete the profile first.");
                                    window.location.replace("./signup2.html");
                                } else if (data['responseJSON'].code == "registration/general-fee-not-paid") {} else
                                    alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
                            }
                            flag = 0;
                            id_g = 0;
                        },
                    });

                } else {
                    $("#status").fadeOut(); // will first fade out the loading animation
                    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                    $("body").delay(350).css({
                        overflow: "visible"
                    });
                }
            },
            error: function(data) {
                $("#status").fadeOut(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "visible"
                });
                flag = 0;
                id_g = 0;
                if (data.status == 401 || data['responseJSON'].code == "auth/error-logging-in") {
                    if (localStorage.getItem("accessToken") != null) {
                        localStorage.removeItem("accessToken");
                    }
                    alert("Login to continue.");
                    window.location.replace("./login.html");
                } else if (data['responseJSON'].code == "profile/profile-not-completed") {
                    alert("Complete the profile first.");
                    window.location.replace("./signup2.html");
                } else
                    alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
            }
        });
    }
});

function register(id) {
    $("#status").fadeIn(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
        overflow: "hidden"
    });
    id_g = id;
    $.ajax({
        url: baseURL + "/event/" + id + "/register",
        method: "POST",
        contentType: "application/json",
        accepts: "application/json",
        headers: {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        success: function(data) {
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
            $("body").delay(350).css({
                overflow: "visible"
            });
            alert("Registration successful.");
            backend(id);
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
            } else if (data['responseJSON'].code == "profile/profile-not-completed") {
                alert("Complete the profile first.");
                window.location.replace("./signup2.html");
            } else if (data['responseJSON'].code == "registration/general-fee-not-paid") {
                alert("General registration fee not yet paid. Redirecting to payment page.");
                $("#status").fadeIn(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "hidden"
                });
                $.ajax({
                    url: baseURL + "/payment/general/initiate",
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
                        window.open(data.paymentUrl, "_blank");
                        flag = 1;
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
                        } else if (data['responseJSON'].code == "profile/profile-not-completed") {
                            alert("Complete the profile first.");
                            window.location.replace("./signup2.html");
                        } else if (data['responseJSON'].code == "payment/pending-previous-payment") {
                            alert("Previous transaction is pending. Try again after some time.");
                        } else if (data['responseJSON'].code == "registration/duplicate-event-registration") {
                            alert("Event already registered");
                            backend(id);
                        } else if (data['responseJSON'].code == "registration/duplicate-general-registration") {
                            alert("General registration already paid.");
                            backend(id);
                        } else
                            alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
                    },
                });
            } else if (data['responseJSON'].code == "registration/duplicate-event-registration") {
                alert("Event already registered");
                backend(id);
            } else
                alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
        }
    });
}