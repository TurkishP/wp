// import { Component, OnInit } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth';
// // import { Angular } from 'angularfire2';



// import * as firebase from 'firebase/app';
// // import { AuthService } from '..//services/auth.service';\
// import { Location } from '@angular/common';
// import { Observable, Subscription, Subject } from 'rxjs';
// import { AppRoutingModule }     from '../app-routing.module';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   authChange = new Subject<boolean>();

//   public LoggedIn: boolean = false;
//   private user: Observable<firebase.User>;
//   private userName : string;
//   private userEmail: string;
//   private userDetails: firebase.User = null;
//   constructor(
//     // public AuthService: AuthService,
//     // private location: Location,
//     private firebaseAuth: AngularFireAuth,
//     // private router: Router,
//     // public af: AngularFire
//   ){ 

//       this.user = firebaseAuth.authState;
//       this.userDetails = null;
//       // this.user=null;

      
//     }

//   ngOnInit() {

//   }

//   // isLoggedIn() {
//   //   console.log(this.userDetails);

//   //   if (this.userDetails == null ) {
//   //       return false;
//   //     } else {
//   //       return true;
//   //     }
//   //   }

//     doGoogleLogin(){
//       this.firebaseAuth.auth.signInWithPopup(
//         new firebase.auth.GoogleAuthProvider()
//       ).then(()=>{
//         this.LoggedIn = true;
//         this.user.subscribe(
//           (user) => {
//             if (user) {
//               this.userDetails = user;
//               this.userEmail = this.userDetails.email;
//               console.log(this.userEmail);
//             }
//             else {
//               this.userDetails = null;
//             }
//           }
//         );
//         console.log(this.userDetails);
//       });
//       this.authChange.next(true);
//     };
  
//     doGoogleLogout() {
        
//         this.firebaseAuth.auth.signOut()
//         .then(()=>{
//           this.LoggedIn = false;
//           // this.userDetails.refreshToken;
//           this.userDetails = null;
//           // this.router.navigateByUrl('/dashboard');
//           console.log(this.userDetails);
//         });
//         this.authChange.next(false);
//     };
  
// }

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase/app';

import { Location } from '@angular/common';
import { Observable, Subscription, Subject } from 'rxjs';
import { AppRoutingModule }     from '../app-routing.module';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private emailSubscription: Subscription;
  public isLoggedIn: boolean;
  private authSubscription: Subscription;
  public loggedIn: boolean;
  private user: Observable<firebase.User>;
  private userName : string;
  private userEmail: string;
  private userDetails: firebase.User;
  constructor(
    // private userService: UserService,
    public authService: AuthService
    // // private route: ActivatedRoute,
    // private location: Location
    // // public af: AngularFire
  ){ 

      
    }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus =>{
      this.isLoggedIn = authStatus;
    });

    this.emailSubscription = this.authService.emailChange.subscribe(newEmail =>{
      this.userEmail = newEmail;
    });
    }

    ngOnDestroy(){
      this.authSubscription.unsubscribe();
      // this.emailSubscription.unsubscribe();
    }

    login(){
      this.authService.doGoogleLogin();
      console.log(this.isLoggedIn);
    }
}