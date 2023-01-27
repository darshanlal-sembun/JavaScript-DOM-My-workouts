let test = document.querySelector(".list");

test.addEventListener("grl", function (e) {
    console.log("asdf");
    console.log(e.detail);
});

function fontsize(element) {
    const size = '20px';
    element.style.fontSize = size;

    let newEvent = new CustomEvent('grl', {
        detail: {
            fontSize: size
        }
    });
    element.dispatchEvent(newEvent);
}
fontsize(test);

let list = document.querySelector(".testing");

list.addEventListener("grl", function (e){
   // console.log(e.detail);
});

fontsize(list);
// function highlight(elem) {
//     const bgColor = 'yellow';
//     elem.style.backgroundColor = bgColor;

//     // create the event
//     let event = new CustomEvent('highlight', {
//         detail: {
//             backgroundColor: bgColor
//         }
//     });
//     // dispatch the event
//     elem.dispatchEvent(event);
// }

// // Select the div element
// let div = document.querySelector('.note');

// // Add border style
// function addBorder(elem) {
//     elem.style.border = "solid 1px red";
// }

// Listen to the highlight event
// div.addEventListener('highlight', function (e) {
//     addBorder(this);

//     // examine the background
//     console.log(e.detail);
// });

// // highlight div element
// highlight(div);




// let event = new CustomEvent(eventType, options);

// domElement.dispatchEvent(event);