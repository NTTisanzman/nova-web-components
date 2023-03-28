class BotonCargarElement extends HTMLButtonElement {

    constructor() {
        super();
        
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
}

window.customElements.define("boton-cargar", BotonCargarElement, {extends: "button"});