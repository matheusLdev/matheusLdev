const header = document.querySelector("header");
const buttonMenuMobile = document.createElement("button");
const menu = document.createElement("ul");
    
function createMenuHeader() {
  const navegation = document.createElement("nav");
  header.append(navegation)
  
  let a = document.createElement("a");
  const checkPage = window.location.pathname;
  const onProject = "/matheusLdev/project.html";
  checkPage === onProject ? a.href = "#project" : a.href = "#index";
  navegation.append(a);
  const myName = document.createElement("h1");
  myName.innerText = "Matheus Gonçalves";
  a.append(myName);
  
  buttonMenuMobile.ariaLabel = "Abrir menu";
  buttonMenuMobile.id = "btn-mobile";
  buttonMenuMobile.ariaHasPopup = "true";
  buttonMenuMobile.ariaExpanded = "false";
  navegation.append(buttonMenuMobile);

  menu.id = "menu";
  menu.role = "menu";
  navegation.append(menu);
  let nameSectionMenu = ["Home", "Projetos", "Experiência", "Formação", "Contatos"];
  let nameSectionPage = ["index", "project", "experience", "education", "contact"];
  for (let contador = 0; contador < nameSectionMenu.length; contador++) {
    let li = document.createElement("li");
    menu.append(li);
    let a = document.createElement("a");
    if (checkPage === onProject) {
      if (nameSectionPage[contador] === "index") {
        a.href = "index.html";
      } else if (nameSectionPage[contador] === "project") {
        a.href = `#${nameSectionPage[contador]}`;
      } else {
        a.href = `index.html#${nameSectionPage[contador]}`;
      }
    } else { 
      if (nameSectionPage[contador] === "project") {
        a.href = `#${nameSectionPage[contador]}`;
      } else {
        a.href = `#${nameSectionPage[contador]}`;
      }
    }
    a.innerText = `${nameSectionMenu[contador]}`;
    li.append(a);
  }
}
createMenuHeader()

function handleMenuMobile() {
  menu.classList.toggle("active");
  const active = menu.classList.contains("active");
  buttonMenuMobile.ariaExpanded = active;
  if(active) {
    buttonMenuMobile.ariaLabel = "Fechar Menu";
    buttonMenuMobile.style.background = "url(./img/icons/menu-close.svg) no-repeat";
    buttonMenuMobile.style.transition = "0.3s";
  } else {
    buttonMenuMobile.ariaLabel = "Abrir Menu";
    buttonMenuMobile.style.background = "url(./img/icons/menu-open.svg) no-repeat";
    buttonMenuMobile.style.transition = "0.3s";
  }
}

buttonMenuMobile.addEventListener("click", handleMenuMobile);
menu.addEventListener("click", handleMenuMobile);

const linksMenu = document.querySelectorAll("a[href^='#']");

function scrollSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topSection = section.offsetTop;
  window.scrollTo({
    top: topSection - 70,
    behavior: "smooth",
  });
}

linksMenu.forEach((link) => {
  link.addEventListener('click', scrollSection);
});

