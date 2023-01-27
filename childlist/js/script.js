let msg = document.getElementById("message");
let edits = document.getElementById("edited");
let comments = document.getElementById("comments");
let observer = new MutationObserver(records => {
    edits.style.display = "block";
    console.log(records);
    // console.log(records[0].oldValue);
});
observer.observe(comments, {
    // childList: true,
    // subtree: true,
    attributes: true,
     attributeFilter: ['name', 'id'],
    // characterData: true,
    attributeOldValue: true,
    // characterDataOldValue: true,
});
function edit_hide() {
    edits.style.display = "none";
}


