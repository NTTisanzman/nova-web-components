class MiCustomPlantillaElement extends HTMLElement {
    constructor() {
        super();

        this.plantilla = document.getElementById("plantilla")
    }
    
    connectedCallback() {
        const nodo = document.importNode(this.plantilla, true);

        const clonado = nodo.content.cloneNode(true);

        if (this.getAttribute("titulo")) {
            clonado.querySelector(".titulo").innerHTML = this.getAttribute("titulo")
        }

        this.appendChild(clonado);
    }
}

customElements.define("mi-elemento", MiCustomPlantillaElement);