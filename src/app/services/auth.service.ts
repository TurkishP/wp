import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app';
import { Observable, Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit{
  authChange = new Subject<boolean>();
  private user: Observable<firebase.User>;
  private email: Observable<string>;
  emailChange = new Subject<string>();
  
  // private userName : string;
  private userEmail: string;
  private userDetails: firebase.User;
  public isAuth : boolean;

  constructor(
    public router: Router,
    private firebaseAuth: AngularFireAuth) {   

      this.user = this.firebaseAuth.authState;
      this.user.subscribe(
              (user) => {
                if (user) {
                  this.userDetails = user;
                  this.userEmail = this.userDetails.email;
                  console.log(this.userEmail);
                }
                else {
                  this.userDetails = null;
                }
              }
            );

   }

   ngOnInit(){

   }

   getUserData(){
    return {...this.user};
  }

   doGoogleLogin(){
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(()=>{
      this.authChange.next(true);
      this.isAuth= true;
      this.emailChange.next(this.userDetails.email);
      this.router.navigateByUrl('/login');
      this.router.navigateByUrl('/login');
      console.log(this.userDetails);
      
    }).catch(error =>{
      console.log(error);
    });

  };

  doGoogleLogout(){
      
      this.firebaseAuth.auth.signOut()
      .then(()=>{
        // this.userDetails.refreshToken;
        this.isAuth= false;
        this.emailChange.next("");
        // console.log(this.userDetails);
        this.authChange.next(false);
      }).catch(error =>{
        console.log(error);
      });
      this.userDetails = null;
      this.user =null;
      this.userEmail = null;
      this.router.navigateByUrl('/dashboard');
  };

  // getEmail(): string{
  //   return this.userDetails.email;
  // }

  getisAuth():boolean{
    return this.isAuth;
  }
  }

