import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'mi-input',
  styleUrl: 'mi-input.css',
  shadow: true,
})
export class MiInput {

  @Prop() placeHolder: string = "Texto...";

  @Prop() inputValue: string = '';

  @Event() inputChanged: EventEmitter;


  render() {
    return (
      <Host>
        <input type="text" placeholder={this.placeHolder} value={this.inputValue || ''} onInput={(e)=>{
          this.inputChanged.emit((e.target as HTMLInputElement).value)
        }}></input>
      </Host>
    );
  }

}
