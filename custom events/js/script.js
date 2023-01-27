// // additional details come with the event to the handler
// elem.addEventListener("hello", function (event) {
//     alert(event.detail.name);
// });

// elem.dispatchEvent(new CustomEvent("hello", {
//     detail: { name: "jkhdsj" }
// }));

let list = document.getElementById("list");
list.addEventListener('darshan', function (event) {
    console.log("corrected");
    console.log(event);
    console.log(event.target.childNodes[1]);
    console.log(event.detail.color);

    // event.target.childNodes[1].style.color = "red";
    // console.log(event.target.detail.color);
});

list.dispatchEvent(new CustomEvent('darshan', {
    detail: {
        backgroundColor: 'red',
        color: 'aqua',
        fontSize: '20px',
    },
    //bubbles : true,
}));
//document.dispatchEvent(first);

// const event = new CustomEvent("start", {
//     detail: {
//         platform: "GeeksforGeeks"
//     }
// });

// document.addEventListener('start', (e) => {
//     console.log(
//         `Start event triggered on platform
//         ${e.detail.platform}`
//     );
// })

// // if (x == 5) {
// //     document.dispatchEvent(e);
// // }

// let events = new CustomEvent('highlight', {
//     detail: { backgroundColor: 'yellow' }
// });

// document.dispatchEvent(events);


