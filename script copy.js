function createElement(tagName, parentName, tagAttribute) {
    let child;
    child = document.createElement(tagName);
    tagAttribute.forEach(function (value, key) {
        child.setAttribute(key, value);
    });
    parentName.appendChild(child);
    return child;
}

function createElementWithoutParent(tagName, tagAttribute) {
    let child;
    child = document.createElement(tagName);
    tagAttribute.forEach(function (value, key) {
        child.setAttribute(key, value);
    });
    return child;
}

(function () {

    let totalContainer;
    let textareaContainer;
    let submitButtonContainer;
    let submitButton;

    // map object variables
    let textareaContainerMap;
    let textareaMap;
    let submitButtonContainerMap;
    let submitButtonMap;

    totalContainer = document.getElementById("totalContainer");
    commentsList = document.getElementById("commentsList");

    textareaContainerMap = new Map();
    textareaContainerMap.set("class", "textareaContainer");
    textareaContainer = createElement("div", totalContainer, textareaContainerMap);

    textareaMap = new Map();
    textareaMap.set("class", "textarea");
    textareaMap.set("cols", "30");
    textareaMap.set("rows", "5");
    textarea = createElement("textarea", textareaContainer, textareaMap);

    submitButtonContainerMap = new Map();
    submitButtonContainerMap.set("class", "submitBtnContainer");
    submitButtonContainer = createElement("div", totalContainer, submitButtonContainerMap);

    submitButtonMap = new Map();
    submitButtonMap.set("class", "submitButton");
    submitButton = createElement("button", submitButtonContainer, submitButtonMap);
    submitButton.innerText = "Submit";

    submitButton.addEventListener("click", newTextareaValue);
})();

function newTextareaValue() {
    let textareaValues;
    if (textarea.value.length > 0) {
        textareaValues = textarea.value;
        createComment(commentsList, textareaValues);
    }
    else {
        alert("Please Enter some comments in Text Box");
    }
}

