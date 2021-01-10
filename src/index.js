import {createHomePage, clearContent, createHomeContainer} from "./home"
import {createMenu} from "./menu"
import {createContact} from "./contact"

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

let contact= document.querySelectorAll('li')[2];
contact.addEventListener('click', function() {
    clearContent();
    createContact();
})