import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	username: string = '';
	password: string = '';
	email: string = '';
	adresse: string = '';

	constructor(
		private authservice: AuthService,
		private router: Router

	) { }
	ngOnInit(): void {
		//throw new Error('Method not implemented.');
	}



	register() {
		let body: Object = {
			username: this.username,
			password: this.password,
			email: this.email,
			//role: 'user',
			adresse: this.adresse
		}
		//console.log (this.username, this.password, this.email, this.adresse)
		//
		this.authservice.register(body).subscribe()

		this.router.navigateByUrl('/login')
		
		
	}
}
