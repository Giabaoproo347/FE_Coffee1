import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product.model';
import {ProductService} from '../../../service/product.service';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-app-hompage-true',
  templateUrl: './app-hompage-true.component.html',
  styleUrls: ['./app-hompage-true.component.css']
})
export class AppHompageTrueComponent implements OnInit {

  productList: Product[] = [];
  content: string;

  constructor(private productService: ProductService, private app: AppComponent) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.productService.getProductList().subscribe(next =>
      (this.productList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

}
