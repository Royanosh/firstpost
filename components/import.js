import { bigThumb, asideSidebar, mainStoryThumbWrap } from "./content.js";
import { footer } from "./footer.js";
import { navbar } from "./navbar.js";
import {
    closeNav,
    openNav,
    searchBox,
    tabs,
    searchClickHandler,
    logout,
    append,
    getData,
} from "./utility.js";

window.openNav = openNav;
window.closeNav = closeNav;
window.searchBox = searchBox;
window.tabs = tabs;
window.searchClickHandler = searchClickHandler;
window.logout = logout;
window.append = append;
window.getData = getData;

document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;

var sliderDaba = document.querySelector(".main-story-thumb-wrap");
sliderDaba.innerHTML = mainStoryThumbWrap;

document.querySelector(".sidebar").innerHTML = asideSidebar;

getData("https://firstpost-masai-server.herokuapp.com/MOST-READ").then(
    (res) => {
        var num = 1;
        res.forEach((element) => {
            // console.log(element);
            // console.log(`div${num}bigThumbImg`);
            document
                .getElementById(`div${num}bigThumbImg`)
                .setAttribute("src", `${element.image}`);
            // console.log(`div${num}bigThumbCategory`);
            document.getElementById(`div${num}bigThumbCategory`).innerText =
                element.cateogory;
            // console.log(`div${num}bigThumbMainTitle`);
            document.getElementById(`div${num}bigThumbMainTitle`).innerText =
                element.title;
            // console.log(`div${num}bigThumbParagraph`);
            document.getElementById(`div${num}bigThumbParagraph`).innerText =
                element.summary;
            num++;
        });
    }
);