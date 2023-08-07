let calculate = document.getElementById("calculate");

function one(e) {
    console.log(e.target);
    console.log(e.target.innerHTML);
    calculate.value = e.target.innerHTML;
}
