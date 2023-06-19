const repositoryMatheus = "https://api.github.com/users/matheusLdev/repos";

fetch(repositoryMatheus)
  .then(response => response.json())
  .then(data => {
    let allData = data;
    let sortRepository = []; 
    
    for (let i = 0; i < allData.length; i++) {
      let checkPage = allData[i].has_pages;
      let checkPortfolio = allData[i].name === "matheusLdev";
      if (checkPage) {
        if (!checkPortfolio) {
          function treatRepository() {
            let repository = {};
            let repositoryDate = allData[i].created_at;

            year = Number(repositoryDate.substring(0, 4));
            month = Number(repositoryDate.substring(5, 7)) - 1;
            day = Number(repositoryDate.substring(8, 10));
            formatDate = new Date(year, month, day);

            dateMilisecond = Date.parse(formatDate);

            nameOrigin = allData[i].name;
            nameProject = nameOrigin.replace(/[_-]/g, " ");
            nameProject = nameProject.replace(/projeto /gi, "");
            nameProject = nameProject.replace(/chale /gi, "Chalé ");
            nameProject = nameProject.replace(/noticia cidade/gi, "Notícias Cidade");
            repository.NameProject = `${nameProject.charAt(0).toUpperCase()}${nameProject.slice(1)}`;
            repository.Date = dateMilisecond;
            repository.Description = allData[i].description;
            repository.LinkRepository = allData[i].html_url;
            repository.LinkProject = `https://matheusldev.github.io/${nameOrigin}/`;
            repository.has_pages = allData[i].has_pages;

            return repository;
          }
          sortRepository.push(treatRepository());
        }
      }
    }
    sortRepository = sortRepository.sort(((a, b) => b.Date - a.Date));

    const project = document.getElementById("project");

    function createSizeProject() {
      const containerBox = document.createElement("div");
      containerBox.className = "container-box";
      project.append(containerBox);

      const nameSection = document.createElement("h2");
      nameSection.innerText = "Projetos";
      const containerProject = document.createElement("div");
      containerProject.id = "container-project";
      containerBox.append(nameSection, containerProject);

      function createCardProject(NameProject, Description, LinkRepository, LinkProject) {
        let cardProject = document.createElement("article");
        cardProject.className = "card";
        containerProject.append(cardProject);

        let titleProject = document.createElement("h2");
        titleProject.innerText = NameProject;
        let textDescription = document.createElement("p");
        textDescription.innerText = Description;
        let containerLink = document.createElement("div");
        cardProject.append(titleProject, textDescription, containerLink);

        let linkRepository = document.createElement("a");
        let linkProject = document.createElement("a");
        linkRepository.href = LinkRepository;
        linkRepository.target = "_blank";
        linkRepository.innerText = "Ver Repositório";
        linkProject.href = LinkProject;
        linkProject.target = "_blank";
        linkProject.innerText = "Ver Projeto";
        containerLink.append(linkRepository, linkProject);
      }

      const checkPage = window.location.pathname;
      const onProject = "/project.html";
      if (checkPage === onProject) {
        project.style.background = "#e7e7f1";
        nameSection.style.color = "#00023a";
        sortRepository.forEach((item) => {
          createCardProject(item.NameProject, item.Description, item.LinkRepository, item.LinkProject);
        });
      } else {
        sortRepository.slice(0, 3).forEach((item) => {
          createCardProject(item.NameProject, item.Description, item.LinkRepository, item.LinkProject);
        });
        const containerBtnProject = document.createElement("div");
        containerBtnProject.id = "button-project";
        containerBox.append(containerBtnProject);

        const btnProject = document.createElement("a");
        btnProject.href = "/project.html";
        btnProject.innerText = "Ver todos os Projetos";
        containerBtnProject.append(btnProject);
      }
    }  
    createSizeProject();
  });
