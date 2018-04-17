import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // allow to bind on the element this directive is attached to
  // below we are binding to the class property
  @HostBinding('class.open') isOpen = false;

  // allow to listen to activity in the elements this directive is attached to.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
