import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';


//import { HttpClient, HttpParams } from '@angular/common/http';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	username: string = ''
	password: string = ''
	role: string = ''

	constructor(
		private authservice: AuthService,
		private router: Router
	) { }



	ngOnInit(): void {
		//console.log('Login Component');

	}

	login() {

		let body: Object = {
			username: this.username,
			password: this.password,
			role: this.role
		}
		//console.log(this.username, this.password)
		this.authservice.login(body).subscribe(data => {

			//console.log(data)

			//access_token a été interface dans auth.service, maintenant il le reconnait
			localStorage.setItem('UserToken', data.access_token)
			localStorage.setItem('role', data.role);
			this.authservice.userSubject.next(data.access_token)


			 this.router.navigateByUrl('products')

		})
	}
}	