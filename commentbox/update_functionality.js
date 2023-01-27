var total_container;
var element;
var parent;
var attribute;
// mapping variables
var textarea_container_map;
var textarea_text_map;
var submit_container_map;
var submit_button_map;
var container_map;
var image_map;
var chat_container_map;
var img_map;
var user_info_container_map;
var user_name_div_map;
var user_name_map;
var user_name_text_map;
var timing_map;
var timing_name_map;
var dots_map;
var dots_sup_map;
var dots_strong_map;
var comments_map;
var comments_name_map;
var like_reply_map;
var like_map;
var like_button_map;
var like_emoji_map;
var line_map;
var reply_map;
var reply_btn_map;
var like_emoji_image_map;

// creating element variables
var textarea_container;
var textarea_text;
var submit_container;
var submit_button;
var container;
var image_container;
var chat_container;
var picture;
var chat_container;
var user_info_container;
var user_name_container;
var user_name;
var span_name;
var timing_new;
var timing_name;
var dots_name;
var dots_sup;
var dots_strong;
var comments;
var comments_name;
var like_reply_container;
var like_new;
var like_button;
var like_emoji;
var line;
var reply_new;
var reply_new_button;
var like_emoji_image;



total_container = document.getElementById("total_container");

textarea_container_map = new Map();
textarea_container_map.set("class", "textarea_container_map");

textarea_container = create_element("div", total_container, textarea_container_map);

textarea_text_map = new Map();
textarea_text_map.set("class", "textarea_text_map");
textarea_text_map.set("rows", "5");

textarea_text = create_element("textarea", textarea_container, textarea_text_map);


// console.log(textarea_text.value);
// console.log(textarea_text_value);

submit_container_map = new Map();
submit_container_map.set("class", "submit_container_map");

submit_container = create_element("div", total_container, submit_container_map);

submit_button_map = new Map();
submit_button_map.set("class", "submit_button_map");

submit_button = create_element("button", submit_container, submit_button_map);
submit_button.innerText = "Submit";

function create_element(element, parent, attribute) {
    // console.log(parent);
    child = document.createElement(element);
    attribute.forEach(function (value, key) {
        child.setAttribute(key, value);
    });
    parent.append(child);
    return child;
}

function create_element_without_parent(element, attribute) {
    child = document.createElement(element);
    attribute.forEach(function (value, key) {
        child.setAttribute(key, value);
    });
    return child;
}

submit_button.addEventListener("click", new_try);

chat_lists = document.getElementById("chat_lists");
//chat_lists.addEventListener("click", show);

var time;
time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

// var current_timing = document.getElementById("current_time");
// current_timing.innerText = time;

function new_try() {
    var textarea_text_value = textarea_text.value;
    new_comment(chat_lists, textarea_text_value);
}

