import { Component, OnInit } from '@angular/core';
import { ProductsClient, ProductsListVm } from  '../../../app/Arzalot-traders-api';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  ngOnInit(): void {
  }
  productsListVm: ProductsListVm = new ProductsListVm();

  constructor(client: ProductsClient) {
    client.getAll().subscribe(result => {
      this.productsListVm = result;
    }, error => console.error(error));
  }

}
