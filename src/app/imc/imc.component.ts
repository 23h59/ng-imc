import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {
  imc: number = 0;
  peso: number = 0;
  altura: number = 0;
  classficacao: string = "";

  calcularIMC() {
    if (typeof this.altura !== "number" || typeof this.peso !== "number") {
      return alert("Verifique os valores e tente novamente!");
    }

    if (this.peso < 1 || this.altura < 1) {
      return alert("Valor minimo dos campos: 1");
    }

    this.imc = this.peso / (this.altura ** 2);
    this.classficacao = `IMC ${(this.imc).toFixed(2)} - `;

    if (this.imc < 18.5) {
      this.classficacao += "Magreza";

    } else if (this.imc >= 18.5 && this.imc < 25) {
      this.classficacao += "Normal";

    } else if (this.imc >= 25 && this.imc < 30) {
      this.classficacao += "Sobrepeso";

    } else if (this.imc >= 30 && this.imc < 35) {
      this.classficacao += "Obesidade grau I";

    } else if (this.imc >= 35 && this.imc < 40) {
      this.classficacao += "Obesidade grau II";

    } else {
      this.classficacao += "Obesidade grau III";

    }
  }
}