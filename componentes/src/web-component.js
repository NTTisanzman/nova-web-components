export class MyComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "<strong>Hola</strong>";
    }


}

customElements.define("my-component", MyComponent);