import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit{

  @Input() item: Product = {
    id: 0,
    link : '',
    name: '',
    price: 0,

  }

  constructor(
    private ProductService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  delete() {
  
      this.ProductService.delete(this.item.id).subscribe(
        () => location.reload()
      )



  
  } 
}
