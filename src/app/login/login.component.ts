import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {CourseService} from "../service/course.service";
import {LocalStorageService} from "../service/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;



  constructor(private router: Router,
              private socialAuthService: SocialAuthService,private courseService:CourseService,private localStorageService:LocalStorageService) {
  }
  ngOnInit(): void {

  }

  middleware(){
    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser=user
      this.localStorageService.setAuthData(this.socialUser.idToken);
      this.localStorageService.setUserData(this.socialUser.email);
      this.localStorageService.setGid(this.socialUser.id);
      console.log(this.socialUser)
      this.courseService.login(user).subscribe(data=>{
        console.log(data)
      });

    })
  }




  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => {
        this.middleware()
        this.router.navigate(['course'])
      });
  }
}
