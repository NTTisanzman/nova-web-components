import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'segundo-componente',
  styleUrl: 'segundo-componente.css',
  shadow: true,
})
export class SegundoComponente {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
