const footer = document.querySelector("footer");

function createFooter() {
  const textFooter = document.createElement("p");
  textFooter.innerText = "Desenvolvedor Matheus Gonçalves - Todos os direitos reservados";
  footer.append(textFooter);
  
  const aButton = document.createElement("a")
  const checkPage = window.location.pathname;
  const onProject = "/matheusLdev/project.html";
  checkPage === onProject ? aButton.href = "#project" : aButton.href = "#index";
  footer.append(aButton);
  
  const imgButton = document.createElement("img");
  imgButton.src = "img/icons/btn-home.svg";
  imgButton.alt = "Botão voltar ao início";
  aButton.append(imgButton);
}


createFooter();