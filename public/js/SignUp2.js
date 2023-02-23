// //Diamonds
// const cvs = document.querySelector("canvas");
// const c = cvs.getContext("2d");

// cvs.width = window.innerWidth;
// cvs.height = window.innerHeight;

// window.addEventListener("resize", function() {
//     cvs.width = window.innerWidth;
//     cvs.height = window.innerHeight;
// });

// let mouse = {
//     x: undefined,
//     y: undefined
// };

// window.addEventListener("mousemove", function(e) {
//     mouse.x = event.x;
//     mouse.y = event.y;
// });

// class Diamond {
//     constructor(x, y, dx, dy, width) {
//         this.x = x;
//         this.y = y;
//         this.dx = dx;
//         this.dy = dy;
//         this.width = width;
//         this.minWidth = width;
//         this.maxWidth = width * 3;

//         let colorArray = ["#EB167F", "#873FF8", "#F7F8F9"];

//         this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//     }

//     draw = () => {
//         c.beginPath();
//         c.moveTo(this.x, this.y);
//         c.lineTo(this.x - this.width / 2, this.y);
//         c.lineTo(this.x, this.y + this.width / 2);
//         c.lineTo(this.x + this.width / 2, this.y);
//         c.lineTo(this.x, this.y - this.width / 2);
//         c.lineTo(this.x - this.width / 2, this.y);
//         c.closePath();

//         c.fillStyle = this.color;
//         c.fill();

//         this.update();
//     };

//     update = () => {
//         if (
//             this.x + this.width / 2 >= window.innerWidth ||
//             this.x - this.width / 2 <= 0
//         ) {
//             this.dx = -this.dx;
//         }

//         if (
//             this.y + this.width / 2 >= window.innerHeight ||
//             this.y - this.width / 2 <= 0
//         ) {
//             this.dy = -this.dy;
//         }

//         this.x += this.dx;
//         this.y += this.dy;

//         // interactivity
//         if (
//             mouse.x - this.x < 80 &&
//             mouse.x - this.x > -80 &&
//             mouse.y - this.y < 80 &&
//             mouse.y - this.y > -80 &&
//             this.width < this.maxWidth
//         ) {
//             this.width += 1;
//             this.x -= 1;
//             this.y -= 1;
//         } else if (this.width > this.minWidth) {
//             this.width -= 1;
//             this.x += 1;
//             this.y += 1;
//         }
//     };
// }

// let diamondArray = [];

// if (window.innerWidth <= 576) {
//     for (let i = 0; i < 50; i++) {
//         let width = Math.random() * 20 + 4;
//         let x = Math.random() * window.innerWidth;
//         let dx = (Math.random() - 0.5) * 1;
//         let y = Math.random() * window.innerHeight;
//         let dy = (Math.random() - 0.5) * 1;
//         diamondArray.push(new Diamond(x, y, dx, dy, width));
//     }
// } else {
//     if (window.innerWidth <= 767) {
//         for (let i = 0; i < 70; i++) {
//             let width = Math.random() * 20 + 4;
//             let x = Math.random() * window.innerWidth;
//             let dx = (Math.random() - 0.5) * 1;
//             let y = Math.random() * window.innerHeight;
//             let dy = (Math.random() - 0.5) * 1;
//             diamondArray.push(new Diamond(x, y, dx, dy, width));
//         }
//     } else {
//         for (let i = 0; i < 150; i++) {
//             let width = Math.random() * 20 + 4;
//             let x = Math.random() * window.innerWidth;
//             let dx = (Math.random() - 0.5) * 1;
//             let y = Math.random() * window.innerHeight;
//             let dy = (Math.random() - 0.5) * 1;
//             diamondArray.push(new Diamond(x, y, dx, dy, width));
//         }
//     }
// }

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, window.innerWidth, window.innerHeight);

//     diamondArray.forEach(diamond => {
//         diamond.draw();
//     });
// }

// animate();





// MODAL

window.addEventListener("click", function(event) {
    //if (event.target == modal) {
    //    modal.style.display = "block";
    // }
});

function drop(val) {
    document.getElementById("option_college").innerHTML = val;
    document.getElementById("select_college").value = val;
}

function drop1(val) {
    document.getElementById("option_year").innerHTML = val;
    document.getElementById("select_year").value = val;
}
var imageData;

document.getElementById('file-upload').onchange = function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        imageData = reader.result;
        //signup2(imageData);
    }
}



function dropdown() {

    if (document.getElementById("select_clg_div").style.visibility === 'visible') {
        document.getElementById("select_clg_div").style.visibility = 'hidden';
    } else
        document.getElementById("select_clg_div").style.visibility = 'visible';
    var college = document.getElementById("select_college").value;
    if (college === 'OTHERS') {
        document.getElementById("other_college").style.display = "block";
    } else {
        document.getElementById("other_college").style.display = "none";
    }
}



