import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Observable, Observer, of, Subject } from 'rxjs';

@Component({
  selector: 'app-barra-girante',
  templateUrl: './barra-girante.component.html',
  styleUrls: ['./barra-girante.component.css']
})
export class BarraGiranteComponent implements OnInit {

    readonly BARRAS = [' ', '|', '/', '-', '\\'];
     indice = 0;
     private idInterval: any = undefined;
     @Input() state = true;
     @Output() stateChange = new EventEmitter<boolean>();

    public subject = new Subject<number[]>();
    public strings$: Observable<number[]> = this.subject.asObservable();
      constructor() {
      }

     iniciar() {
        this.state = !this.state;
        this.stateChange.emit(this.state);


          if (! this.idInterval) {
             let count = this.BARRAS.length;
             this.idInterval = setInterval( () => this.indice = (this.indice+1) % count, 100);
          }
     }
     parar() {
       this.state = true;
         if (this.idInterval) {
              clearInterval( this.idInterval );
              this.idInterval = undefined;
              this.indice = 0;
         }
     }

     get message() {
       return this.state ? this.BARRAS[this.idInterval] : this.BARRAS[this.indice];
      }

    emitir() : void {
      const numbers = [...Array(10).keys()].map(i=>i+1)
      this.subject.next(numbers);
    }

    ngOnInit(): void {
      this.subject.subscribe(value => console.log(value));
      this.subject.asObservable().subscribe(value => console.log(value));
  }
}



