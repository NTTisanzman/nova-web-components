class TemplateCustomElement extends HTMLElement {


    constructor() {
        super();

        this.template = document.getElementById("mensaje");

        this.attachShadow({ mode: "open"});

    }

    connectedCallback() {
        let clonado = document.importNode(this.template.content, true);
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

// Primero: Poner texto dentro del SLOT, se muestra como predeterminado
// Segundo: los slot sin name="loquessea" meten al slot todo lo que metas dentro de la etiqueta
// Tercero: cambiar el css al slotted