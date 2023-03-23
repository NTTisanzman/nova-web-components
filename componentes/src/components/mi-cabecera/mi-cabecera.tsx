import { Component, Host, h } from '@stencil/core';


@Component({
  tag: 'mi-cabecera',
  styleUrl: 'mi-cabecera.css',
  shadow: true,
})



export class MiCabecera {

  

  render() {
    return (
      <Host>
        <div class="mi-cabecera-container">
          <slot name="titulo"></slot>
          <slot name="imagen"></slot>
        </div>
      </Host>
    );
  }

}
