class ListaComponentElement extends HTMLElement {
    constructor() {
        super();

        this.isRendered = false;
        this.liElements = 1;
    }

    connectedCallback() {

        if (this.getAttribute("filas")) {
            this.liElements = parseInt(this.getAttribute("filas"));
        }

        this.render(this.liElements)


        this.isRendered = true;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "filas" && this.isRendered) {
            this.render(parseInt(newValue));
        }
    }

    static get observedAttributes() {
        return ['filas']
    }

    render(counter) {
        this.innerHTML = "";
        const ul = document.createElement("ul");

        for (let a = 0; a < counter; a++) {
            const li = document.createElement("li");
            li.innerHTML = `Índice: ${a+1}`;
            ul.appendChild(li);
        }

        this.appendChild(ul);

    }
}

customElements.define("lista-component", ListaComponentElement)