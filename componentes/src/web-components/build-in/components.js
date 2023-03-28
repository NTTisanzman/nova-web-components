class BotonCargarElement extends HTMLButtonElement {
    constructor() {
        super();

        this.loadingText = "Loading..."
        this._onClickedButton = this._onClickedButton.bind(this);
    }

    _onClickedButton () {

        this.setAttribute("disabled", "disabled");
        this.innerHTML = this.loadingText;
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

class BotonSimpleElement extends HTMLElement {

    constructor() {
        super();

        this.loadingText = "Loading...";
        this.startingText = "Default starting text";
        this._onButtonPressed = this._onButtonPressed.bind(this);
    }
    
    _onButtonPressed(e) {
        e.target.setAttribute("disabled", "disabled");
        this.querySelector("button").innerHTML = this.loadingText;
    }
    
    connectedCallback() {
        const button = document.createElement("button");
        button.addEventListener("click", this._onButtonPressed)
        button.innerHTML =  this.startingText;

        this.appendChild(button);
    }

    disconnectedCallback() {
        const button = this.querySelector("button");
        button.removeEventListener("click", this._onButtonPressed);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === "loadingtext") {
            this.loadingText = newVal;
        }
        else if (name === "startingtext") {
            this.startingText = newVal;
        }
    }

    static get observedAttributes() {
        return ['loadingtext', 'startingtext']
    }
}

window.customElements.define("boton-cargar", BotonCargarElement, {
    extends: "button"
});
window.customElements.define("boton-simple", BotonSimpleElement)