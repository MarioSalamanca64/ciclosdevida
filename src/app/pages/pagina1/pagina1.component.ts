import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  nombre:string = 'Mario';
  segundos: number = 0;
  //para que no haya fuga de memoria 
  timerSubscription!: Subscription;

  constructor() {
    console.log('contructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchenges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewIni');
  }

  ngAfterViewChecked(): void {
    console.log(' ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnInit(): void {
    console.log('ngOninit');
    // rxjs
    this.timerSubscription = interval(1000).subscribe( i => {
      this.segundos = i;
    })
  }

  guardar(){

  }


}
