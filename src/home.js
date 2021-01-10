import {createContact} from "./contact"

export function createHomePage() {
    let content= document.getElementById('content');
    
    let nav= document.createElement('nav');

    let nameDiv= document.createElement('div');
    nameDiv.classList.add('nameDiv');

    let headline= document.createElement('h1');
    headline.innerHTML= 'Buffalo\'s Pot';
    headline.classList.add('headline');
    nameDiv.appendChild(headline);

    //logo wrapper
    let wrapper= document.createElement('div');
    wrapper.classList.add('wrapper');
    let logo= document.createElement('img');
    logo.setAttribute('src', 'styles/images/bison-logo-inverted-cropped.png');
    logo.classList.add('logo');
    wrapper.appendChild(logo);
    nameDiv.appendChild(wrapper);

    nav.appendChild(nameDiv);

    let list= document.createElement('ul');
    list.classList.add('list');

    let home= document.createElement('li');
    home.classList.add('item');
    home.textContent= 'Home';

    let menu= document.createElement('li');
    menu.classList.add('item');
    menu.textContent= 'Menu';

    let contact= document.createElement('li');
    contact.classList.add('item');
    contact.textContent= 'Contact';


    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(contact);
    nav.appendChild(list);

    content.appendChild(nav);

    //FOOTER
    let footer= document.createElement('footer');
    footer.style.position= 'absolute';
    let p= document.createElement('p');
    p.textContent= 'Zirafnik';
    p.classList.add('gitname');
    footer.appendChild(p);

    let gitlink= document.createElement('a');
    gitlink.setAttribute('href', 'https://github.com/Zirafnik/restaurant-page');
    gitlink.setAttribute('target', '_blank');

    let gitimg= document.createElement('img');
    gitimg.setAttribute('src', 'styles/images/github-inverted.png');
    gitimg.classList.add('gitimg');

    gitlink.appendChild(gitimg);

    footer.appendChild(gitlink);

    content.appendChild(footer);

    //CONTAINER
    createHomeContainer();
}

export function clearContent() {
    let content= document.getElementById('content');

    content.removeChild(content.children[1]);
}

export function createHomeContainer() {
    let container= document.createElement('div');
    container.classList.add('container');

    let text= document.createElement('h2');
    text.textContent= 'Best buffalo steaks in the world!';
    container.appendChild(text);

    let resBtn= document.createElement('button');
    resBtn.innerHTML= 'Make a reservation';
    resBtn.addEventListener('click', function() {
        clearContent();
        createContact();
    })

    container.appendChild(resBtn);

    let footer= document.querySelector('footer');

    document.querySelector('#content').insertBefore(container, footer);

    //footer position adjustment
    footer.style.position= 'absolute';
}