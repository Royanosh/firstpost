import { footer } from "./footer.js";
import { navbar } from "./navbar.js";
import {
    closeNav,
    openNav,
    searchBox,
    tabs,
    searchClickHandler,
    logout,
} from "./utility.js";

window.openNav = openNav;
window.closeNav = closeNav;
window.searchBox = searchBox;
window.tabs = tabs;
window.searchClickHandler = searchClickHandler;
window.logout = logout;

document.getElementById("navbar").innerHTML = navbar;

document.getElementById("footer").innerHTML = footer;