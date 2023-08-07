//var replyTextarea;

function createElement(tagName, parentName) {
    let child = "";
    child = document.createElement(tagName);
    parentName.appendChild(child);
    return child;
}

function newTextareaValue() {
    textarea.value.length > 0 ? createComment(commentsList, textarea.value) : alert("Please Enter some comments in Text Box");
}

function createComment(parent, textareaValues) {
    let container = "", imageContainer = "", profilePicture = "", commentContainer = "", chatContainer = "", userNameContainer = "", userNameTiming = "";
    let userName = "", timing = "", currentTime = "", threeDots = "", message = "", likeReplyContainer = "", likeReplySubContainer = "", likeImageIcon = "";
    let likeBtn = "", verticalLine = "", replyBtnContainer = "", replyBtn = "", fragment = "", time = "";

    fragment = new DocumentFragment();
    time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

    container = createElement("div", fragment);
    container.setAttribute("class", "container");

    imageContainer = createElement("div", container);
    imageContainer.setAttribute("class", "imageContainer");

    profilePicture = createElement("img", imageContainer);
    profilePicture.setAttribute("src", "../linkedin clone/images/index.jpg");
    profilePicture.setAttribute("class", "profilePicture");

    commentContainer = createElement("div", container);
    commentContainer.setAttribute("class", "commentContainer");

    chatContainer = createElement("div", commentContainer);
    chatContainer.setAttribute("class", "chatContainer");

    userNameTiming = createElement("div", chatContainer);
    userNameTiming.setAttribute("class", "userNameTiming");

    userNameContainer = createElement("div", userNameTiming);
    userNameContainer.setAttribute("class", "userNameContainer");

    userName = createElement("span", userNameContainer);
    userName.innerText = "Darshan";

    timing = createElement("div", userNameTiming);
    timing.setAttribute("class", "timingContainer");

    currentTime = createElement("h5", timing);
    currentTime.setAttribute("class", "currentTime");
    currentTime.innerText = time;

    threeDots = createElement("span", timing);
    threeDots.setAttribute("class", "threeDots");
    threeDots.innerText = "...";
    threeDots.addEventListener("click", editOptions);

    message = createElement("div", chatContainer);
    message.setAttribute("class", "message");

    content(textareaValues, message);

    likeReplyContainer = createElement("div", commentContainer);
    likeReplyContainer.setAttribute("class", "likeReplyContainer");

    likeReplySubContainer = createElement("div", likeReplyContainer);
    likeReplySubContainer.setAttribute("class", "likeReplySubContainer");

    likeImageIcon = createElement("div", likeReplySubContainer);
    likeImageIcon.setAttribute("class", "likeImageIcon");

    likeBtn = createElement("button", likeImageIcon);
    likeBtn.setAttribute("class", "likeBtn");
    likeBtn.innerText = "Like";
    likeBtn.addEventListener("click", likePictureShow);

    verticalLine = createElement("div", likeReplySubContainer);
    verticalLine.setAttribute("class", "verticalLine");
    verticalLine.innerText = "|";

    replyBtnContainer = createElement("div", likeReplySubContainer);
    replyBtnContainer.setAttribute("class", "replyBtnContainer");

    replyBtn = createElement("button", replyBtnContainer);
    replyBtn.setAttribute("class", "replyBtn");
    replyBtn.innerText = "Reply";
    replyBtn.addEventListener("click", replyComments);

    parent.prepend(fragment);
    textarea.value = "";
}

function replyComments(e) {
    let replyContainer = "";
    replyContainer = e.target.closest(".likeReplyContainer");
    editFunction(replyContainer);
}
var commentListChild;

function content(textareaValues, message) {
    let shortText;
    let longText;
    let text;
    let textLength;

    text = textareaValues;
    textLength = text.length;

    if (textLength > 100) {
        shortText = document.createElement("span");
        shortText.setAttribute("class", "show");

        text = text.substring(0, 100);
        shortText.innerText = text;

        seeMoreThreeDots = seeMoreLess("... See More");
        shortText.appendChild(seeMoreThreeDots);
        message.appendChild(shortText);
    }
    longText = document.createElement("span");

    textLength > 100 ? longText.setAttribute("class", "hide") : longText.setAttribute("class", "show");

    longText.classList.add("longText");

    text = textareaValues.substring(0, textLength);
    longText.innerText = text;

    textLength > 100 ? longText.appendChild(seeMoreLess("... See Less")) : false;
    message.appendChild(longText);
}

function seeMoreLess(textareaValuesText) {
    let moreLess;
    let moreLessInnerText;
    let moreLessParent;

    moreLess = document.createElement("a");
    moreLess.setAttribute("href", "#/");

    moreLess.innerText = textareaValuesText;

    moreLess.addEventListener("click", function (e) {
        e.stopPropagation();
        moreLessInnerText = e.target.innerText;
        moreLessParent = e.target.parentElement;

        if (moreLessInnerText === "... See More") {
            moreLessParent.classList.add("hide");
            moreLessParent.classList.remove("show");
            moreLessParent.nextSibling.classList.remove("hide");
            moreLessParent.nextSibling.classList.add("show");
        }
        else if (moreLessInnerText === "... See Less") {
            moreLessParent.classList.add("hide");
            moreLessParent.classList.remove("show");
            moreLessParent.previousSibling.classList.remove("hide");
            moreLessParent.previousSibling.classList.add("show");
        }
    });
    return moreLess;
}