function dropdown1() {
    if (document.getElementById("dropdown-list1").style.visibility === 'visible') {
        document.getElementById("dropdown-list1").style.visibility = 'hidden';
    } else
        document.getElementById("dropdown-list1").style.visibility = 'visible';
}


document.getElementById("btn").addEventListener("click", function() {
    $("#status").fadeIn(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeIn("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({
        overflow: "hidden"
    });
    var name = document.getElementById("name1").value;
    var college = document.getElementById("select_college").value;
    var roll_no = document.getElementById("rollno").value;
    var department = document.getElementById("department").value;
    var year = document.getElementById("select_year").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;
    var alt_phone = document.getElementById("alt_phone").value;
    var subjects = document.getElementById("interested").value;
    var fileInput = document.getElementById('file-upload');
    var other_college;
    if (name.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Your Name!!";
        return;
    }
    if (college === 'Your College') {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Select Your College!!";
        return;
    }
    if (college === 'OTHERS') {
        other_college = document.getElementById("other_college").value;
        if (other_college.length == 0) {
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
            $("body").delay(350).css({
                overflow: "visible"
            });
            document.getElementById("message").innerHTML = "Enter Your College Name!!";
            return;
        }
    }
    if (roll_no.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Your Roll Number!!";
        return;
    }
    if (department.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Your Department!!";
        return;
    }
    if (year === "Pursuing Year") {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Select Your Pursuing Year!!";
        return;
    }
    if (dob.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Your Date Of Birth!!";
        return;
    }
    if (dob <= 16) alert('Not eligible!')

    if (phone.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Your Phone Number!!";
        return;
    } else if (phone.length < 10) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Valid Phone Number!!";
        return;
    }
    if (alt_phone.length != 0) {
        if (alt_phone.length < 10) {
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
            $("body").delay(350).css({
                overflow: "visible"
            });
            document.getElementById("message").innerHTML = "Enter Valid Alternate Phone Number!!";
            return;
        } else if (phone == alt_phone) {
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
            $("body").delay(350).css({
                overflow: "visible"
            });
            document.getElementById("message").innerHTML = "Both the Phone Numbers are Same!!";
            return;
        }
    }
    if (subjects.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Enter Your Interesting Subjects!!";
        return;
    }
    if (fileInput.files.length == 0) {
        $("#status").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({
            overflow: "visible"
        });
        document.getElementById("message").innerHTML = "Upload Your ID Card!!";
        return;
    } else {
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
        var FileSize = fileInput.files[0].size / 1024 / 1024; // in MiB

        if (!allowedExtensions.exec(filePath)) {
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
            $("body").delay(350).css({
                overflow: "visible"
            });
            document.getElementById("message").innerHTML = "File must be an Image or pdf!!";
            fileInput.value = '';
            return;
        } else if (FileSize > 3) {
            $("#status").fadeOut(); // will first fade out the loading animation
            $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
            $("body").delay(350).css({
                overflow: "visible"
            });
            document.getElementById("message").innerHTML = "File Size must be withing 3 MB!!";
            fileInput.value = '';
            return;
        } else {
            document.getElementById("message").innerHTML = "";
            if (college === 'OTHERS')
                college = other_college;
            if (alt_phone.length != 0) {
                var myJSON = {
                    fullName: $("#name1").val(),
                    college: college,
                    rollNo: $("#rollno").val(),
                    interestedSubject: $("#interested").val(),
                    phone: $("#phone").val(),
                    alternatePhone: $("#alt_phone").val(),
                    department: $("#department").val(),
                    year: parseInt(year),
                    dob: $("#dob").val(),
                    idImage: imageData
                };
            } else {
                var myJSON = {
                    fullName: $("#name1").val(),
                    college: college,
                    rollNo: $("#rollno").val(),
                    interestedSubject: $("#interested").val(),
                    phone: $("#phone").val(),
                    department: $("#department").val(),
                    year: parseInt(year),
                    dob: $("#dob").val(),
                    idImage: imageData
                };
            }
            $.ajax({
                url: baseURL + "/profile",
                method: "POST",
                contentType: "application/json",
                accepts: "application/json",
                headers: {
                    authorization: "Bearer " + localStorage.getItem("accessToken")
                },
                data: JSON.stringify(myJSON),
                success: function(data) {
                    $("#status").fadeOut(); // will first fade out the loading animation
                    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
                    $("body").delay(350).css({
                        overflow: "visible"
                    });
                    alert("Profile data has been saved successfully");
                    window.location.replace("./index.html");
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
                    } else if (data['responseJSON'].code == "auth/duplicate-entry") {
                        alert("Profile data has been entered already.");
                        window.location.replace("./index.html");
                    } else
                        alert("Error. Try again. Reach out to helpdesk or contact technical support for any queries.");
                },
            });
            return;
        }
    }


});


function signup2(imageData) {


}