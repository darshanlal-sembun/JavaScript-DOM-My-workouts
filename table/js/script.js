document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.boxSizing = "border-box";

var div = document.createElement("div");
div.style.width = "100%";
div.style.padding = "20px 0";
div.style.backgroundColor = "black";
div.style.color = "white";
div.style.overflow = "hidden";
document.body.appendChild(div);

var table = document.createElement("table");
table.style.width = "90%";
table.style.margin = "0 auto";
table.style.padding = "10px 25px";
table.style.borderCollapse = "collapse";
div.appendChild(table);

function adding_row() {
    var row;
    row = document.createElement("tr");
    row.style.backgroundColor = "grey";
    row.style.border = "5px solid black";
    table.appendChild(row);
    return row;
};

function adding_column(text_name, row, icon) {

    var column = document.createElement("td");
    column.style.width = "30%";

    var column_div = document.createElement("div");
    column_div.style.width = "90%";
    column_div.style.borderRight = "1px solid black";
    column_div.style.margin = "0 auto";
    column.appendChild(column_div);

    var column_flex = document.createElement("div");
    column_flex.style.display = "flex";
    column_div.appendChild(column_flex);

    var column_img = document.createElement("div");
    column_img.style.width = "25%";
    column_flex.appendChild(column_img);

    var img = document.createElement("img");
    img.src = icon;
    column_img.appendChild(img);

    var column_text = document.createElement("div");
    column_text.style.width = "50%";
    column_flex.appendChild(column_text);

    var content = document.createElement("span");
    content.innerText = text_name;
    console.log(content.innerHTML);
    column_text.appendChild(content);

    row.appendChild(column);
};

function adding_column_btn(buy_sold, row) {
    var column_btn = document.createElement("td");
    column_btn.style.width = "10%";
    column_btn.style.cursor = "pointer";
    if (buy_sold == "SOLD OUT") {
        column_btn.style.backgroundColor = "#2c242475";
        column_btn.innerHTML = buy_sold;

    }
    else if (buy_sold == "BUY NOW") {
        column_btn.style.backgroundColor = "red";
        column_btn.innerHTML = buy_sold;
        column_btn.addEventListener("click", function () { buy_now(this) });
    }
    column_btn.style.padding = "10px";
    column_btn.style.textAlign = "center";
    row.appendChild(column_btn);

};

var row1 = adding_row();

adding_column("17 SEPTEMBER", row1, "../table/images/calendar.svg");
adding_column("MARTIN GARRIX", row1, "../table/images/mic-fill.svg");
adding_column("NEW ORLEANS,LA", row1, "../table/images/geo-alt-fill.svg");

adding_column_btn("BUY NOW", row1);

var row2 = adding_row();
adding_column("17 SEPTEMBER", row2, "../table/images/calendar.svg");
adding_column("MARTIN GARRIX", row2, "../table/images/mic-fill.svg");
adding_column("NEW ORLEANS,LA", row2, "../table/images/geo-alt-fill.svg");
adding_column_btn("SOLD OUT", row2);

var show_events = document.createElement("div");
show_events.style.width = "89%";
show_events.style.cursor = "pointer";
show_events.style.backgroundColor = "grey";
show_events.style.margin = "0 auto";
show_events.innerText = "Show All Events";
show_events.style.textAlign = "center";
show_events.style.padding = "10px 3px";
div.appendChild(show_events);

show_events.addEventListener("click", add_rows);

function buy_now(event) {

    var pElement = event.parentElement;

    var datas = pElement.querySelectorAll('span');

    var data = "";
    datas.forEach(element => {

        data += element.innerHTML + "\n";
    });
    alert("Your Item has added in CART \n " + data);

};
function add_rows() {

    for (var i = 0; i < 4; i++) {

        var row2 = adding_row();
        adding_column("16 SEPTEMBER", row2, "../table/images/calendar.svg");
        adding_column("MARTIN ", row2, "../table/images/mic-fill.svg");
        adding_column("NEW ,LA", row2, "../table/images/geo-alt-fill.svg");

        if (i % 2 == 0) {
            adding_column_btn("SOLD OUT", row2);
        } else {
            adding_column_btn("BUY NOW", row2);
        }
    }

};