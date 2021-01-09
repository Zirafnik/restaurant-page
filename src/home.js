export function homePage() {
    let content= document.getElementById('content');
    
    let nav= document.createElement('nav');

    let headline= document.createElement('h1');
    headline.innerHTML= 'Buffalo\'s Pot';
    headline.classList.add('headline');
    nav.appendChild(headline);

    //logo wrapper
    let wrapper= document.createElement('div');
    wrapper.classList.add('wrapper');

    let logo= document.createElement('img');
    logo.setAttribute('src', '/styles/images/bison-logo-inverted-cropped.png');
    logo.classList.add('logo');
    wrapper.appendChild(logo);
    nav.appendChild(wrapper);

    let list= document.createElement('ul');
    list.classList.add('list');

    let home= document.createElement('li');
    home.classList.add('item');
    let homelink= document.createElement('a');
    homelink.setAttribute('href', '#');
    homelink.innerHTML= 'Home';
    homelink.classList.add('links');
    home.appendChild(homelink);

    let menu= document.createElement('li');
    menu.classList.add('item');
    let menulink= document.createElement('a');
    menulink.setAttribute('href', '#');
    menulink.innerHTML= 'Menu';
    menulink.classList.add('links');
    menu.appendChild(menulink);

    let contact= document.createElement('li');
    contact.classList.add('item');
    let contactlink= document.createElement('a');
    contactlink.setAttribute('href', '#');
    contactlink.innerHTML= 'Contact';
    contactlink.classList.add('links');
    contact.appendChild(contactlink);


    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(contact);
    nav.appendChild(list);

    content.appendChild(nav);

    let container= document.createElement('div');
    container.classList.add('container');

    let text= document.createElement('h2');
    text.textContent= 'Best buffalo steaks in the world!';
    container.appendChild(text);

    let orderBtn= document.createElement('button');
    orderBtn.innerHTML= 'Make a reservation';
    container.appendChild(orderBtn);

    content.appendChild(container);

    let footer= document.createElement('footer');
    let p= document.createElement('p');
    p.textContent= 'Zirafnik';
    p.classList.add('gitname');
    footer.appendChild(p);

    let gitlink= document.createElement('a');
    gitlink.setAttribute('href', 'https://github.com/Zirafnik/restaurant-page');
    gitlink.setAttribute('target', '_blank');

    let gitimg= document.createElement('img');
    gitimg.setAttribute('src', '/styles/images/github-inverted.png');
    gitimg.classList.add('gitimg');

    gitlink.appendChild(gitimg);

    footer.appendChild(gitlink);

    document.body.appendChild(footer);
}