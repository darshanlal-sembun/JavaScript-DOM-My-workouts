var testing = document.getElementById("text_check");
testing.addEventListener("keypress", function () { checking(this) });

function checking(event) {
    alert("Entered String is : " + " " + event.value + "\n" + "String Length is : " + " " + event.value.length);
};