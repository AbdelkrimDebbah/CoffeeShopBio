import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/model/product';


@Injectable({
	providedIn: 'root'
})
export class ProductService {
	createProduct(product: Product) {
		throw new Error('Method not implemented.');
	}

	private url = environment.API_URL

	constructor(
		private http: HttpClient
	) { }


	getProducts() {
		return this.http.get<Product[]>(`${this.url}/product`)
	}

	getMyProducts(user_id: number) {
		return this.http.get<Product[]>(`${this.url}/product/${user_id}`)
	}

	create(body: Object) {

		// voir dans create product ce qu'il y a dans le body, cad ce que attend l'API     
		return this.http.post(`${this.url}/product`, body)

	}


	update(item: Product) {
		return this.http.put(`${this.url}/product/${item.id}`, item)
	}

	delete(id: number) {
		return this.http.delete(`${this.url}/product/${id}`)
	}

}


