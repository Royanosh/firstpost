// let userid = localStorage.getItem("Userid");
// let display = async() => {
//     let res1 = await fetch(
//         `https://firstpost-masai-server.herokuapp.com/users/${userid}`
//     );
//     let res2 = await res1.json();
//     console.log(res2.username);
//     // document.getElementById("usernameDisplay").innerText = "hi, " + res2.username;
// };
// display();

document.getElementById("mainStoryTitle").innerText = "Big Story";

getData("https://firstpost-masai-server.herokuapp.com/HOME-PAGE").then(
    (res) => {
        append(res, document.querySelector(".main-content"));
    }
);