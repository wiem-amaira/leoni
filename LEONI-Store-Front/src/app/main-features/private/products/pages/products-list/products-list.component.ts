import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  readData3:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getallData().subscribe((res3) => {
      if (res3 && res3.data3 && res3.data3.length > 0) {
        this.readData3 = res3.data3;
      } else {
        this.readData3 = [];  
      }
    });

  }

  postProduct() {
    this.productService.getProducts().subscribe(response => {
        console.log('>>> Response ', response);
      }, err => {
        console.error('Error ', err)
      })
  }

  refreshList() {
    window.open('http://localhost/LEONI-Store-Back/products/controllers/products-GET.php', '_system')
  }

}
