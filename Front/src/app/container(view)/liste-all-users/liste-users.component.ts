import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
	selector: 'app-liste-users',
	templateUrl: './liste-users.component.html',
	styleUrls: ['./liste-users.component.css']
})

export class ListeUsersComponent implements OnInit {
	userDeleted = false;
	userModified = false;
	errorProfile: boolean = false

	users: user[] = []
	// user: user =
	//   {
	//     id: 0,
	//     username: '',
	//     adresse: '',
	//     email: '',
	//     role: '',
	//   }


	constructor(
		private userService: UserService,
		private router: Router,
		public profile: ProfileComponent
	) { }

	ngOnInit(): void {
		this.userService.getAllUsers().subscribe(data => {
			this.users = data

		
			
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
		this.userService.update(user).subscribe()
		this.userModified = true;
		

	}

	delete(id: number) {

		this.userService.delete(id).subscribe()
		//this.UserService.splice(this.user.id, 1)
		this.userDeleted = true;

	}

	




}