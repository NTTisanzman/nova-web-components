/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MiPrimerComponente {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMiPrimerComponenteElement extends Components.MiPrimerComponente, HTMLStencilElement {
    }
    var HTMLMiPrimerComponenteElement: {
        prototype: HTMLMiPrimerComponenteElement;
        new (): HTMLMiPrimerComponenteElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "mi-primer-componente": HTMLMiPrimerComponenteElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MiPrimerComponente {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "mi-primer-componente": MiPrimerComponente;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mi-primer-componente": LocalJSX.MiPrimerComponente & JSXBase.HTMLAttributes<HTMLMiPrimerComponenteElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}