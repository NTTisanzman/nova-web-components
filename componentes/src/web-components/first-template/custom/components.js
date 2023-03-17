class MiElementoElement extends HTMLElement {
    constructor() {
        super();

        this.imageSrc = "";

        this.pintado = false;
    }

    connectedCallback() {
        const errorIcon = document.createElement("img");
        errorIcon.src = this.imageSrc;
        errorIcon.classList.add("error-icon")
        
        const errorMsg = document.createElement("p");
        errorMsg.classList.add("error-msg")
        errorMsg.textContent = "HA OCURRIDO UN ERROR";

        const moreInfoText = document.createElement("p");
        moreInfoText.classList.add("more-info-text")
        moreInfoText.innerHTML = "A veces ocurren estos errores, esperemos que se resuelva todo en breves"

        const errorInfo = document.createElement("div");
        errorInfo.classList.add("error-info");

        errorInfo.appendChild(errorIcon);
        errorInfo.appendChild(errorMsg)

        const moreInfoContainer = document.createElement("div");
        moreInfoContainer.classList.add("more-info");

        moreInfoContainer.appendChild(moreInfoText);

        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");

        errorContainer.appendChild(errorInfo);
        errorContainer.appendChild(moreInfoContainer);

        const main = document.createElement("div");
        main.classList.add("main");

        main.appendChild(errorContainer);

        this.appendChild(main);
        

        this.pintado = true;

    }

    attributeChangedCallback(propiedad, antiguoValor, nuevoValor) {
        if (propiedad === "image-src") {
            this.imageSrc = `${nuevoValor}`
            if (this.pintado) {
                this.querySelector(".error-icon").src = nuevoValor;
            }
        }

    }

    static get observedAttributes() {
        return ['image-src']
    }
}

customElements.define("mi-elemento", MiElementoElement)

/**
 * PRIMERO: agregar la prop por medio del getAttribute
 * SEGUNDO: integrarla en this.saludar con el if largo
 * TERCERO: integrarla en el this.saludar por medio de la ternaria
 */