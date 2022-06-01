import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Observable, Observer, of } from 'rxjs';

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

     public myarray: number[] = []

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

     get message() {       return this.state ? this.BARRAS[this.idInterval] : this.BARRAS[this.indice];     }

     numbers: Number[] | undefined;

      sequenceSubscriber(observer: Observer<Number>) {
      // entregar sincrónicamente 1, 2 y 3, luego completar
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      this.myarray.push(1);
      this.myarray.push(2);
      this.myarray.push(3);
      this.myarray.push(4);

      return {unsubscribe() {}};
    }
    public strings$: Observable<number[]> = of(this.myarray);

      //strings$ = new Observable(this.sequenceSubscriber);
      get numeros(){ return this.numbers };


    ngOnInit(): void {
  }
}
// function emitir() : Observable<number> {
//   return new Observable <number> (suscritor => {
//         for (let i = 1; i<=10; i++) {
//           suscritor.next(i);

//         }
//         suscritor.complete();
//         unsubscribe();
//         //this.numbers.subscribe(suscritor);
//    });
//   }
