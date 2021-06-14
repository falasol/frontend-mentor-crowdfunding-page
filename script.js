document.getElementsByClassName("mobile-nav-icon--hamburger")[0].addEventListener("click", function(event){
    document.getElementsByClassName("mobile-nav")[0].className = "mobile-nav--display";
    document.getElementsByClassName("mobile-nav-icon--hamburger")[0].className= "mobile-nav-icon--hamburger-close";
    document.getElementsByClassName("mobile-nav-icon--close")[0].className = "mobile-nav-icon--close-open";
});

document.getElementsByClassName("mobile-nav-icon--close")[0].addEventListener("click", function(event){
    document.getElementsByClassName("mobile-nav--display")[0].className = "mobile-nav";
    document.getElementsByClassName("mobile-nav-icon--hamburger-close")[0].className = "mobile-nav-icon--hamburger";
    document.getElementsByClassName("mobile-nav-icon--close-open")[0].className = "mobile-nav-icon--close";
});