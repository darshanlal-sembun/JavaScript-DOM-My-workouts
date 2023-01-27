// TEXT AREA ------------------------------
var textarea_div = document.createElement("div");
body_div.append(textarea_div);

var textarea = document.createElement("textarea");
textarea.style.width = "97%";
textarea.setAttribute('placeholder', 'Welcome!');
textarea_div.append(textarea);

// SUBMIT BUTTON PART---------------------------
var submit_div = document.createElement("div");
submit_div.style.textAlign = "center";
body_div.append(submit_div);

var submit = document.createElement("button");
submit.innerText = "SUBMIT";
submit_div.append(submit);

submit.addEventListener("click", submit_fun);
function submit_fun() {
    // OVER ALL DIV ELEMENT------------------
    var div_create = document.createElement("div");
    div_create.setAttribute("class", "div_create");
    over_all.append(div_create);

    // IMAGE DIV-------------------
    var inner_img_div = document.createElement("div");
    inner_img_div.setAttribute("class", "inner_img_div");
    div_create.appendChild(inner_img_div);

    // IMAGE TAG------------------
    var inner_img = document.createElement("img");
    inner_img.setAttribute("class", "inner_img");
    inner_img.setAttribute("src", "images3.jpg");
    inner_img_div.appendChild(inner_img);

    // P tag and Time Use one div----------------
    var p_tag_time = document.createElement("div");
    p_tag_time.setAttribute("class", "p_tag_time");
    div_create.append(p_tag_time);

    // P TAG INNER DIV-------------------------
    var inner_p_div = document.createElement("div");
    inner_p_div.setAttribute("class", "inner_p_div");
    p_tag_time.appendChild(inner_p_div);

    // P TAG DIV---------------
    var inner_p_tag_static = document.createElement("h4");
    inner_p_tag_static.innerText = "Venkat";
    inner_p_tag_static.style.fontWeight = "bold";
    inner_p_div.appendChild(inner_p_tag_static);

    // P TAG DIV---------------
    var inner_p_tag = document.createElement("p");
    inner_p_div.appendChild(inner_p_tag);

    //Current Time SET DIV------------------
    var cur_time_div = document.createElement("div");
    cur_time_div.setAttribute("class", "cur_time_div");
    p_tag_time.appendChild(cur_time_div);

    // Current Time Set Value------------------
    var cur_time_value = document.createElement("h6");
    cur_time_value.setAttribute("class", "cur_time_value");
    var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    console.log(time);
    cur_time_value.innerText = time;
    cur_time_div.appendChild(cur_time_value);

    console.log(textarea.value);
    inner_p_tag.append(textarea.value);
    textarea.value = '';

    div_create.addEventListener("click", function () { append_text(this) });
}

function append_text(e) {
    var div_innertext = e.innerText;
    console.log(div_innertext);
    // document.getElementsByTagName("textarea").value = div_innertext;

    textarea.value = e.innerText;

    e.innerText = '';
    alert(div_innertext);
}

var p_tag = document.querySelectorAll("p");
for (var i = 0; i < p_tag.length; i++) {
    p_tag[i].addEventListener("click", function () { p_tag_function(this) });
}

function p_tag_function(e) {
    console.log(e.innerText);
    textarea.value = e.innerText;
    e.innerText = '';
    comment_one_div = '';
}

var p_time = document.querySelectorAll(".comment_one_div");
for (var j = 0; j < p_time.length; j++) {
    p_time[j].addEventListener("click", function () { remove_text(this) });
}

function remove_text(e) {
    // p_time = e.innerText;
    var summa = e.innerText;
    console.log(summa);
    textarea.value = e.innerText;
    e.innerText = '';
    //comment_one_div = '';
}

// Live Date format--------------------------
var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
console.log(time);