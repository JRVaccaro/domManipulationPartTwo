var menuLinks = [

  { text: 'about', href: '/about' },

  { text: 'catalog', href: '/catalog' },

  { text: 'orders', href: '/orders' },

  { text: 'account', href: '/account' },

];

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML ="<h1> DOM Manipulation</h1>"

mainEl.classList.add("flex-ctr"); 

let topMenuEl = document.getElementById("top-menu");

for (let i = 0; i < menuLinks.length; i++){

    let newLink = document.createElement("a");

    newLink.setAttribute("href", menuLinks[i].href);
    newLink.textContent = menuLinks[i].text;

    topMenuEl.appendChild(newLink);



}