import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent {
  constructor ( private CartService :CartService) {}

  addtocard(item:any):void{
    this.CartService.addtocard(item);
  }

}
