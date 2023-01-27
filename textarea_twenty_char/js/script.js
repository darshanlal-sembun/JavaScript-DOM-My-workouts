var message = document.getElementById("comments");

message.addEventListener('keypress', checking);

function checking(event) {
    var total = 19;
    if (message.value.length < 20) {
        alert(event.key +  "\n" +"Remaining Character is : " + (total - message.value.length));   
    }
    else {
        alert("more than 20 characters");
        event.preventDefault();
    }
}
