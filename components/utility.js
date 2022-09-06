export const openNav = () => {
    document.getElementById("sidenav-wrap").setAttribute("class", "open");
};

export const closeNav = () => {
    document.getElementById("sidenav-wrap").removeAttribute("class");
};

export const tabs = (e, cityName) => {
    var i, tabcontent, tablinks, parentEle, tabContainer;
    parentEle = e.parentNode;
    tabContainer = e.parentNode.parentNode;
    tablinks = parentEle.children;
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if (e.classList.contains("active")) {
        e.classList.remove("active");
    } else {
        e.classList.add("active");
    }
    tabcontent = tabContainer.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
};

export const searchBox = () => {
    var search = document.getElementById("mySEARCH");
    search.classList.toggle("active");
};
export const searchClickHandler = () => {
    searchBox();
};