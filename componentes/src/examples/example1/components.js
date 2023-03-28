class MiParrafoElement extends HTMLElement {
    constructor() {
        super();

        this.isRendered = false;

        this.miTexto = "Saludos predeterminados a: ";

    }

    connectedCallback() {

        if (this.getAttribute("texto")) {
            this.miTexto = this.getAttribute("texto");
        }

        this.render(this.miTexto);

        this.isRendered = true;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.miTexto = this.miTexto + `, ${newValue}`
        if (name === "texto" && this.isRendered) {
            this.render(this.miTexto);
        }

    }

    static get observedAttributes() {
        return ['texto'];
    }

    render(propTexto) {
        this.innerHTML = "";
        const miDiv = document.createElement("div");

        
        const componenteP = document.createElement("p");
        componenteP.classList.add("texto");

        componenteP.innerHTML = propTexto;

        
        miDiv.appendChild(componenteP);


        this.appendChild(miDiv)
    }
}

class MiCabeceraElement extends HTMLElement {
    constructor() {
        super();

        this.isRendered = false;
    }

    connectedCallback() {
        const header = document.createElement("header");

        const h1Element = document.createElement("h1");
        h1Element.classList.add("cabecera");

        const titulo = this.getAttribute("titulo");

        h1Element.innerHTML = titulo;

        header.appendChild(h1Element)
        this.appendChild(header);
    }
}

customElements.define("mi-parrafo", MiParrafoElement)
customElements.define("mi-cabecera", MiCabeceraElement)

