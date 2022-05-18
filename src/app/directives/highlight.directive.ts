import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighilght]',
})
export class HighlightDirective implements OnInit{
  @Input() in = 'yellow';
  @Input() out = 'green';
  @HostBinding('style.backgroundColor') bgc = '';
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
