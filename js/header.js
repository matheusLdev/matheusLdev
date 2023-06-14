const header = document.querySelector("header");
const buttonMenuMobile = document.createElement("button");
const menu = document.createElement("ul");
    
function createMenuHeader() {
  const navegation = document.createElement("nav");
  header.append(navegation)

  const myName = document.createElement("h1");
  myName.innerText = "Matheus Gonçalves";
  navegation.append(myName);

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
    const checkPage = window.document.location.pathname;
    const onIndex = "/index.html";
    if (onIndex === checkPage) {
      if (nameSectionPage[contador] === "index") {
        a.href = "#";
      } else if (nameSectionPage[contador] === "project") {
        a.href = `#${nameSectionPage[contador]}`;
      } else {
        a.href = `#${nameSectionPage[contador]}`;
      }
    } else {
      if (nameSectionPage[contador] === "index") {
        a.href = "index.html";
      } else if (nameSectionPage[contador] === "project") {
        a.href = `#${nameSectionPage[contador]}`;
      } else {
        a.href = `index.html#${nameSectionPage[contador]}`;
      }
    }
    a.innerText = `${nameSectionMenu[contador]}`;
    li.append(a);
  }
}
createMenuHeader()

function handleMenu() {
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

buttonMenuMobile.addEventListener("click", handleMenu);
menu.addEventListener("click", handleMenu);