function createComment(parent, textareaValues) {
    let container;
    let imageContainer;
    let profilePicture;
    let commentContainer;
    let chatContainer;
    let userNameTiming;
    let userNameContainer;
    let userName;
    let timing;
    let currentTime;
    let threeDots;
    let message;
    let likeReplyContainer;
    let likeReplySubContainer;
    let likeImageIcon;
    let likeBtn;
    let verticalLine;
    let replyBtnContainer;
    let replyBtn;
    let fragment;
    let time;
    // map object variables
    let containerMap;
    let imageContainerMap;
    let profilePictureMap;
    let commentContainerMap;
    let chatContainerMap;
    let userNameTimingMap;
    let userNameContainerMap;
    let userNameMap;
    let timingMap;
    let currentTimeMap;
    let threeDotsMap;
    let messageMap;
    let likeReplyContainerMap;
    let likeReplySubContainerMap;
    let likeImageIconMap;
    let likeBtnMap;
    let verticalLineMap;
    let replyBtnContainerMap;
    let replyBtnMap;

    fragment = new DocumentFragment();
    time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

    containerMap = new Map();
    containerMap.set("class", "container");
    container = createElement("div", fragment, containerMap);

    imageContainerMap = new Map();
    imageContainerMap.set("class", "imageContainer");
    imageContainer = createElement("div", container, imageContainerMap);

    profilePictureMap = new Map();
    profilePictureMap.set("class", "profilePicture");
    profilePictureMap.set("src", "../linkedin clone/images/index.jpg");
    profilePicture = createElement("img", imageContainer, profilePictureMap);

    commentContainerMap = new Map();
    commentContainerMap.set("class", "commentContainer");
    commentContainer = createElement("div", container, commentContainerMap);

    chatContainerMap = new Map();
    chatContainerMap.set("class", "chatContainer");
    chatContainer = createElement("div", commentContainer, chatContainerMap);

    userNameTimingMap = new Map();
    userNameTimingMap.set("class", "userNameTiming");
    userNameTiming = createElement("div", chatContainer, userNameTimingMap);

    userNameContainerMap = new Map();
    userNameContainerMap.set("class", "userNameContainer");
    userNameContainer = createElement("div", userNameTiming, userNameContainerMap);

    userNameMap = new Map();
    userNameMap.set("class", "userName");
    userName = createElement("span", userNameContainer, userNameMap);
    userName.innerText = "Darshan";

    timingMap = new Map();
    timingMap.set("class", "timingContainer");
    timing = createElement("div", userNameTiming, timingMap);

    currentTimeMap = new Map();
    currentTimeMap.set("class", "currentTime");
    currentTime = createElement("h5", timing, currentTimeMap);
    currentTime.innerText = time;

    threeDotsMap = new Map();
    threeDotsMap.set("class", "threeDots");
    threeDots = createElement("span", timing, threeDotsMap);
    threeDots.innerText = "...";
    threeDots.addEventListener("click", editOptions);

    messageMap = new Map();
    messageMap.set("class", "message");
    message = createElement("div", chatContainer, messageMap);

    content(textareaValues, message);

    likeReplyContainerMap = new Map();
    likeReplyContainerMap.set("class", "likeReplyContainer");
    likeReplyContainer = createElement("div", commentContainer, likeReplyContainerMap);

    likeReplySubContainerMap = new Map();
    likeReplySubContainerMap.set("class", "likeReplySubContainer");
    likeReplySubContainer = createElement("div", likeReplyContainer, likeReplySubContainerMap);

    likeImageIconMap = new Map();
    likeImageIconMap.set("class", "likeImageIcon");
    likeImageIcon = createElement("div", likeReplySubContainer, likeImageIconMap);

    likeBtnMap = new Map();
    likeBtnMap.set("class", "likeBtn");
    likeBtn = createElement("button", likeImageIcon, likeBtnMap);
    likeBtn.innerText = "Like";
    likeBtn.addEventListener("click", likePictureShow);

    verticalLineMap = new Map();
    verticalLineMap.set("class", "verticalLine");
    verticalLine = createElement("div", likeReplySubContainer, verticalLineMap);
    verticalLine.innerText = "|";

    replyBtnContainerMap = new Map();
    replyBtnContainerMap.set("class", "replyBtnContainer");
    replyBtnContainer = createElement("div", likeReplySubContainer, replyBtnContainerMap);

    replyBtnMap = new Map();
    replyBtnMap.set("class", "replyBtn");
    replyBtn = createElement("button", replyBtnContainer, replyBtnMap);
    replyBtn.innerText = "Reply";
    replyBtn.addEventListener("click", replyComments);

    parent.appendChild(fragment);
    textarea.value = "";
}
let replyTextarea;
function replyComments(e) {
    let replyContainer;
    let replycontains;
    let checkk;
    let reply
    let replyTextareaContainer;
    
    let replybuttonContainer;
    let replybutton;
    // map object variables
    let replyMap;
    let replyTextareaContainerMap;
    let replyTextareaMap;
    let replybuttonContainerMap;
    let replybuttonMap;

    
    replyContainer = e.target.closest(".likeReplyContainer");
    replycontains = e.target.closest(".likeReplySubContainer");

    checkk = replyContainer.querySelector('.replyMap');

    if (checkk == null) {

        replyMap = new Map();
        replyMap.set("class", "replyMap");
        reply = createElement("div", replyContainer, replyMap);

        replyTextareaContainerMap = new Map();
        replyTextareaContainerMap.set("class", "replyTextareaContainerMap");
        replyTextareaContainer = createElement("div", reply, replyTextareaContainerMap);

        replyTextareaMap = new Map();
        replyTextareaMap.set("class", "replyTextareaMap");
        replyTextareaMap.set("class", "textarea");
        replyTextarea = createElement("textarea", replyTextareaContainer, replyTextareaMap);

        replybuttonContainerMap = new Map();
        replybuttonContainerMap.set("class", "replybuttonContainerMap");
        replybuttonContainerMap.set("class", "submitBtnContainer");
        replybuttonContainer = createElement("div", reply, replybuttonContainerMap);

        replybuttonMap = new Map();
        replybuttonMap.set("class", "replybuttonMap");
        replybuttonMap.set("class", "submitButton");
        replybutton = createElement("button", replybuttonContainer, replybuttonMap);
        replybutton.innerText = "submit";

        replybutton.addEventListener("click", appendingSubmitComment);
        replycontains.after(reply);
    }
}
function appendingSubmitComment(e) {
    let replyComments;
    let target;
    let parent;

    replyComments = replyTextarea.value;

    if (replyComments.length > 0) {
        
        target = e.target.closest(".replyMap");
        parent = target.parentElement;
        parent.removeChild(target);
        createComment(parent, replyComments);
    }
    else {
        alert("Please Enter some comments in Text Box");
    }
}

