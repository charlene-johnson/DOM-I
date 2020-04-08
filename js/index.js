const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav
let navText = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact']

//had this part at the beginning
let navItems = document.querySelectorAll("a")

navText.forEach((texts, i)=>{
  navItems[i].textContent = texts;
});
//not going to delete this, as this was also another way of doing it
// navItems[0].textContent = "Services"
// navItems[1].textContent = "Product"
// navItems[2].textContent = "Vision"
// navItems[3].textContent = "Features"
// navItems[4].textContent = "About"
// navItems[5].textContent = "Contact"

//cta
let header1 = document.querySelector("h1").textContent = "DOM Is awesome";
let buttons = document.querySelector("button").textContent = "Get started";
let codeImage = document.querySelector("#cta-img").src = "img/header-img.png"

//main content

//contact
let contacts = document.querySelector(".contact h4").textContent = "Contact"

let contactInfo = ["123 Way 456 Street Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"]
let addressInfo = document.querySelectorAll(".contact p")

contactInfo.forEach((info, i)=>{
  addressInfo[i].textContent = info;
})

//longer way of doing things...
// addressInfo[0].textContent = "123 Way 456 Street Somewhere, USA";
// addressInfo[1].textContent = "1 (888) 888-8888"
// addressInfo[2].textContent = "sales@greatidea.io"

//footer
let copyright = document.querySelector("footer p").textContent = "Copyright Great Idea! 2018"


