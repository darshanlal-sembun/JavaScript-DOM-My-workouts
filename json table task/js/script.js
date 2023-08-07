//https://api.coindesk.com/v1/bpi/currentprice.json

// $.ajax({
//     type: 'GET',
//     // url: "https://api.coindesk.com/v1/bpi/currentprice.json",
//     url: "https://api.publicapis.org/entries",
//     dataType: 'text',
//     success: function (result) {

//         console.log(result);
//         let jsonObj = JSON.parse(result);
//         console.log(jsonObj.count);
//         console.log(jsonObj.entries[0].API);

//         let tbl = "";
//         tbl = "<table><th>abc</th><tr><td>asdf</td></tr></table>";
//         let ele = document.getElementById("tbl");
//         ele.innerHTML = tbl;

//     },
//     error: function (status, errorMessage) {
//         console.log(errorMessage);
//     }

// });






let texts = [];
let text;
let headingName = [];
var lal;
$.ajax({
    type: 'GET',
    url: 'https://api.publicapis.org/entries',
    dataType: 'text',
    success: function (result) {
        console.log(result);
        let obj = JSON.parse(result);
        console.log(obj);
        console.log(obj.entries);

        console.log(obj.entries[0].API);
        console.log(obj.entries[1].API);

        obj.entries.forEach(function (value, key) {
            let valueobj = JSON.stringify(value);
            let darshan = JSON.parse(valueobj);
            for (const x in darshan) {
                heading = x;
                headingName.push(heading);
            }

            for (let i = 0; i < headingName.length; i++) {
                text = "<th>" + headingName[i] + "</th>";
                texts.push(text);
                //  console.log(texts.length);
            }

            // text = headingName[0] + headingName[1] + headingName[2] + headingName[3] + headingName[4] + headingName[5] + headingName[6] + "<br>";
            // texts.push(text);
        });
        for (i = 0; i < 7; i++) {
            console.log(texts[i]);
        }
        //     let valueobj = JSON.stringify(value);
        // let darshan = JSON.parse(valueobj);
        // let element = document.getElementById("table");
        // let tableFormat = "<table><thead><tr>";
        // for (const x in darshan) {
        //     texts = "<th>" + x + "</th>";
        // }
        // + texts + "<th>heading two</th></tr></thead><tr><td>" + obj.entries[0].API + "</td><td>second row second col</td></tr><tr><td>first row first col</td><td>second row second col</td></tr></table>"

        // element.innerHTML = tableFormat;


        lal =
            texts[0] + texts[1] + texts[2] + texts[3] + texts[4] + texts[5] + texts[6] +
            `</tr></thead><tbody>`;
        qwerty =
            "<td>" + obj.entries[0].API + "</td>" +
            "<td>" + obj.entries[0].Description + "</td>" +
            "<td>" + obj.entries[0].Auth + "</td>" +
            "<td>" + obj.entries[0].HTTPS + "</td>" +
            "<td>" + obj.entries[0].Cors + "</td>" +
            "<td><a href = " + obj.entries[0].Link + ">" + obj.entries[0].Link + "</a></td>" +
            "<td>" + obj.entries[0].Category + "</td>";
        for (i = 0; i < 3; i++) {
            createRow = "<tr>" + qwerty + "</tr>";
        }
        // for (i = 0; i < 7; i++) {
        //     "<td>" + obj.entries[i].API + "</td>";
        //     "<td>" + obj.entries[i].Description + "</td>";
        //     "<td>" + obj.entries[i].Auth + "</td>";
        //     "<td>" + obj.entries[i].HTTPS + "</td>";
        //     "<td>" + obj.entries[i].Cors + "</td>";
        //     "<td><a href = " + obj.entries[i].Link + ">" + obj.entries[i].Link + "</a></td>";
        //     "<td>" + obj.entries[i].Category + "</td>";
        // }
        var asdf = '<table><thead><tr>' + lal + createRow + "</tbody></table>";
        document.getElementById("demo").innerHTML = texts[0];
        document.getElementById("table").innerHTML = asdf;
        // value.forEach(function (values, keys) {
        //     texted += keys + ", " + values + "<br>";
        //  text += key + ", " + value + "<br>";

        //});
        // });
    },
    error: function (status, errorMessage) {
        console.log(status);
        console.log(errorMessage);
    },
});
