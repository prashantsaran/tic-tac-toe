import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = "red";
    el.nativeElement.style.backgroundColor = "grey";
    el.nativeElement.style.fontWeight = "bold"; // Add font weight
    el.nativeElement.style.border = "2px solid black"; // Add border
    el.nativeElement.style.padding = "10px"; // Add padding
    el.nativeElement.style.margin = "20px"; // Add margin
    el.nativeElement.style.textAlign = "center"; // Add text alignment
    el.nativeElement.style.borderRadius = "5px"; // Add border radius
  }


}
