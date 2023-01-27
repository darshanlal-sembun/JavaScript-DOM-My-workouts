var state = document.getElementById("state");
var state_names = ["Rajasthan","Madhya Pradesh","Uttar Pradesh","Maharashtra","Gujarat","Karnataka","Andhra Pradesh","Odisha","Tamil Nadu","Kerala"];
for (i = 0; i < state_names.length; i++) {

    var options = document.createElement("option");
    options.innerHTML = state_names[i];
    options.value = state_names[i];
    
    // console.log(state[i].value);
    state[i].addEventListener("change", function () 
    { 
        select_state(this); 
    });
    //console.log(state[i].value);
};

function select_state(event) {
    alert(event.value);
    console.log(event.value);
};

var district = document.getElementById("district");
var taluk = document.getElementById("taluk");
var village = document.getElementById("village");

