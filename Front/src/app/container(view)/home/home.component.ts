import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	isLog: boolean = false;

	constructor(
		private router: Router,
		private authService: AuthService,
	) { }

	ngOnInit(): void {

		this.authService.user.subscribe(data => {
			data ?
				this.isLog = true : this.isLog = false
		})

	}


	goToLogin(): void {



		this.router.navigate(['login'])
	}

	goToRegister(): void {

		this.router.navigate(['register'])

	}

}



