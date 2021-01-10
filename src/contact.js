export function createContact() {
    let content= document.getElementById('content');

    let contactDiv= document.createElement('div');
    contactDiv.classList.add('contactDiv');

    let contactName= document.createElement('h2');
    contactName.textContent= 'CONTACT';
    contactName.classList.add('contactName');
    contactDiv.appendChild(contactName);

    let phone= document.createElement('p');
    phone.textContent= 'phone: (888) 888-8888';
    phone.classList.add('info');
    contactDiv.appendChild(phone);

    let email= document.createElement('p');
    email.textContent= 'email: reservations@buffalo-pot.com';
    email.classList.add('info');
    contactDiv.appendChild(email);

    let hours= document.createElement('p');
    hours.textContent= `Mon-Thu: 8am-8pm\r\nFri-Sun: 8am-11pm`;
    hours.classList.add('info');
    contactDiv.appendChild(hours);

    let location= document.createElement('p');
    location.textContent= '1500 N 7th Ave\r\nBozeman, MT 59715\r\nUnited States';
    location.classList.add('info');
    contactDiv.appendChild(location);

    let footer= document.querySelector('footer');
    content.insertBefore(contactDiv, footer);

    //footer position adjustment
    footer.style.position= 'absolute';
}