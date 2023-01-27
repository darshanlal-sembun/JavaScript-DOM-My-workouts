const checkbox = document.getElementsByName("district")
console.log(checkbox);
for (i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', testing);
};
function testing() {
    let checkboxes = document.querySelectorAll('input[name="district"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert("checked" + " " + values);
};