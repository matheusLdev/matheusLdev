const header = document.querySelector("header");

function createMenuHeader() {
  const navegation = document.createElement("nav");
  header.append(navegation)

  const myName = document.createElement("h1");
  myName.innerText = "Matheus Gonçalves";
  navegation.append(myName);

  const buttonMenuMobile = document.createElement("button");
  buttonMenuMobile.ariaLabel = "Abrir menu";
  buttonMenuMobile.id = "btn-mobile";
  buttonMenuMobile.ariaHasPopup = "true";
  buttonMenuMobile.ariaExpanded = "false";
  buttonMenuMobile.innerText = "Menu";
  navegation.append(buttonMenuMobile);

  const menu = document.createElement("ul");
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

createMenuHeader();