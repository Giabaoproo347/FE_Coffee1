import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {AppComponent} from '../../../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Observer} from 'rxjs';
import {ShoppingCartService} from '../../../service/shopping-cart.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  public products: any[];

  public constructor(private productsService: ProductService,
                     private shoppingCartService: ShoppingCartService,
                     private route: ActivatedRoute) {
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.productId === product.id));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }

  public ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProductListByCategory(id).subscribe(next => {
      this.products = next;
    });
  }
}
