import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(){
    this.btnClass = `btn + ${this.btnClass}`;
  }

 @Input('valor') progreso: number =40;  //Se puede renombrar el argumento en caso de ser necesario
//  @Input() progreso: number =40;
@Input() btnClass: string ="btn-primary"; 

@Output() valorSalida: EventEmitter<number> = new EventEmitter();

  // get getPorcentaje(){
  //   return `${this.progreso}%`;
  // }

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0)
      return this.progreso = 100;
    }
    this.valorSalida.emit(this.progreso);
    return this.progreso = this.progreso + valor;
    
  }

}
