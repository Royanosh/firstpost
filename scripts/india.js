document.getElementById("mainStoryTitle").innerText = "India News";

getData("https://firstpost-masai-server.herokuapp.com/INDIA").then((res) => {
    append(res, document.querySelector(".main-content"));
});