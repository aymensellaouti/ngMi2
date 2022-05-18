import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  /* Quels attrbuts manipuler */
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() { }

  /* Quel event gérer */
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

}
