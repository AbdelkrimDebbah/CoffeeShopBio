import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	isAdmin: boolean = false;
	isLog: boolean = false;
	productservice: any;

	constructor(
		private authService: AuthService,
		private router: Router,
	) { }

	ngOnInit(): void {

		this.authService.user.subscribe(data => { data ? 
			this.isLog = true : this.isLog = false

			if (localStorage.getItem('role') == 'admin') {
			
				this.isAdmin = true;
				console.log(this.isAdmin)
			}
			
		})
	}

	logout() {
		this.authService.logout();
		// localStorage.clear();
		// this.router.navigateByUrl('products');

		//    this.toastr.success('Vous êtes déconnecté');

	}




}
