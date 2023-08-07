let dogImages = document.getElementById("dogImages");
function randomImages() {
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        datatype: "text",
        success: function (result) {
            dogImages.src = result.message;
        },
        error: function (status, errorMessage) {
            console.log(errorMessage);
            console.log(status);
        },
    })
}