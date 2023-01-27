let textarea_text;
let time;
let chat_lists;

let child;
let element;
let parent;
let attribute;
let chat_container;
let reply_txtarea;
(function () {
    let total_container;
    let textarea_container_map;
    let textarea_container;
    let textarea_text_map;
    let submit_container_map;
    let submit_container;
    let submit_button_map;
    let submit_button;

    total_container = document.getElementById("total_container");
    chat_lists = document.getElementById("chat_lists");

    textarea_container_map = new Map();
    textarea_container_map.set("class", "textarea_container_map");
    textarea_container = create_element("div", total_container, textarea_container_map);

    textarea_text_map = new Map();
    textarea_text_map.set("class", "textarea_text_map");
    textarea_text_map.set("rows", "5");
    textarea_text = create_element("textarea", textarea_container, textarea_text_map);

    submit_container_map = new Map();
    submit_container_map.set("class", "submit_container_map");
    submit_container = create_element("div", total_container, submit_container_map);

    submit_button_map = new Map();
    submit_button_map.set("class", "submit_button_map");
    submit_button = create_element("button", submit_container, submit_button_map);
    submit_button.innerText = "Submit";

    time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    submit_button.addEventListener("click", new_try);

})();

function create_element(element, parent, attribute) {
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

function new_try() {
    let textarea_text_value;
    textarea_text_value = textarea_text.value;
    new_comment(chat_lists, textarea_text_value);
}
let like_reply_container;
function new_comment(parent, text_values) {

    let container_map;
    let image_map;
    let img_map;
    let chat_container_map;
    let user_info_container_map;
    let user_name_div_map;
    let user_name_map;
    let user_name_text_map;
    let timing_map;
    let timing_name_map;
    let dots_map;
    let comments_map;
    let like_reply_map;
    let like_map;
    let like_button_map;
    let line_map;
    let reply_map;
    let reply_btn_map;

    let container;
    let image_container;
    let picture;

    let user_info_container;
    let user_name_container;
    let user_name;
    let span_name;
    let timing_new;
    let timing_name;
    let dots_name;
    let comments;
 
    let like_new;
    let like_button;
    let line;
    let reply_new;
    let reply_new_button;

    container_map = new Map();
    container_map.set("class", "container");
    container = create_element("div", parent, container_map);

    image_map = new Map();
    image_map.set("class", "image_container");
    image_container = create_element("div", container, image_map);

    img_map = new Map();
    img_map.set("class", "img");
    // img_map.set("width", "40px");
    // img_map.set("height", "40px");
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
}
let reply_submit_btn;
function reply_comments(e) {
    let reply_total_textarea_map;

    let reply_submit_btn_map;
    console.log(e.target.closest(".container"));

    reply_total_textarea_map = new Map();
    reply_total_textarea_map.set("class", "reply_total_textarea");
    reply_txtarea = create_element("textarea", like_reply_container, reply_total_textarea_map);

    reply_submit_btn_map = new Map();
    reply_submit_btn_map.set("class", "reply_total_submit");
    reply_submit_btn = create_element("button", like_reply_container, reply_submit_btn_map);
    reply_submit_btn.innerText = "Submit";
    reply_submit_btn.addEventListener("click", appending_main_comments);
}

function appending_main_comments(e) {
    let comments_txt;

    comments_txt = reply_txtarea.value;

    chat_container.remove(reply_txtarea);
    chat_container.remove(reply_submit_btn);

    new_comment(chat_container, comments_txt);
}

function content(total_text, comments_parent) {
    let txtValue;
    let txtValue_length;
    let short_text_p_map;
    let short_text;
    let long_text_map;
    let long_text;

    txtValue = total_text;
    txtValue_length = total_text.length;

    // console.log(txtValue_length);
    if (txtValue_length > 100) {
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
    if (txtValue_length > 100) {
        long_text_map.set("class", "hide");
    }
    else {
        long_text_map.set("class", "show");
    }
    long_text = create_element_without_parent("p", long_text_map);
    long_text.classList.add("long_text_div");

    txtValue = total_text.substring(0, total_text.length);
    long_text.innerText = txtValue;

    if (txtValue_length > 100) {
        three_dots_icon = seeMore("...See Less");
        long_text.appendChild(three_dots_icon);
    }
    comments_parent.appendChild(long_text);
}

function seeMore(txtMore) {
    let three_dots_icon_map;
    let three_dots_icon;
    let clicked_element;
    let seemoreParent;
    let target_innertext;
    let target_parentElement;

    three_dots_icon_map = new Map();
    three_dots_icon_map.set("class", "three_seemore");
    three_dots_icon_map.set("href", "#");
    three_dots_icon = create_element_without_parent("a", three_dots_icon_map);
    three_dots_icon.innerText = txtMore;

    three_dots_icon.addEventListener("click", function (e) {
        e.stopPropagation();

        target_innertext = e.target.innerText;
        clicked_element = target_innertext;

        target_parentElement = e.target.parentElement;
        seemoreParent = target_parentElement;

        if (clicked_element === "...See More") {
            seemoreParent.classList.add("hide");
            seemoreParent.nextSibling.classList.remove("hide");
            seemoreParent.nextSibling.classList.add("show");
        }
        else if (clicked_element === "...See Less") {
            seemoreParent.classList.add("hide");
            seemoreParent.previousSibling.classList.remove("hide");
            seemoreParent.previousSibling.classList.add("show");
        }
    });
    return three_dots_icon;
}

function image_show(e) {
    let parent_element;
    let like_emoji_image_map;
    let like_emoji_image;
    let e_nextsibling = e.nextSibling;
    parent_element = e.parentElement;
    if (e_nextsibling == null) {
        like_emoji_image_map = new Map();
        like_emoji_image_map.set("class", "like_emoji_map");
        like_emoji_image_map.set("src", "../commentbox/images/like.png");
        like_emoji_image = create_element("img", parent_element, like_emoji_image_map);
    }
}

function toggle_three_dots(e) {
    let options_menu;
    let clone_option_menu;
    let e_target = e.target;
    let hide_show;
    options_menu = document.getElementById("context_menu");
    clone_option_menu = options_menu.cloneNode(true);

    e_target.appendChild(clone_option_menu);

    hide_show = document.querySelectorAll(".hide_show");
    for (i = 0; i < hide_show.length; i++) {
        if (hide_show[i].classList.contains("hide_show")) {
            hide_show[i].classList.remove("hide_show");
        }
    }
    clone_option_menu.classList.add("hide_show");
}
let total_comments_div;
function toggle_options(e) {
    let remove_parent;
    let total_comments_div_parent;
    let messages_removed;
    let textarea_value;
    let e_target_text;
    e_target_text = e.target.innerText;

    total_comments_div = e.target.closest(".container");

    total_comments_div_parent = total_comments_div.parentElement;
    remove_parent = total_comments_div_parent;
    if (e_target_text === "Edit") {
        messages_removed = total_comments_div.querySelector(".long_text_div");
        textarea_value = messages_removed.childNodes[0].nodeValue;
        textarea_text.value = textarea_value;
        remove_parent.removeChild(total_comments_div);
    }
    else if (e_target_text === "Delete") {
        remove_parent.removeChild(total_comments_div);
    }
}
