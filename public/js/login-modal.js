// MODAL
function modall(input) {
    if (input == 1) {
        document.getElementById('logsign').style.display = 'none';
        document.getElementById('signup2').style.display = 'block';
    } else {
        document.getElementById('signup2').style.display = 'none';
        document.getElementById('logsign').style.display = 'block';
    }
}

function forgot_password(input) {
    if (input == 1) {
        document.getElementById('logsign').style.display = 'none';
        document.getElementById('fpblock').style.display = 'block';
    } else {
        document.getElementById('fpblock').style.display = 'none';
        document.getElementById('logsign').style.display = 'block';
    }
}

function drop(val) {
    document.getElementById("option_college").innerHTML = val;
    document.getElementById("select_college").value = val;
}

function drop1(val) {
    document.getElementById("option_year").innerHTML = val;
    document.getElementById("select_year").value = val;
}

function valid() {
    var pass = document.getElementById('pass');
    var pass_val = document.getElementById('pass').value;
    var con_pass = document.getElementById('con_pass').value;
    pass.oninvalid = function(event) {
        event.target.setCustomValidity("Password must have lowercase, uppercase, number, atleast 8 characters");
    }
    if (pass_val.length > 0) {
        if (pass_val === con_pass) {
            //modall(1)
        } else {
            alert("Passwords doesn't Match!!");
        }
    }
}

function forgot_pass() {
    var email = document.getElementById('for_email');
    email.oninvalid = function(event) {
        event.target.setCustomValidity("Enter Correct Email");
    }
}

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('s_email').placeholder = 'Official Mail Id';

    }
    if (document.getElementById('noCheck').checked) {
        document.getElementById('s_email').placeholder = 'Mail Id';

    }
}