function new_comment(parent, text_values) {
    // console.log(textarea_text);
    // console.log(textarea_text.value);
    // console.log(textarea_text_value);
    // console.log(textarea_text);

    container_map = new Map();
    container_map.set("class", "container");

    container = create_element("div", parent, container_map);

    image_map = new Map();
    image_map.set("class", "image_container");

    image_container = create_element("div", container, image_map);

    img_map = new Map();
    img_map.set("class", "img");
    img_map.set("width", "40px");
    img_map.set("height", "40px");
    img_map.set("src", "../commentbox/images/photo_2022-12-31_12-06-44.jpg");

    picture = create_element("img", image_container, img_map);

    chat_container_map = new Map();
    chat_container_map.set("class", "chat_container");

    chat_container = create_element("div", container, chat_container_map);

    user_info_container_map = new Map();
    user_info_container_map.set("class", "user_info_container");

    user_info_container = create_element("div", chat_container, user_info_container_map);

    user_name_div_map = new Map();
    user_name_div_map.set("class", "user_name_div");

    user_name_container = create_element("div", user_info_container, user_name_div_map);

    user_name_map = new Map();
    user_name_map.set("class", "user_name");

    user_name = create_element("div", user_name_container, user_name_map);

    user_name_text_map = new Map();
    user_name_text_map.set("class", "user_name_text");

    span_name = create_element("span", user_name, user_name_text_map);
    span_name.innerText = "Darshan";

    timing_map = new Map();
    timing_map.set("class", "timing");

    timing_new = create_element("div", user_name_container, timing_map);

    timing_name_map = new Map();
    timing_name_map.set("id", "current_time");

    timing_name = create_element("h6", timing_new, timing_name_map);
    timing_name.innerText = time;

    dots_map = new Map();
    dots_map.set("id", "toggle_dots");

    dots_name = create_element("span", timing_new, dots_map);
    dots_name.innerText = "...";
    dots_name.addEventListener("click", toggle_three_dots);

    comments_map = new Map();
    comments_map.set("class", "comments_div");

    comments = create_element("div", user_info_container, comments_map);

    content(text_values, comments);

    like_reply_map = new Map();
    like_reply_map.set("class", "like_reply_map");

    like_reply_container = create_element("div", chat_container, like_reply_map);

    like_map = new Map();
    like_map.set("class", "like_map");

    like_new = create_element("div", like_reply_container, like_map);

    like_button_map = new Map();
    like_button_map.set("class", "like_button_map");

    like_button = create_element("button", like_new, like_button_map);
    like_button.innerText = "Like";

    like_button.addEventListener("click", function () { image_show(this) });

    line_map = new Map();
    line_map.set("class", "line_map");

    line = create_element("div", like_reply_container, line_map);
    line.innerText = "|";

    reply_map = new Map();
    reply_map.set("class", "reply_map");

    reply_new = create_element("div", like_reply_container, reply_map);

    reply_btn_map = new Map();
    reply_btn_map.set("class", "reply_btn_map");

    reply_new_button = create_element("button", reply_new, reply_btn_map);
    reply_new_button.innerText = "Reply";
    reply_new_button.addEventListener("click", reply_comments);

    textarea_text.value = " ";
    //  console.log(textarea_text.value);
}

var reply_txtarea;
function reply_comments(e) {

    // console.log(e.target);
    var checking = e.target.closest(".container");
    // console.log(checking);
    var checking = e.target.closest(".chat_container");
    // console.log(checking);

    reply_total_textarea_map = new Map();
    reply_total_textarea_map.set("class", "reply_total_textarea");

    reply_txtarea = create_element("textarea", chat_container, reply_total_textarea_map);
    // reply_txtarea.value = "asdf";

    var reply_submit_btn_map = new Map();
    reply_submit_btn_map.set("class", "reply_total_submit");

     reply_submit_btn = create_element("button", chat_container, reply_submit_btn_map);
    reply_submit_btn.innerText = "Submit";

    reply_submit_btn.addEventListener("click", appending_main_comments);
}
var reply_submit_btn;
function appending_main_comments(e) {
    console.log(e.target);
    console.log(e.target.closest(".container"));

    var appending_comment = e.target.closest(".like_reply_map");
    var comments_txt = reply_txtarea.value;
    console.log(comments_txt);
    // chat_container.remove(reply_txtarea);
    // chat_container.remove(reply_submit_btn);
    // new_comment(chat_container,comments_txt);
    new_comment(appending_comment, comments_txt);
}
function content(total_text, comments_parent) {
    var txtValue = total_text;

    if (total_text.length > 100) {
        short_text_p_map = new Map();
        short_text_p_map.set("class", "show");

        short_text = create_element_without_parent("p", short_text_p_map);
        txtValue = total_text.substring(0, 100);
        short_text.innerText = txtValue;
        three_dots_icon = seeMore("...See More");
        short_text.appendChild(three_dots_icon);
        comments_parent.appendChild(short_text);
    }
    long_text_map = new Map();
    if (total_text.length > 100) {
        // long_text_map.set("class", "long_text_div");
        long_text_map.set("class", "hide");
        // long_text_map.set("class", "long_text_div");
    }
    else {
        long_text_map.set("class", "show");
    }

    long_text = create_element_without_parent("p", long_text_map);
    long_text.classList.add("long_text_div");

    txtValue = total_text.substring(0, total_text.length);
    long_text.innerText = txtValue;

    if (total_text.length > 100) {

        three_dots_icon = seeMore("...See Less");
        long_text.appendChild(three_dots_icon);
    }
    comments_parent.appendChild(long_text);
}

