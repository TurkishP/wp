import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent }      from './my-page/my-page.component';
import { MyPageShareComponent }   from './my-page-share/my-page-share.component';
import { DetailComponent }  from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectionComponent } from './selection/selection.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'mypage', component: MyPageComponent },
  { path: 'mypageshare', component: MyPageComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'main', component: MainComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  // The method is called forRoot() because you configure the router 
  // at the application's root level. The forRoot() method supplies 
  // the service providers and directives needed for routing, 
  // and performs the initial navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})


export class AppRoutingModule {}