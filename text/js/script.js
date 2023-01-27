var focus_text = document.getElementById("text_focus");

focus_text.addEventListener("focusin", textfocusin);
focus_text.addEventListener("focusout", textfocusout);

function textfocusin() {
    focus_text.style.backgroundColor = "red";
};
function textfocusout() {
    focus_text.style.backgroundColor = "yellow";
    alert(focus_text.value);
};

// text onchange
var onchange_text = document.getElementById("text_onchange");

onchange_text.addEventListener("change", onchange_fun);

function onchange_fun() {
    console.log(onchange_text.value.length);
    alert("Entered String is : " + onchange_text.value +   "\n" +  "Entered String Length is : " + onchange_text.value.length);
};

// text focusout
var focusout_text = document.getElementById("text_focusout");

focusout_text.addEventListener("focusout", textfocus_out);

function textfocus_out() {
    focusout_text.style.backgroundColor = "yellow";
    alert(focusout_text.value);
};
