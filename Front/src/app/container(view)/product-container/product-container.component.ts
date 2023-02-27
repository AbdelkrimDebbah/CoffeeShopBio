import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { Product } from 'src/app/model/product';

@Component({
	selector: 'app-product-container',
	templateUrl: './product-container.component.html',
	styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
	products: Product[] = []
	isAdmin: boolean = false;
	constructor(
		private productService: ProductService
	) { }

	ngOnInit(): void {
		


		this.productService.getProducts().subscribe(data => {
			this.products = data
			// console.log(data)

		
		})
	}

	// buyProduct(product: Product): void {
	// 	// code de gestion de l'achat ici
	//   }

}



