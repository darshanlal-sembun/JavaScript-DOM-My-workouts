let gender = document.getElementById("gender");
let checkingGender = document.getElementById("checkingGender");
let resultGender;
let userName;
function checkgender() {
    userName = gender.value;
    if (gender.value !== "") {
        $.ajax({
            url: "https://api.genderize.io?name=" + userName,
            datatype: "text",
            success: function (result) {
                console.log(result);
                resultGender = result.gender;
                checkingGender.innerHTML = resultGender;
            },
            error: function (errorMessage, status) {
                console.log(errorMessage);
                console.log(status);
            },
        });
    }
    else {
        alert("Please Enter Your Name in TextBox");
    }
}