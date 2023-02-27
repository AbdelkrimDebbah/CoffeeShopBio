import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container(view)/home/home.component';
import { ListeUsersComponent } from './container(view)/liste-all-users/liste-users.component';
import { LoginComponent } from './container(view)/login/login.component';
import { MyProductsComponent } from './container(view)/myproducts/myproducts.component';
import { ProductContainerComponent } from './container(view)/product-container/product-container.component';
import { CreateProductComponent } from './container(view)/product/create-product/create-product.component';
import { UpdateProductComponent } from './container(view)/product/update-product/update-product.component';
import { ProfileComponent } from './container(view)/profile/profile.component';
import { RegisterComponent } from './container(view)/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'products', component: ProductContainerComponent },
  { path: 'myproducts', component: MyProductsComponent },
  { path: 'createproduct', component: CreateProductComponent},
  { path: 'updateproduct/:id', component: UpdateProductComponent},
  { path: 'users', component: ListeUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

