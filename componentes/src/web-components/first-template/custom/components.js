class MiElementoElement extends HTMLElement {
    constructor() {
        super();

        this.imageSrc = "";

        this.isOk = false;

        this.pintado = false;
    }

    connectedCallback() {
        const msgIcon = document.createElement("img");
        msgIcon.src = this.imageSrc;
        msgIcon.classList.add("msg-icon")
        
        const msgText = document.createElement("p");
        msgText.classList.add(this.isOk ? "msg-text" : "msg-text-error");
        msgText.textContent = "HA OCURRIDO UN ERROR";

        const moreInfoText = document.createElement("p");
        moreInfoText.classList.add("more-info-text")
        moreInfoText.innerHTML = "A veces ocurren estos errores, esperemos que se resuelva todo en breves"

        const msgInfo = document.createElement("div");
        msgInfo.classList.add("msg-info");

        msgInfo.appendChild(msgIcon);
        msgInfo.appendChild(msgText)

        const moreInfoContainer = document.createElement("div");
        moreInfoContainer.classList.add("more-info");

        moreInfoContainer.appendChild(moreInfoText);

        const container = document.createElement("div");
        container.classList.add("container");

        container.appendChild(msgInfo);
        container.appendChild(moreInfoContainer);

        this.appendChild(container);
        

        this.pintado = true;

    }

    attributeChangedCallback(propiedad, antiguoValor, nuevoValor) {
        if (propiedad === "image-src") {
            this.imageSrc = `${nuevoValor}`
            if (this.pintado) {
                this.querySelector(".error-icon").src = nuevoValor;
            }
        }
        else if (propiedad === "is-ok") {
            this.isOk = nuevoValor !== "false";
            if (this.pintado) {
                let message;
                if (antiguoValor === "false") {
                    message = this.querySelector(".msg-text-error");
                    message.classList.remove("msg-text-error");
                    message.classList.add("msg-text");
                }
                else {
                    message = this.querySelector(".msg-text");
                    message.classList.remove("msg-text");
                    message.classList.add("msg-text-error");
                }

            }
        }

    }

    static get observedAttributes() {
        return ['image-src', 'is-ok']
    }
}

customElements.define("mi-elemento", MiElementoElement)