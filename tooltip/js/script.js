var heading = document.querySelectorAll("h3");

for (i = 0; i < heading.length; i++) {
    heading[i].addEventListener("mouseover", function () { show(this) });
    heading[i].addEventListener("mouseout", hide);
};

function show(e) {
    var span_text = document.createElement("span");

    e.parentElement.style.position = "relative";
    e.parentElement.append(span_text);

    span_text.style.left = "40px";
    span_text.style.top = "-40px";

    span_text.innerText = e.innerText;
};

function hide() {
    var span = document.querySelectorAll("span");
    span.forEach(element => {
        element.remove();
    });
};

