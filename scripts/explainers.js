document.getElementById("mainStoryTitle").innerText = "Explainer";

getData("https://firstpost-masai-server.herokuapp.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});