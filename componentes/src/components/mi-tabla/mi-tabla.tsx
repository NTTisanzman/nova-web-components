import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'mi-tabla',
  styleUrl: 'mi-tabla.css',
  shadow: true,
})
export class MiTabla {

  
  @Prop() indiceTitle: string;
  
  @Prop() nombreTitle: string;
  
  @Prop() dniTitle: string;

  @Prop() buttonText: string;

  @Prop() disabledButtonText: string;
  
  @State() _elementos: any[] = [];

  @State() isButtonDisabled: boolean = false;

  @State() actualDni: string = '';

  @State() actualName: string = '';

  @Listen('buttonDisabled') buttonDisabledTrigger(e) {
    this.isButtonDisabled = e.detail;
  }

  addRow() {
    if (!this.actualName) {
      alert('Tiene que poner un nombre obligatoriamente');
    }
    else {
      if(!this.actualDni) {
        alert('No has puesto DNI, pero te meto el campo igualmente')
      }
      this._elementos = [
        ...this._elementos, {
            nombre: this.actualName,
            dni: this.actualDni || "-"
        }
      ]

      this.actualDni = '';
      this.actualName = '';
    }
   
  }

  inputChanged(text: string, type: string) {
    switch (type) {
      case 'nombre':
        this.actualName = text;
        break;
      
      case 'dni':
        this.actualDni = text;
        break;
      
      default: 
        alert('Error');
        break;
    }
  }

  render() {
    return (
      <Host>
        {!this.isButtonDisabled ? (
          <div>
            <div class="inputs">
              <mi-input inputValue={this.actualName} class="mi-input --nombre" placeHolder={"Nombre..."} onInputChanged={(e)=> {
                this.inputChanged(e.detail, 'nombre')
              }}></mi-input>
              
              <mi-input inputValue={this.actualDni} class="mi-input --dni" placeHolder={"DNI..."} onInputChanged={(e)=> {
                this.inputChanged(e.detail, 'dni')
              }}></mi-input>
            </div>
        <table>
          <tr>
            <th>{this.indiceTitle}</th>
            <th>{this.nombreTitle}</th>
            <th>{this.dniTitle}</th>
          </tr>

            {this._elementos.map((item, index)=> 
             (
              <tr>
                <td>{index + 1}</td>
                <td>{item.nombre}</td>
                <td>{item.dni}</td>
              </tr>
            ))}
        </table>
          </div>
          )
          :
          (
            <p>Loading.....</p>
            )}
            <mi-boton disabled-button-text={this.disabledButtonText} texto={this.buttonText} onButtonPressed={()=>{this.addRow()}}/>
      </Host>
    );
  }

}
