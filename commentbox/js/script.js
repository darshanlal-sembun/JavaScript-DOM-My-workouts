var adding_div;
var commented;
var image_div;
var image;
var chat_div;
var user_div;
var username;
var username_h2;
var timing;
var time;
var time_mins;
var user_comments;
var comment_div;
var parent;
var testingparent;
var total;
var textarea;
var chat_lists;
var chat_heading;
var submit_btn;
var textarea_div;
var char_limit;

var like_reply;

var like_reply_div;

var like;
var like_span;

var like_btn;
var vr_line;

var reply;
var reply_span;

var reply_btn;
var thumb;

var thumb_span;
var like_emoji;

var child;
var parent;
var x;
var y;

var total1;
// var map;
function create_div(element, parent, attri) {
    child = document.createElement(element);
    child.innerText = "darshan";
    attri.forEach(function (value, key) {
        child.setAttribute(key, value);
    });
    return parent.append(child);
}

total1 = document.getElementById("total1");

a = new Map();
a.set("id", "new_testing");


create_div("div", total1, a);


// a.

//     document.getElementById("new_testing").innerHTML = text;
// function create(text) {
//     child = document.createElement(text);
//     return child;
// }







// const omega = String.fromCodePoint(0x3a9);
// console.log(omega);

total = document.getElementById("total");

textarea_div = document.createElement("div");
textarea_div.setAttribute("id", "text");
total.append(textarea_div);

textarea = document.createElement("textarea");
textarea.setAttribute("rows", "5");
textarea_div.append(textarea);

submit_div = document.createElement("div");
submit_div.setAttribute("id", "btn");
total.append(submit_div);

submit_btn = document.createElement("button");
submit_btn.setAttribute("class", "submit_btn");
submit_btn.innerText = "Submit";
submit_div.append(submit_btn);

submit_btn.addEventListener("click", comment);




chat_lists = document.getElementById("chat_lists");

chat_lists.addEventListener("click", show);
chat_heading = document.getElementsByClassName("chat_heading");


function comment() {
    //creating div
    adding_div = document.createElement("div");
    adding_div.setAttribute("class", "chat_heading");
    chat_lists.appendChild(adding_div);
    // image div
    image_div = document.createElement("div");
    image_div.setAttribute("class", "img_div");
    adding_div.appendChild(image_div);
    // image
    image = document.createElement("img");
    image.setAttribute("class", "picture");
    image.setAttribute("src", "../commentbox/images/photo_2022-12-31_12-06-44.jpg");
    image_div.appendChild(image);
    // entire comments div
    chat_div = document.createElement("div");
    chat_div.setAttribute("class", "chat_div");
    adding_div.appendChild(chat_div);
    // user name div
    user_div = document.createElement("div");
    user_div.setAttribute("class", "user_name_div");
    chat_div.appendChild(user_div);
    // username
    username = document.createElement("div");
    username.setAttribute("class", "user_name");
    user_div.appendChild(username);
    // username 
    username_h2 = document.createElement("span");
    username.setAttribute("class", "user_name span ");
    username_h2.innerText = "Darshan";
    username.appendChild(username_h2);
    // timing div
    timing = document.createElement("div");
    timing.setAttribute("class", "timing");
    user_div.appendChild(timing);
    // timing
    time_mins = document.createElement("span");
    time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    time_mins.innerText = time;
    timing.appendChild(time_mins);

    // 3 dots
    three_dots = document.createElement("span");
    three_dots.innerText = "...";
    three_dots.style.border = "1px solid black";
    user_div.appendChild(three_dots);

    // comments div
    comment_div = document.createElement("div");
    comment_div.setAttribute("class", "testing");
    chat_div.appendChild(comment_div);
    // comments
    user_comments = document.createElement("p");
    user_comments.innerText = "comments";
    user_comments.style.overflow = "hidden";
    user_comments.style.margin = "15px 0px 0px 0px";
    user_comments.style.position = "relative";
    comment_div.appendChild(user_comments);

    user_comments.innerText = textarea.value;
    textarea.value = '';

    like_reply = document.createElement("div");
    like_reply.setAttribute("class", "like_reply");
    adding_div.appendChild(like_reply);

    like_reply_div = document.createElement("div");
    like_reply_div.setAttribute("class", "like_reply_div");
    like_reply.appendChild(like_reply_div);

    like = document.createElement("div");
    like.setAttribute("class", "like");
    like_reply_div.appendChild(like);

    like_span = document.createElement("span");
    like.appendChild(like_span);

    like_btn = document.createElement("button");
    like_btn.innerText = "Like";
    // like_btn.setAttribute("class", "like button");
    like_span.appendChild(like_btn);

    like_emoji = document.createElement("span");
    like_emoji.innerText = "emoji";

    like.appendChild(like_emoji);


    var thumb_svg = document.createElement

    vr_line = document.createElement("div");
    vr_line.setAttribute("class", "vl");
    like_reply_div.appendChild(vr_line);

    reply = document.createElement("div");
    reply.setAttribute("class", "reply");
    like_reply_div.appendChild(reply);

    reply_span = document.createElement("span");
    reply.appendChild(reply_span);

    reply_btn = document.createElement("button");
    reply_btn.innerText = "Reply";
    like_btn.setAttribute("class", "reply button");
    reply_span.appendChild(reply_btn);

    // thumb = document.createElement("div");
    // thumb.setAttribute("id", "thumb");
    // like_reply.appendChild(thumb);

    // thumb_span = document.createElement("span");
    // thumb_span.innerText = "U+1F44D";
    // thumb.appendChild(thumb_span);

    char_limit = 150;


}
var like_clicked = document.getElementById("like_btn");
if (like_clicked.addEventListener("click", like_fun)) {
}
function like_fun() {
    thumb_click = document.getElementById("thumb");
    thumb_click.style.display = "block";
    // alert("like worked" + "(U+1F44D))");
};
var see_more_btn;
var see_more_txt;
var like_btn;
// if (textarea.value.length > char_limit) {

