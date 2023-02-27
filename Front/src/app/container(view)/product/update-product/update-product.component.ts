import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
	selector: 'app-update-product',
	templateUrl: './update-product.component.html',
	styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
	id: number = 0
	item: Product = {
		id: 0,
		link : '',
		name: '',
		price: 0,
	
	  }
	  constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
			  ) { }
	
	  ngOnInit(): void {
		this.id = this.route.snapshot.params['id']
		this.productService.getProducts().subscribe(data => {
		this.item = data.filter(product => product.id == this.id)[0]
		
		// console.log(this.item)
		// console.log(data)
	  });

	
	  }
	
	  update(item: Product) {
	  
		  this.productService.update(item).subscribe()

		  this.router.navigateByUrl('/myproducts')
		  
		  
	
	
	  
	  }
	
	

	
	}




