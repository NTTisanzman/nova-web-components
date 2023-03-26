class BotonCargarElement extends HTMLButtonElement {

    constructor() {
        super();

        this.loadingText = "Loading..."
        this._onClickedButton = this._onClickedButton.bind(this);

        this.counter = 0;


    }

    _onClickedButton () {
        this.counter++;

        if (this.counter % 2 === 0) {
            const options = {
                detail: this.counter,
                bubles: true,
                composed: true,
                cancelable: true
            }
    
            const numeroPar = new CustomEvent("numeropar", options)
            this.dispatchEvent(numeroPar);
        }
    }

    connectedCallback() {
        this.addEventListener("click", this._onClickedButton);
    }

    disconnectedCallback() {
        this.removeEventListener("click", this._onClickedButton)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "loadingtext") {
            this.loadingText = newValue;
        }
    }

    static get observedAttributes() {
        return ['loadingtext'];
    }

}

window.customElements.define("boton-cargar", BotonCargarElement, {extends: "button"});