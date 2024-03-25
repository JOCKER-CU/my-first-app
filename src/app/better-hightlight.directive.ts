import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor : string = "transparent";
  @Input() hightlightColor : string = 'green';
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transaparent'; 
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; 
  constructor(private elRef: ElementRef,private render : Renderer2) { }
 
  ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseOver(eventData : Event ){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.hightlightColor;
    // this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
    // this.backgroundColor = 'blue';
  }

 
}
