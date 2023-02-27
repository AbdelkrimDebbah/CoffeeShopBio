import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './container(view)/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './container(view)/nav-bar/nav-bar.component';
import { RegisterComponent } from './container(view)/register/register.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './container(view)/home/home.component';
import { ProductContainerComponent } from './container(view)/product-container/product-container.component';
import { ProfileComponent } from './container(view)/profile/profile.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { CreateProductComponent } from './container(view)/product/create-product/create-product.component';
import { UpdateProductComponent } from './container(view)/product/update-product/update-product.component';
import { DeleteProductComponent } from './container(view)/product/delete-product/delete-product.component';
import { MyProductsComponent } from './container(view)/myproducts/myproducts.component';
import { ListeUsersComponent } from './container(view)/liste-all-users/liste-users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProductContainerComponent,
    ProfileComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    MyProductsComponent,
    ListeUsersComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
     
     

  ],
  providers: [
    HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
