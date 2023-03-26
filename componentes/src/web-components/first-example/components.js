class FirstComponentElement extends HTMLElement {
    constructor() {
        super();

        this.saludar = "Hola";
    }

    connectedCallback() {
        //
        console.log("Hola")

        let italics = document.createElement("i");
        italics.innerHTML = this.saludar;

        this.innerHTML = italics;


        /** Descomentar para ver el disconnectedCallback
        setTimeout(()=> {
            document.querySelector("first-component").remove();
        },2000)
         */
    }

    disconnectedCallback() {
        console.log("Adios")
    }
}

customElements.define("first-component", FirstComponentElement)

/**
 * PRIMERO: enseñar a crear todo (class, constructor, customElements.define)
 * SEGUNDO: hacer un console.log("Hola") en el connectedCallback
 * TERCERO: poner el setTimeout() en una etiqueta <script> normal dentro del HTML para ver el console.log(adios)
 * CUARTO: quitar el setTimeout y poner el this.saludar en el constructor y this.innerHTML = this.saludar en connectedCallback
 * QUINTO: meter el 
 */