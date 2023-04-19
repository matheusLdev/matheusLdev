const body = document.querySelector("body");

function createHeader() {
    const header = document.createElement("header");
    body.prepend(header);

    const h1 = document.createElement("h1");
    h1.innerText = "Desenvolvedor Matheus Gonçalves";
    header.prepend(h1);

    const nav = document.createElement("nav");
    nav.id = "navegation";
    header.append(nav);

    const buttonMenuMobile = document.createElement("button");
    buttonMenuMobile.ariaLabel = "Abrir menu";
    buttonMenuMobile.id = "mobile-btn";
    buttonMenuMobile.ariaHasPopup = "true";
    buttonMenuMobile.ariaExpanded = "false";
    buttonMenuMobile.innerText = "Menu";
    nav.prepend(buttonMenuMobile);

    const span = document.createElement("span");
    span.id = "hamburger";
    buttonMenuMobile.append(span);

    const navMenu = document.createElement("ul");
    navMenu.id = "menu";
    navMenu.role = "menu";
    nav.append(navMenu);

    let nameSectionMenu = ["HOME", "SOBRE MIM", "PROJETOS", "CONTATOS"];
    let nameSectionPage = ["index", "about", "project", "contact"];
    for(let contador = 0; contador<nameSectionMenu.length; contador++){
        let li = document.createElement("li");
        li.className = "list-menu";
        navMenu.append(li);
        console.log(nameSectionPage[contador])
        let a = document.createElement("a");
        if(nameSectionPage[contador] === "index"){
            a.href = "index.html";
            console.log('entrei')
        } else if (nameSectionPage[contador] === "project") {
            a.href = `#${nameSectionPage[contador]}`;
        } else {
            a.href = `index.html#${nameSectionPage[contador]}`;
        }
        a.innerText = `${nameSectionMenu[contador]}`;
        li.append(a);
    }
    
}
function createFooter() {
    const footer = document.createElement("footer");
    body.append(footer);

    const textFooter = document.createElement("p");
    textFooter.innerText = "Todos os direitos reservados - Desenvolvido por Matheus Gonçalves";
    footer.append(textFooter);
}
createHeader();
createFooter();


/*

                <button aria-label="Abrir Menu" id="mobile-btn" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
                    <span id="hamburger"></span>
                </button>
                <ul id="menu" role="menu">
                    <li class="list-menu">
                        <a onclick="closeMenu()" href="index.html">HOME</a>
                    </li>
                    <li class="list-menu">
                        <a onclick="closeMenu()" href="index.html#about">SOBRE MIM</a>
                    </li>
                    <li id="list-logo" class="list-menu">
                        <a href="index.html">
                            <img src="imagens/logo-mathgo.png" alt="logo-mathgo"/>
                        </a>
                    </li>
                    <li class="list-menu">
                        <a onclick="closeMenu()" href="#project">PROJETOS</a>
                    </li>
                    <li class="list-menu">
                        <a onclick="closeMenu()" href="index.html#contact">CONTATO</a>
                    </li>
                </ul>
            </nav>  
        </header>
        <footer>
            <nav>
                <ul>
                    <li class="space-list">
                        <a href="index.html">HOME</a>
                    </li>
                    <li class="space-list">
                        <a href="index.html#about">SOBRE MIM</a>
                    </li>
                    <li class="space-list">
                        <a href="#project">PROJETOS</a>
                    </li>
                    <li class="space-list">
                        <a href="index.html#contact">CONTATO</a>
                    </li>
                </ul>
            </nav>
            <p>Todos os direitos reservados - Desenvolvido por Matheus Gonçalves</p>
        </footer>
*/