//     console.log(textarea.value);

//     see_more_btn = document.createElement("button");
//     see_more_btn.style.position = "absolute";
//     see_more_btn.style.right = "0";
//     see_more_btn.style.bottom = "0";
//     see_more_btn.style.backgroundColor = "red";
//     see_more_txt.appendChild(see_more_btn);

//     see_more_txt = document.createElement("span");
//     see_more_txt.innerText = "... see more";
//     user_comments.appendChild(see_more_txt);

//     user_comments.innerText = textarea.value.substring(0, 150);
// }
// else {
//     user_comments.innerText = textarea.value;
// }


// for (i = 0; i < chat_heading.length; i++) {
//     chat_heading[i].addEventListener("click", show);
// }   





function show(e) {

    console.log(e.target.nodeName.toLowerCase() == "p".toLowerCase());
    console.log(typeof (e.target.nodeName.toLowerCase()));

    if (e.target.nodeName.toLowerCase() == "p") {
        textarea.value = e.target.innerText;
        testingparent = e.target.closest(".chat_heading");
        parent = testingparent.parentElement;
        parent.removeChild(testingparent);

    }
}


var thumb_click;



// read more and read less


// var reading_text = document.getElementById("lal");
// console.log(reading_text);
// console.log(reading_text.innerHTML);
// console.log(reading_text.innerText);
// console.log(reading_text.innerText.length);
// console.log(typeof (reading_text.innerText.length));

// if (reading_text.innerText.length > 150) {

//     var see_more_btn = document.createElement("button");
//     see_more_btn.innerText = "see more";
//     see_more_btn.style.cursor = "pointer";
//     see_more_btn.style.border = "1px solid black";

//     total.appendChild(see_more_btn);


//     reading_text.innerText = reading_text.innerText.substring(0, 150) + "..." + see_more_btn.innerText;

//     see_more_btn.addEventListener("click", more);
//     function more(e) {
//         console.log(e);
//         console.log(e.target);
//         alert("clicked");
//         reading_text.innerText = reading_text.innerText.substring(0, reading_text.innerText.length);
//     }
//     console.log("condition working");
// }


// else {
//     alert("failed");
// }



// var heading = document.getElementById("testing_head");

// chat_list.appendChild(heading);

// console.log(heading.querySelector("p"));
// var comment = heading.querySelector("p");
// parent = heading.parentElement;

// parent.appendChild(heading);
// adding_div.innerText = commented;
// comment.innerHTML = commented;

// chat_lists.append(heading);
// textarea.value = "";

//adding_div.addEventListener("click", function () { show(this) });
//  adding_div.addEventListener("click", function () { clear(this) });




// console.log(e);
// console.log(e.target);
// console.log(e.target.innerText);


//console.log(testingparent);


//console.log(testingparent.parentElement);


// console.log(e.target.parentElement);

// console.log(e.target.parentNode);

// var testingparent = e.target.closest(".chat_heading");
// console.log(testingparent);
// // alert(e.target);
// console.log(e.target.innerText);
// textarea.value = e.target.innerText;
// //alert(textarea.value + "textarea value ");
// var parent = testingparent.parentElement;
// console.log(testingparent.parentElement);
// parent.removeChild(testingparent);



// var date_hour = document.getElementById("date");
// date_hour.addEventListener("click", mins);

// const date = new Date();
// //console.log(date);
// let hours;
// let minutes;
// let ap;
// let mergeTime;
// var timing;


//     hours = date.getHours();
//     minutes = date.getMinutes();
//     ap = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     minutes = minutes.toString().padStart(2, '0');
//     mergeTime = hours + ':' + minutes + ' ' + ap;
//     alert(mergeTime);

//     timing = document.querySelectorAll("span");
//     for (i = 0; i < timing.length; i++) {
//         timing[i].innerText = mergeTime;
//     }

//var try = document.querySelectorAll("span");
//console.log(try);

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// };


// var a;
// a = document.getElementById("lal").innerText;
// console.log(a);
// console.log(a.innerText);

// console.log(a.innerText.length);
// console.log(a.value.length);
// var char_limit = 150;

// if (a.length < char_limit)
//     console.log('<div> ' + a + '</div>');
// else
//     console.log('<div><span class="short-text">' + a.substr(0, char_limit) + '</span><span class="long-text">' + a.substr(char_limit) + '</span><span class="text-dots">...</span><span class="show-more-button" data-more="0">See More</span></div>');




// document.querySelector('.show-more-button').addEventListener('click', function () {
//     // If text is shown less, then show complete
//     if (this.getAttribute('data-more') == 0) {
//         this.setAttribute('data-more', 1);
//         this.style.display = 'block';
//         this.innerHTML = 'Read Less';

//         this.previousElementSibling.style.display = 'none';
//         this.previousElementSibling.previousElementSibling.style.display = 'inline';
//     }
//     // If text is shown complete, then show less
//     else if (this.getAttribute('data-more') == 1) {
//         this.setAttribute('data-more', 0);
//         this.style.display = 'inline';
//         this.innerHTML = 'Read More';

//         this.previousElementSibling.style.display = 'inline';
//         this.previousElementSibling.previousElementSibling.style.display = 'none';
//     }
// });


