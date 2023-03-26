class BotonCargarElement extends HTMLElement {

    constructor() {
        super();

        this.texto = "Texto"
        this._onClickedButton = this._onClickedButton.bind(this);

        this.counter = 0;


    }

    _onClickedButton () {

        const inputValue = document.getElementById("mitexto").value;

        if (inputValue) {
            const options = {
                detail: inputValue,
                bubles: true,
                composed: true,
                cancelable: true
            }
            const botonPulsado = new CustomEvent("botonpulsado", options)
            this.dispatchEvent(botonPulsado);
        }
    }

    connectedCallback() {
        const button = document.createElement("button");
        button.innerHTML = this.texto;
        this.appendChild(button);
        this.id = "boton";
        this.addEventListener("click", this._onClickedButton);
    }

    disconnectedCallback() {
        this.removeEventListener("click", this._onClickedButton)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "texto") {
            this.texto = newValue;
        }
    }

    static get observedAttributes() {
        return ['texto'];
    }

}

window.customElements.define("mi-boton", BotonCargarElement);