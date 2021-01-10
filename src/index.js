import {homePage, clearContent} from "./home"
import {createMenu} from "./menu"

let menuItems= {
    'steak': 30,
    'burger': 5,
    'ribs': 25,
    't-bone': 40
}

homePage();

clearContent();

createMenu(menuItems);

//no reason for links in list --> remove?
