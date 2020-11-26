//While page is loading check if there is a session variable set for isNotFirstVisit - will be null if this is the first visit
let isNotFirstVisit = sessionStorage.getItem("isNotFirstVisit");
//check if isNotFirstVisit = null (or false)
if(!isNotFirstVisit) {
    //if this is the first visit, let the animation play and set the variable to "true"
    sessionStorage.setItem("isNotFirstVisit", true);
} else {
    //if this is not the first visit then find the pre-loader - this assumes that the first item with the class name "preload-hold" is the one you want hidden
    let loader = document.getElementsByClassName("preload-hold")[0];
    //set the visibility to hidden
    loader.style.visibility = "hidden";
    //set the display to none
    loader.style.display ="none";
}