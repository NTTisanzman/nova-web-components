import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mi-primer-componente',
  styleUrl: 'mi-primer-componente.css',
  shadow: true,
})
export class MiPrimerComponente {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
