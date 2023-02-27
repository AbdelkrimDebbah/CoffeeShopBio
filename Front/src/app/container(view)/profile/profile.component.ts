import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserService } from 'src/app/service/user/user.service';


@Injectable({
	providedIn: 'root'
})

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
	
	userDeleted = false;
	userModified = false;
	
	user: user =
		{
			id: 0,
			username: '',
			adresse: '',
			email: '',
			role: '',

		}

	errorProfile: boolean = false;
	
	constructor(
		private UserService: UserService,
		private router: Router,
		private authService: AuthService
	) { }

	ngOnInit(): void {
		this.UserService.getUsersInfo().subscribe(data => {
			this.user = data
			console.log('data =', data);
			// console.log('user =', this.user);

		})
	}


	update(user: user) {
		if (!user.username || !user.email || !user.adresse) {
			this.errorProfile = true;
			// console.log('pas bon pour requete');
			//console.log(this.errorProfile);
		}
		else {
			this.errorProfile = false;

			// console.log("je suis bon pour requete");
			// console.log(this.errorProfile);

		}
		this.UserService.update(this.user).subscribe()
		this.userModified = true;
		

	}

	delete() {

		this.UserService.delete(this.user.id).subscribe()
		//this.UserService.splice(this.user.id, 1)
		// localStorage.clear();
		// this.router.navigateByUrl('')
		this.authService.logout();


	}

	


}


