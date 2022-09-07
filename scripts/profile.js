import { profileDetails } from "../components/profileNavbar.js";
let userid = localStorage.getItem("Userid");
let display = async() => {
    let res1 = await fetch(
        `https://firstpost-masai-server.herokuapp.com/users/${userid}`
    );
    let res2 = await res1.json();
    console.log(res2.username);
    document.getElementById("profileName").innerText = "hi, " + res2.username;
};
console.log(localStorage.getItem("isLogedIn"));
if (localStorage.getItem("isLogedIn") == "true") {
    console.log("check");
    document.getElementById("profileTag").innerHTML = profileDetails;
    display();
}