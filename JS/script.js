const toggler = document.querySelector(".toggler");
const navIcon = document.querySelector(".bi.bi-list");
if (navIcon){
    toggler.addEventListener("click", () => {
        const nav = document.getElementById("nav");
        if (navIcon.classList.contains("bi-list")){
            navIcon.classList.remove("bi-list");
            navIcon.classList.add("bi-x");
        }else {
            navIcon.classList.remove("bi-x");
            navIcon.classList.add("bi-list");
        }
        if (nav.classList.contains("nav-show")){
            nav.classList.remove("nav-show");
        }else {
            nav.classList.add("nav-show");
        }

    });
}

const accordion = document.querySelector(".accordion");
const accordionHeader = accordion.querySelectorAll(".accordion .accordion-header");

accordionHeader.forEach(item => {
    const accordionBody = item.nextElementSibling;
    item.addEventListener("click", () => {
        if (!item.classList.contains("accordion-header-active")){
            accordionHeader.forEach(otherItem => {
                if (otherItem !== item){
                    otherItem.classList.remove("accordion-header-active");
                    const accordionBody = otherItem.nextElementSibling;
                    accordionBody.style.maxHeight = null;
                }   
            });
        }
        item.classList.toggle("accordion-header-active");
        if (accordionBody.style.maxHeight){
            accordionBody.style.maxHeight = null;
        }else {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }

    });
})

let slideIndex = 0;
showSlide();
function showSlide() { 
    let i;
    let slideshowItem = document.getElementsByClassName("slideshow-item");
    let dotItem = document.getElementsByClassName("dot-item");
    for (let i = 0; i < slideshowItem.length; i++) {
        slideshowItem[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideshowItem.length){
        slideIndex = 1;
    }
    for (let i = 0; i < dotItem.length; i++) {
        dotItem[i].className = 
        dotItem[i].className.replace(" dot-item-active", "");
    }

    slideshowItem[slideIndex - 1].style.display = "block";
    dotItem[slideIndex - 1].className += " dot-item-active";
    setTimeout(showSlide, 3000);

}
function validateFormContact(){
    const fullName = document.forms["formContact"]["fName"].value;
    const email = document.forms["formContact"]["eml"].value;
    if (fullName == ""){
        alert("Name harus diisi.");
        return false;
    }else if (email == ""){
        alert("Email hatus diisi.")
    }


}