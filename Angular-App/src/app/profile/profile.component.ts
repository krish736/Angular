import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { CountryCodePipe } from '../pipe/country-code.pipe';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../directives/highlight.directive';

// function formatName(value:string){
//   return "Hii "+ value
// }
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CountryCodePipe, CommonModule, HighlightDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit{
  @Input({alias:'userName'}) name:string = ''
  @Input() status!:boolean
  @Input() salary!:number
  @Input() number!:string

  @Output() myEvent = new EventEmitter<User>()
  sendOutput (){
    this.myEvent.emit({
      name:this.name,
      newSalary: 1000000,
    })
  }

  @ViewChild("myHeading") heading?: ElementRef;

  constructor(){
    console.log('constructor called!');
  }

  ngOnInit(){
    console.log("onInit called!");
  }

  ngOnDestroy(){
    console.log('onDestroy called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngAfterViewInit(): void {
    console.log(this.heading?.nativeElement.textContent);
    
  }
}
