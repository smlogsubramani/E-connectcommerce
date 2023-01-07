import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  //harcoded array
  public data = [
    {"image":"assets/images/carosel.jpg","brand":"sonypql203480","prize":"100"},
    {"image":"assets/images/post4.jpeg","brand":"Skullcandy","prize":"200"},
    {"image":"assets/images/carosel.jpg","brand":"boat noise cancelation","prize":"300"},
    {"image":"assets/images/carosel.jpg","brand":"Raymond shirt","prize":"500"},
    {"image":"assets/images/carosel.jpg","brand":"Silk saree","prize":"700"}
    // {"brand":"Silk saree","prize":"700"}
  ];
}
