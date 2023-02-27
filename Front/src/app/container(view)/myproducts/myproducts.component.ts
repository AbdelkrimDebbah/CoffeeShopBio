import { Product } from 'src/app/model/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
	selector: 'app-myproducts',
	templateUrl: './myproducts.component.html',
	styleUrls: ['./myproducts.component.css']
})
export class MyProductsComponent implements OnInit {

	myproducts: Product[] = []
	id: number = 1




	constructor(
		private ProductService: ProductService,
		private UserService: UserService
	) { }

	ngOnInit(): void {
		this.UserService.getUsersInfo().subscribe((data: any) => {
			this.id = data.id

			this.ProductService.getMyProducts(this.id).subscribe(data => {
				this.myproducts = data
			})
		})
	}
}