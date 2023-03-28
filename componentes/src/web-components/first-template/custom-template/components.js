class TemplateCustomElement extends HTMLElement {

    constructor() {
        super();

        this.template = document.getElementById("mensaje");

        this.text = "No sabemos qué error es";
        this.moreInfoText = "Te daría una descripción, pero no me la sé";
        this.isOk = false;

        this.pintado = false;
    }

    connectedCallback() {
        let clonado = document.importNode(this.template.content, true);
        clonado.querySelector(".msg-text").textContent = this.getAttribute("text");
        clonado.querySelector(".more-info-text").textContent = this.getAttribute("more-info-text");
        clonado.querySelector(".msg-icon").src = (this.getAttribute("status") === "ok" ? "ok-icon" : "error-icon") + ".png";
        this.appendChild(clonado);

        this.pintado = true;
    }
}

window.customElements.define('template-element', TemplateCustomElement)