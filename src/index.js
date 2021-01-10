import {createHomePage, clearContent, createHomeContainer} from "./home"
import {createMenu} from "./menu"

let menuItems= {
    'steak': 30,
    'burger': 5,
    'ribs': 25,
    't-bone': 40
}

createHomePage();

let home= document.querySelectorAll('li')[0];
home.addEventListener('click', function() {
    clearContent();
    createHomeContainer();
});

let menu= document.querySelectorAll('li')[1];
menu.addEventListener('click', function() {
    clearContent();
    createMenu(menuItems);
})


//no reason for links in list --> remove?