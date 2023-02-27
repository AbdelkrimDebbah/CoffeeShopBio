import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


interface resp_login {
	access_token: string
	role: string
}

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	private url = environment.API_URL

	public user: Observable<string>
	public userSubject: BehaviorSubject<string>


	constructor(
		private http: HttpClient, private router: Router

	) {
		this.userSubject = new BehaviorSubject<string>(localStorage.getItem('UserToken') ?? '')
		this.user = this.userSubject.asObservable();

	}

	login(body: Object): Observable<resp_login> {
		return this.http.post<resp_login>(`${this.url}/user/login`, body)


	}

	register(body: Object
	) {
		return this.http.post(`${this.url}/user/register`, body)

	}
	logout() {
		// localStorage.removeItem('UserToken')
		localStorage.clear();
		this.userSubject.next('')
		this.router.navigate(['/'])
	}
}