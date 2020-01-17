import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Product} from '../../../model/product.model';
import {ShoppingCart} from '../../../model/shopping-cart.model';
import {ProductService} from '../../../service/product.service';
import {ShoppingCartService} from '../../../service/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetail1Component implements OnInit {
  itemCount: number;
  public products: Observable<Product[]>;
  public cart: Observable<ShoppingCart>;

  private cartSubscription: Subscription;


  constructor(private productsService: ProductService,
              private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit() {
    this.products = this.productsService.getProductList();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);

    });
  }


  public emptyCart(): void {
    this.shoppingCartService.empty();
  }
}