function editOptions(e) {

    let eTarget;
    let editMenu;
    let cloneEditMenu;

    eTarget = e.target;
    editMenu = document.getElementById("editMenu");
    cloneEditMenu = editMenu.cloneNode(true);
    eTarget.appendChild(cloneEditMenu);
    show = document.querySelectorAll(".show");
    console.log(show.length);

    for (i = 0; i < show.length; i++) {

        show[i].classList.contains("show") ? show[i].classList.remove("show") : false;
    }
    cloneEditMenu.classList.add("show");
}

function editDeleteOptions(e) {
    let editDeleteContainer = "";

    editCommentList = e.target.closest(".commentList");
    editDeleteContainer = e.target.closest(".container");
    editLikeReplyContainer = e.target.closest(".likeReplyContainer");

    if (e.target.innerText === "Edit") {

        editCommentText = editDeleteContainer.querySelector(".longText").innerText;

        editFunction(editLikeReplyContainer, editCommentText);

        editCommentList.removeChild(editDeleteContainer);

    }
    else if (e.target.innerText === "Delete") {
        if (confirm("Are you sure to want to Delete?") == true) {
            editDeleteContainer.remove();
            return true;
        }
        else {
            return false;
        }
    }
}
function editFunction(deleteContainer, editEdit = "") {
    console.log(editEdit);
    console.log(deleteContainer);
    if (deleteContainer == null) {
        textarea.value = editEdit;
    }
    else {

        replycontains = deleteContainer.querySelector(".likeReplySubContainer");

        checkk = deleteContainer.querySelector('.replyMap');

        if (checkk == null) {
            reply = createElement("div", deleteContainer);
            reply.setAttribute("class", "replyMap");

            let editTextarea = createElement("textarea", reply);
            editTextarea.setAttribute("cols", "30");
            editTextarea.setAttribute("rows", "5");

            editSubmitButtonContainer = createElement("div", reply);
            editSubmitButtonContainer.setAttribute("class", "submitBtnContainer");

            editSubmitButton = createElement("button", editSubmitButtonContainer);
            editSubmitButton.setAttribute("class", "submitButton");
            editSubmitButton.innerText = "Reply";

            replycontains.after(reply);

            editTextarea.value = seeLessSeeMoreText(editEdit);

            editSubmitButton.addEventListener("click", function (e) {
                appendingSubmitComment(e, editTextarea.value)
            });
        }
    }
}

function seeLessSeeMoreText(totalLongText) {
    let editEditText;
    if (totalLongText.length > 100) {
        editEditText = totalLongText.substring(0, editEdit.length - 12)
    }
    else {
        editEditText = totalLongText;
    }
    return totalLongText;
}

function appendingSubmitComment(e, replyTextarea) {
    let target;
    let parent;
    if (replyTextarea.length > 0) {
        target = e.target.closest(".replyMap");
        parent = target.parentElement;
        parent.removeChild(target);
        var commentListChild = parent.querySelector(".commentList");

        if (commentListChild == null) {
            commentListChild = document.createElement("div");
            commentListChild.setAttribute("class", "commentList");
            parent.appendChild(commentListChild);
        }
        console.log(parent);

        createComment(commentListChild, replyTextarea);
    }
    else {
        alert("Please Enter some comments in Text Box");
    }
}

function likePictureShow(e) {

    let likeImage = "";
    if (e.target.nextSibling == null) {
        likeImage = createElement("img", e.target.parentElement);
        likeImage.setAttribute("src", "https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt");

        let likeCountContainer = createElement("span", e.target.parentElement);
        likeCountContainer.setAttribute("class", "likeCountContainer");
        likeCountContainer.innerText = "1";

        let likeCount = e.target.parentElement.querySelector(".likeCountContainer").innerText;
        let likeCountNumber = parseInt(likeCount);

        console.log(likeCountNumber);

        e.target.addEventListener("click", likeCountFun);
        function likeCountFun() {
            likeCountNumber += 1;
            likeCountContainer.innerText = likeCountNumber;
        }
    }
}
(function () {
    let totalContainer = "", textareaContainer = "", submitButtonContainer = "", submitButton = "";

    totalContainer = document.getElementById("totalContainer");
    commentsList = document.getElementById("commentsList");

    textareaContainer = createElement("div", totalContainer);

    textarea = createElement("textarea", textareaContainer);
    textarea.setAttribute("class", "textarea");
    textarea.setAttribute("cols", "30");
    textarea.setAttribute("rows", "5");

    submitButtonContainer = createElement("div", totalContainer);
    submitButtonContainer.setAttribute("class", "submitBtnContainer");

    submitButton = createElement("button", submitButtonContainer);
    submitButton.setAttribute("class", "submitButton");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", newTextareaValue);
})();