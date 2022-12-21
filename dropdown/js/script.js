var district = document.getElementById("district");
district.addEventListener("click", function () { dropdown(this) });

function dropdown(event) {
    var selected = event.selectedIndex;
    var option = event.options;
    alert("Index: " + option[selected].index + " is " + option[selected].text);
};
