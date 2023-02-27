import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth/auth.service";
import { catchError } from 'rxjs/operators';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService

    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        let token = this.authService.userSubject.value;
        //        console.log('token', token)
        if (token) {
            req = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': token

                })
            });
        }
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.authService.logout();
                    }
                    throw error;
                })
            );


    }
}