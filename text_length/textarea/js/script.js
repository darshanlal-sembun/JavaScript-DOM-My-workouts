var text = document.getElementById("message");
text.setAttribute("maxlength", 20);
text.addEventListener("focusout", focusout);

function focusout() {
    alert(text.value);
};
