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

// Declared Variables

let navItems = document.querySelectorAll("a");
let header1 = document.querySelector("h1");
let buttons = document.querySelector("button");
let codeImage = document.querySelector("#cta-img");
let textHeadings = document.querySelectorAll(".top-content h4");
let topParagraphs = document.querySelectorAll(".top-content p");
let midImage = document.querySelector("#middle-img")
let bottomTextHeadings = document.querySelectorAll(".bottom-content h4")
let bottomParagraphs = document.querySelectorAll(".bottom-content p");
let contacts = document.querySelector(".contact h4")
let addressInfo = document.querySelectorAll(".contact p")
let copyright = document.querySelector("footer p")

// Nav
let navText = ["Services", "Product", "Vision", "Features", "About","Contact"];
navText.forEach((texts, i)=>{
  navItems[i].textContent = texts;
})

//Cta
header1.innerHTML = "DOM <br> Is <br> Awesome";
buttons.textContent = siteContent["cta"]["button"]
codeImage.src = siteContent["cta"]["img-src"]

//Main Content
  //Top Content
let topHeadings = ["Features", "About"];
topHeadings.forEach((headings, i)=>{
  textHeadings[i].textContent = headings;
})
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];

  //Mid Content
midImage.src = siteContent["main-content"]["middle-img-src"];

  //Bottom Content
let bottomHeadings = ["Services", "Product", "Vision"];
bottomHeadings.forEach((headings, i)=>{
  bottomTextHeadings[i].textContent = headings;
})
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];
//Contact
contacts.textContent = siteContent["contact"]["contact-h4"];
addressInfo[0].innerHTML  = "123 Way 456 Street<br> Somewhere, USA";
addressInfo[1].textContent = siteContent["contact"]["phone"];
addressInfo[2].textContent = siteContent["contact"]["email"];

//Footer
copyright.textContent = siteContent["footer"]["copyright"];