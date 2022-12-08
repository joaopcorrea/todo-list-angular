import { SaleComponent } from './../sale/sale.component';
import { Directive, ElementRef, Input, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[saleDirective]',
})
export class SaleDirective implements OnChanges {
  @Input() originalPrice: number = 0;
  @Input() discountPercentage: number = 0;


  constructor(private element: ElementRef,
    private view: ViewContainerRef) {
  }

  ngOnChanges(): void {
    if (this.discountPercentage > 0) {
      const componentRef = this.view.createComponent(SaleComponent);
      componentRef.instance.originalPrice = this.originalPrice;
      componentRef.instance.discountPercentage = this.discountPercentage;

      const host = this.element.nativeElement;
      host.firstChild.insertBefore(componentRef.location.nativeElement, host.firstChild.lastChild);
    }
  }
}