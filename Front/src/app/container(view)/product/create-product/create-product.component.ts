import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-product',
	templateUrl: './create-product.component.html',
	styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


	item: Product = {
		name: '',
		price: 0,
		link: '',
		id: 0
	}

	constructor(
		private ProductService: ProductService,
		private router: Router
	) { }

	ngOnInit(): void {

	}

	create() {
		this.ProductService.create(this.item).subscribe()

		this.router.navigateByUrl('/myproducts')
		
		
		
	}


}

