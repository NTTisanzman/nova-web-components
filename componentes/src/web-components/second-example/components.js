class SecondComponentElement extends HTMLElement {
    constructor() {
        super();

        this.saludar = "Hola";
    }

    connectedCallback() {
        const nombre = this.getAttribute("nombre");
        if (nombre) {
            this.saludar += `, ${nombre}`
        }
        else {
            this.saludar += ", persona";
        }

        this.saludar += `, ${nombre || "persona"}`

        this.innerHTML = this.saludar;

        /** Descomentar para ver el disconnectedCallback
        setTimeout(()=> {
            document.querySelector("first-component").remove();
        },2000)
         */
    }

    disconnectedCallback() {
    }
}

customElements.define("second-component", SecondComponentElement)

/**
 * PRIMERO: agregar la prop por medio del getAttribute
 * SEGUNDO: integrarla en this.saludar con el if largo
 * TERCERO: integrarla en el this.saludar por medio de la ternaria
 */