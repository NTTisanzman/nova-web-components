class TemplateCustomElement extends HTMLElement {


    constructor() {
        super();

        this.template = document.getElementById("mensaje");

        this.attachShadow({ mode: "open"});

    }

    connectedCallback() {
        let clonado = document.importNode(this.template.content, true);
        clonado.querySelector(".msg-text").textContent = this.text;
        clonado.querySelector(".more-info-text").textContent = this.moreInfoText;
        clonado.querySelector(".msg-icon").src = (this.isOk ? "ok-icon" : "error-icon") + ".png";
        this.shadowRoot.appendChild(clonado);

        this.pintado = true;
    }

    attributeChangedCallback(propiedad, antiguoValor, nuevoValor) {
        if (propiedad === "text") {
            this.text = nuevoValor;

            if (this.pintado) {
                this.querySelector(".msg-text") = nuevoValor;
            }
        }
        else if (propiedad === "more-info-text") {
            this.moreInfoText = nuevoValor
            if (this.pintado) {
                this.querySelector(".more-info-text") = nuevoValor;
            }
        }
        else if (propiedad === "is-ok") {
            this.isOk = nuevoValor !== "false";
            if (this.pintado) {
                this.querySelector(".msg-icon").src = (this.isOk ? "ok-icon" : "error-icon") + ".png";
            }
        }
    }

    static get observedAttributes() {
        return ['text', 'more-info-text', "is-ok"]
    }

}

window.customElements.define('template-element', TemplateCustomElement)

// Primero: poner el attachShadow() sin open true y ver en el navegador que ni sale.
// Segundo: poner el open = true y verlo en el F12 
// Tercero: poner el this.shadowRoot.appendChild()
// Cuarto: probar que las cosas no salen con document.querySelector()
// Quinto: para tener estilos con el shadowDom, meter el <link rel="stylesheet" type="text/css" href="styles.css"/> justo dentro de la etiqueta template
// Sexto: eliminar la etiqueta "container" y vincular sus estilos en el css a :host {}
// Séptimo: si se pone el shadowRoot a false, va a ser innaccesible desde el F12 (document.querySelector("custom-element").shadowRoot()).
        //  en caso de ponerlo así, se debe de crear en el constructor una varianble this.sombra = this.shadowRoot(), y después hacer this.sombra.appendChild(loquesea)