function content(textareaValues, message) {
    let shortText;
    let longText;
    let text;
    let textLength;
    let textareaValuesLength;
    // map object variabels
    let shortTextMap;
    let longTextMap;
    text = textareaValues;
    textLength = text.length;
    textareaValuesLength = textareaValues.length;

    if (textLength > 100) {
        shortTextMap = new Map();
        shortTextMap.set("class", "show");
        shortText = createElementWithoutParent("span", shortTextMap);
        text = textareaValues.substring(0, 100);
        shortText.innerText = text;

        seeMoreThreeDots = seeMoreLess("... See More");
        shortText.appendChild(seeMoreThreeDots);
        message.appendChild(shortText);
    }
    longTextMap = new Map();
    if (textLength > 100) {
        longTextMap.set("class", "hide");
    }
    else {
        longTextMap.set("class", "show");
    }
    longText = createElementWithoutParent("span", longTextMap);
    longText.classList.add("longText");

    text = textareaValues.substring(0, textareaValuesLength);
    longText.innerText = text;

    if (textareaValuesLength > 100) {
        seeMoreThreeDots = seeMoreLess("... See Less");
        longText.appendChild(seeMoreThreeDots);
    }
    message.appendChild(longText);
}


function seeMoreLess(textareaValuesText) {
    let moreLess;
    let moreLessInnerText;
    let moreLessCopyText;
    let moreLessParent;
    let moreLessCopyParent;
    // map object variable
    let moreLessMap;

    moreLessMap = new Map();
    moreLessMap.set("href", "#");
    moreLessMap.set("class", "moreLess");
    moreLess = createElementWithoutParent("a", moreLessMap);
    moreLess.innerText = textareaValuesText;

    moreLess.addEventListener("click", function (e) {

        e.stopPropagation();

        moreLessInnerText = e.target.innerText;
        moreLessCopyText = moreLessInnerText;
        moreLessParent = e.target.parentElement;
        moreLessCopyParent = moreLessParent;

        if (moreLessCopyText === "... See More") {
            moreLessCopyParent.classList.add("hide");
            moreLessCopyParent.classList.remove("show");
            moreLessCopyParent.nextSibling.classList.remove("hide");
            moreLessCopyParent.nextSibling.classList.add("show");
        }
        else if (moreLessCopyText === "... See Less") {
            moreLessCopyParent.classList.add("hide");
            moreLessCopyParent.classList.remove("show");
            moreLessCopyParent.previousSibling.classList.remove("hide");
            moreLessCopyParent.previousSibling.classList.add("show");
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

    for (i = 0; i < show.length; i++) {
        if (show[i].classList.contains("show")) {
            show[i].classList.remove("show");
        }
    }
    cloneEditMenu.classList.add("show");
}

function editDeleteOptions(e) {
    let editDeleteInnerText;
    let editDeleteContainer;
    let editDeleteParent;
    let editDeleteRemoveParent;
    let editText;

    editDeleteInnerText = e.target.innerText;
    editDeleteContainer = e.target.closest(".container");

    editDeleteParent = editDeleteContainer.parentElement;
    editDeleteRemoveParent = editDeleteParent;

    if (editDeleteInnerText === "Edit") {

        editText = editDeleteContainer.querySelector(".longText");

        if (editText.innerText.length > 100) {
            textarea.value = editText.innerText.substring(0, editText.innerText.length - 12);
        }
        else {
            textarea.value = editText.innerText;
        }
        editDeleteRemoveParent.removeChild(editDeleteContainer);
    }
    else if (editDeleteInnerText === "Delete") {
        editDeleteRemoveParent.removeChild(editDeleteContainer);
    }
}

function likePictureShow(e) {
    let likeImage;
    let likePicture;
    let parent;
    // map object variable
    let likeImageMap;
    likePicture = e.target.nextSibling;
    parent = e.target.parentElement;

    if (likePicture == null) {
        likeImageMap = new Map();
        likeImageMap.set("id", "likeImage");
        likeImageMap.set("src", "https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt");
        likeImage = createElement("img", parent, likeImageMap);
    }
}