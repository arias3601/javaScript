import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[cmsDropdown]'
})
export class DropdownDirective {

  private isOpen = false;
  @HostBinding('class.open') get opened(){
    return this.isOpen;
}
  @HostListener('click') open(){
    return this.isOpen = true;
  }
  @HostListener('mouseleave') close(){
    return this.isOpen = false;
  }

}
