class MiBotonElement extends HTMLElement {
    constructor() {
        super();

        this.contador = 0;
    }

    buttonPressed() {
        this.contador = this.contador + 1;

        if (this.contador % 2 === 0) {

            const options = {
                detail: this.contador,
                bubbles: true,
                composed: true,
                cancelable: true
            }
            
            const numeroPar = new CustomEvent("numeropar", options)
            this.dispatchEvent(numeroPar);
        }
        
    }

    connectedCallback() {
        const button = document.createElement("button");
        button.innerHTML = "Púlsame";

        button.addEventListener('click', ()=> {
            this.buttonPressed();
        })

        this.appendChild(button);
    }
}

customElements.define("mi-boton", MiBotonElement);