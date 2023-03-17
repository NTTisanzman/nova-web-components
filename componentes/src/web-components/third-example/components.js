class ThirdComponentElement extends HTMLElement {
    constructor() {
        super();

        this.saludar = "Hola";
        this.pintado = false;
    }

    connectedCallback() {
        this.innerHTML = this.saludar;
        this.pintado = true;
    }

    attributeChangedCallback(propiedad, antiguoValor, nuevoValor) {
        if (propiedad === "nombre") {
            this.saludar += `, ${nuevoValor}`
            if (this.pintado) {
                this.innerHTML = this.saludar;
            }
        }

    }

    static get observedAttributes() {
        return ['nombre']
    }
}

customElements.define("third-component", ThirdComponentElement)

/**
 * PRIMERO: agregar el método attributeChangedCallback
 * SEGUNDO: agregar la función estática observedAttributes con el nombre en el array
 * TERCERO: comprobar en attributeChangedCallback cuál es el valor cambiado, y si es nombre, actuualizarlo en el saludo
 * CUARTO: probar que, sin la propiedad pintado, no se refresca automáticamente al cambiar el valor en F12
 * QUINTO poner la propiedad de pintado
 */