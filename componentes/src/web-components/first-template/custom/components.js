class MiElementoElement extends HTMLElement {
    constructor() {
        super();

        this.imageSrc = "";

        this.isOk = false;

        this.pintado = false;
    }

    connectedCallback() {

        // Creamos una etiqueta imagen, le asignamos el SRC y le añadimos la clase msg-icon
        const msgIcon = document.createElement("img");
        msgIcon.src = this.imageSrc;
        msgIcon.classList.add("msg-icon")
        
        // Creamos una etiqueta p, le añadimos una clase u otra en función de la prop isOk, y le rellenamos el texto
        const msgText = document.createElement("p");
        msgText.classList.add(this.isOk ? "msg-text" : "msg-text-error");
        msgText.textContent = "HA OCURRIDO UN ERROR";

        // Creamos otrao párrafo y le agregamos la clase y el texto correspondientes
        const moreInfoText = document.createElement("p");
        moreInfoText.classList.add("more-info-text")
        moreInfoText.innerHTML = "A veces ocurren estos errores, esperemos que se resuelva todo en breves"

        // Creamos un componente DIV y le metemos la clase msg-info
        const msgInfo = document.createElement("div");
        msgInfo.classList.add("msg-info");

        // Metemos msgIcon y msgText dentro de msgInfo
        msgInfo.appendChild(msgIcon);
        msgInfo.appendChild(msgText)

        // Creamos un div y le asignamos la clase more-info
        const moreInfoContainer = document.createElement("div");
        moreInfoContainer.classList.add("more-info");

        // Metemos el componente moreInfoText dentro de moreInfoContainer
        moreInfoContainer.appendChild(moreInfoText);
        
        // Creamos un componente div con nombre container y le agregamos la clase container
        const container = document.createElement("div");
        container.classList.add("container");

        // Metemos msgInfo y moreInfoContainer dentro de info
        container.appendChild(msgInfo);
        container.appendChild(moreInfoContainer);

        //Metemos el container dentro del propio componente
        this.appendChild(container);    
        
        // Asignamos a true el valor de "pintado"
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