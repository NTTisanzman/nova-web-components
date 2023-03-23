import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mi-primer-componente',
  styleUrl: 'mi-primer-componente.css',
  shadow: true
})

export class MiPrimerComponente {
  
  @Prop() idioma: string = "ingles";

  render() {
    return (
      <Host>
        <slot name="pepe"></slot>
        <p>{this.idioma}</p>
      </Host>
    );
  }

}
