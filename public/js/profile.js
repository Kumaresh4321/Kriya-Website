function validate() {
    if (window.localStorage.getItem("accessToken") == null) {
        window.location.replace("./login.html");
    }
}
validate();
$.ajax({
    url: baseURL + "/profile",
    method: "GET",
    contentType: "application/json",
    accepts: "application/json",
    headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken")
    },
    success: function(data) {
        $('#name').html(data.profile.fullName);
        $('#college').html(data.profile.college);
        var year = "5th year";
        if (data.profile.year == 1)
            year = "1st year";
        else if (data.profile.year == 2)
            year = "2nd year"
        else if (data.profile.year == 3)
            year = "3rd year";
        else if (data.profile.year == 4)
            year = "4th year";
        $('#field').html(data.profile.department + ", " + year);
        $('#email').html(data.email);
        $('#phone').html(data.profile.phone);
        $('#kriya_id').text(data.kriyaId);
        var name = data.profile.fullName.split(" ");
        if (name.length >= 2)
            var intials = name[0].charAt(0) + name[1].charAt(0);
        else
            var intials = name[0].charAt(0) + name[0].charAt(1);
        $('.profiletext').text(intials.toUpperCase());
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

    },
});