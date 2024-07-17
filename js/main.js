

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/**
* Easy event listener function
*/
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

/**
 * Navbar links active state on scroll
 */
let navbarlinks = select('.navigation .nav-link', true)
const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)


/**
* Scrolls to an element with header offset
*/
const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
    })
}

/**
 * Header Sticky
 */
window.onscroll = function () { myFunction() };
var header = document.querySelector(".header-area");
var sticky = header.offsetTop + 50;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

/**
 * Mobile navigation add class closebtn 
 */

let mobilenav = document.querySelector(".mobile-nav-toggle");
let mainclass =  document.querySelector(".navigation");
let menuitem = document.getElementsByClassName("nav-link");
mobilenav.addEventListener("click", (e)=> {
    mainclass.classList.toggle("navbar-mobile");
    mobilenav.classList.toggle('closebtn');
    if(mobilenav.classList.contains("closebtn")){
        for(menu of menuitem){
            menu.addEventListener("click",()=>{
                mainclass.classList.remove("navbar-mobile");
                mobilenav.classList.remove("closebtn");
            });
        }
    }
});