function seeMore(txtMore) {

    console.log(typeof (txtMore));

    three_dots_icon_map = new Map();
    three_dots_icon_map.set("class", "three_seemore");
    three_dots_icon_map.set("href", "#");

    three_dots_icon = create_element_without_parent("a", three_dots_icon_map);
    three_dots_icon.innerText = txtMore;
    console.log(three_dots_icon);

    three_dots_icon.addEventListener("click", function (e) {
        console.log(e.target);
        console.log(e.target.parentElement);
        e.stopPropagation();
        var clicked_element = e.target.innerText;
        var seemoreParent = e.target.parentElement;
        console.log(txtMore + " " + "txtmore");

        if (clicked_element === "...See More") {

            seemoreParent.classList.add("hide");
            seemoreParent.nextSibling.classList.remove("hide");
            //  seemoreParent.nextSibling.classList.remove("long_text_div"); 
            seemoreParent.nextSibling.classList.add("show");

            // seemoreParent.setAttribute("class", "hide");
            // seemoreParent.nextSibling.setAttribute("class", "show");
        }
        else if (clicked_element === "...See Less") {

            seemoreParent.classList.add("hide");

            seemoreParent.previousSibling.classList.remove("hide");
            seemoreParent.previousSibling.classList.add("show");

            // seemoreParent.setAttribute("class", "hide");
            // seemoreParent.previousSibling.setAttribute("class", "show");
        }
    });
    return three_dots_icon;
}
// var test = document.getElementById("lal");
// var testing_ = document.getElementById("dar");
// test.addEventListener("click", emoji);

function emoji() {
    testing_.style.display = "block";
}

function image_show(e) {

    parent_element = e.parentElement;
    console.log(e);
    console.log(parent_element);

    if (e.nextSibling == null) {
        like_emoji_image_map = new Map();
        like_emoji_image_map.set("class", "like_emoji_map");
        like_emoji_image_map.set("src", "../commentbox/images/like.png");

        like_emoji_image = create_element("img", parent_element, like_emoji_image_map);
    }
}

function toggle_three_dots(e) {

    // console.log(e.target);
    var options_menu = document.getElementById("context_menu");
    var clone_option_menu = options_menu.cloneNode(true);
    // console.log(clone_option_menu);

    e.target.appendChild(clone_option_menu);

    var hide_show = document.querySelectorAll(".hide_show");
    for (i = 0; i < hide_show.length; i++) {
        if (hide_show[i].classList.contains("hide_show")) {
            hide_show[i].classList.remove("hide_show");
        }
    }
    clone_option_menu.classList.add("hide_show");

}

// function edit_btn(e) {
//     console.log("edit clicked succesful");
//     // console.log(e);
//     console.log(e.target);

//     var total_comments_div = e.target.closest(".container");
//     console.log(total_comments_div);

//     var remove_parent = total_comments_div.parentElement;
//     console.log(remove_parent);
//     var messages_removed = total_comments_div.querySelector(".long_text_div");
//     console.log(messages_removed);
//     var textarea_value = messages_removed.childNodes[0].nodeValue;
//     console.log(textarea_value);
//     textarea_text.value = textarea_value;
//     remove_parent.removeChild(total_comments_div);

//     // console.log(total_comments_div);
//     // // console.log(long_text);
//     // console.log(total_comments_div.parentElement);
// }

function toggle_options(e) {
    console.log(e.target.innerText);

    var total_comments_div = e.target.closest(".container");
    console.log(total_comments_div);

    var msgelement = e.target.closest(".user_info_container");
    console.log(msgelement);
    var remove_parent = total_comments_div.parentElement;
    console.log(remove_parent);

    if (e.target.innerText === "Edit") {
        // var total_comments_div = e.target.closest(".container");
        // console.log(total_comments_div);

        // var remove_parent = total_comments_div.parentElement;
        // console.log(remove_parent);
        var messages_removed = total_comments_div.querySelector(".long_text_div");
        console.log(messages_removed);
        var textarea_value = messages_removed.childNodes[0].nodeValue;
        console.log(textarea_value);
        textarea_text.value = textarea_value;
        remove_parent.removeChild(total_comments_div);
        console.log("success");
    }
    else if (e.target.innerText === "Delete") {
        console.log(e.target.innerText);
        console.log("deleted");
        remove_parent.removeChild(total_comments_div);
    }

};
function show(e) {

    console.log(e.target.nodeName.toLowerCase() == "p".toLowerCase());
    console.log(typeof (e.target.nodeName.toLowerCase()));

    if (e.target.nodeName.toLowerCase() == "p") {
        textarea_text.value = e.target.innerText;
        testingparent = e.target.closest(".container");
        parent = testingparent.parentElement;
        parent.removeChild(testingparent);
    }
}