import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {
 @Input('appChangeColor')color!:string
  constructor(private el:ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
this.changeColor(this.color)
}
@HostListener('mouseleave') onMouseLeave(){
  this.changeColor('')
  }
changeColor(color:string)
{
  this.el.nativeElement.style.backgroundColor=color
}
}

