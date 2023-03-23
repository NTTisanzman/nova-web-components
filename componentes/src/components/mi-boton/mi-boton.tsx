import { Component, Host, h, Prop, EventEmitter, Event, State, Watch } from '@stencil/core';

@Component({
  tag: 'mi-boton',
  styleUrl: 'mi-boton.css',
  shadow: true,
})

export class MiBoton {

  @Prop() texto = "Texto";

  @Prop() disabledButtonText: string = "Espere...";

  @State() counter: number = 0;

  @State() disabled: boolean = false;

  @Event() buttonPressed: EventEmitter;

  @Event() buttonDisabled: EventEmitter;

  @Watch('disabled') emitDisabledButton(e) {
    this.buttonDisabled.emit(e);
  }
  
  
  
  triggerButton() {
    this.buttonPressed.emit(this.counter);
    this.counter++;
    this.disabled = true;

    setTimeout(()=> {
      this.disabled = false;
    }, 3000)
  }



  render() {
    return (
      <Host>
        <button disabled={this.disabled} onClick={()=>{
          this.triggerButton();
        }}>{this.disabled ? this.disabledButtonText : this.texto}</button>
      </Host>
    );
  }

}
