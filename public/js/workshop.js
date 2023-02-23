var flag = 0;
var id_g = 0;

function backend(id) {
    $.ajax({
        url: baseURL + "/workshop/" + id + "/register",
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
            } else if (!data.available) {
                document.getElementById('btn_' + id).innerText = "HOUSEFULL";
                document.getElementById('btn_' + id).disabled = true;
            }
            /* //The else below is added for registration closed
             else {
                 document.getElementById('btn_' + id).innerText = "REGISTRATION CLOSED";
                 document.getElementById('btn_' + id).disabled = true;
                 document.getElementById('btn_' + id).className = "coming_soon"
             }*/
        },
        error: function(data) {
            /* //The three lines below are added for registration closed
             document.getElementById('btn_' + id).innerText = "REGISTRATION CLOSED";
             document.getElementById('btn_' + id).disabled = true;
             document.getElementById('btn_' + id).className = "coming_soon"*/

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
$(window).focus(function() {
    if (flag == 1 && id_g != 0) {
        $("#status").fadeIn(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "hidden"
        });
        $.ajax({
            url: baseURL + "/payment/" + id_g,
            method: "GET",
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
                if (data.status == 'S') {
                    alert("Payment Successful. Redirecting to receipt page.");
                    document.getElementById('btn_' + id_g).innerText = "REGISTERED";
                    document.getElementById('btn_' + id_g).disabled = true;
                    flag = 0;
                    id_g = 0;
                    window.open(data.receiptUrl, "_blank");
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
    } else if (flag == 2) {
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
                $("#status").fadeOut(); // will first fade out the loading animation
                $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                $("body").delay(350).css({
                    overflow: "visible"
                });
                if (data.status == 'S') {
                    alert("Payment Successful. Redirecting to receipt page.");
                    flag = 0;
                    id_g = 0;
                    window.open(data.receiptUrl, "_blank");
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
//Modal
var modal_1 = document.getElementById("id-modal-1");
// var modal_2 = document.getElementById("id-modal-2");
var modal_3 = document.getElementById("id-modal-3");
var modal_4 = document.getElementById("id-modal-4");
var modal_5 = document.getElementById("id-modal-5");
var modal_6 = document.getElementById("id-modal-6");
var modal_7 = document.getElementById("id-modal-7");
var modal_8 = document.getElementById("id-modal-8");

var div_btn_1 = document.getElementById("div-1");
// var div_btn_2 = document.getElementById("div-2");
var div_btn_3 = document.getElementById("div-3");
var div_btn_4 = document.getElementById("div-4");
var div_btn_5 = document.getElementById("div-5");
var div_btn_6 = document.getElementById("div-6");
var div_btn_7 = document.getElementById("div-7");
var div_btn_8 = document.getElementById("div-8");


var span_1 = document.getElementsByClassName("modal_close_1")[0];
// var span_2 = document.getElementsByClassName("modal_close_2")[0];
var span_3 = document.getElementsByClassName("modal_close_3")[0];
var span_4 = document.getElementsByClassName("modal_close_4")[0];
var span_5 = document.getElementsByClassName("modal_close_5")[0];
var span_6 = document.getElementsByClassName("modal_close_6")[0];
var span_7 = document.getElementsByClassName("modal_close_7")[0];
var span_8 = document.getElementsByClassName("modal_close_8")[0];



function register(id) {
    $("#status").fadeIn(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
        overflow: "hidden"
    });
    id_g = id;
    $.ajax({
        url: baseURL + "/payment/workshop/" + id + "/initiate",
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
            alert("Redirecting to payment page.");
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
                        flag = 2;
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
                            window.location.replace("./workshop.html");
                        } else if (data['responseJSON'].code == "registration/duplicate-general-registration") {
                            alert("General registration already paid.");
                            backend(id);
                        } else
                            alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
                    },
                });
            } else if (data['responseJSON'].code == "payment/pending-previous-payment") {
                alert("Previous transaction is pending. Try again after some time.");
                window.location.replace("./workshop.html");
            } else if (data['responseJSON'].code == "registration/duplicate-workshop-registration") {
                alert("Workshop already registered");
                backend(id);
            } else
                alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
        },
    });
}


div_btn_1.onclick = function() {
    modal_1.style.display = "block";
    backend(40);
}
div_btn_3.onclick = function() {
    modal_3.style.display = "block";
    backend(41);
}
div_btn_4.onclick = function() {
    modal_4.style.display = "block";
    backend(42);
}
div_btn_5.onclick = function() {
    modal_5.style.display = "block";
    backend(43);
}
div_btn_6.onclick = function() {
    modal_6.style.display = "block";
    backend(44);
}
div_btn_7.onclick = function() {
    modal_7.style.display = "block";
    backend(45);
}
//div_btn_8.onclick = function() {
//    modal_8.style.display = "block";
//    backend(54);
//}


span_1.onclick = function() {
    modal_1.style.display = "none";
}
span_3.onclick = function() {
    modal_3.style.display = "none";
}
span_4.onclick = function() {
    modal_4.style.display = "none";
}
span_5.onclick = function() {
    modal_5.style.display = "none";
}
span_6.onclick = function() {
    modal_6.style.display = "none";
}
span_7.onclick = function() {
    modal_7.style.display = "none";
}
// span_8.onclick = function() {
//     modal_8.style.display = "none";
// }

window.addEventListener("click", function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = "none";
    }
    if (event.target == modal_3) {
        modal_3.style.display = "none";
    }
    if (event.target == modal_4) {
        modal_4.style.display = "none";
    }
    if (event.target == modal_5) {
        modal_5.style.display = "none";
    }
    if (event.target == modal_6) {
        modal_6.style.display = "none";
    }
    if (event.target == modal_7) {
        modal_7.style.display = "none";
    }
    if (event.target == modal_8) {
        modal_8.style.display = "none";
    }
});