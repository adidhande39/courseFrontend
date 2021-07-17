import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public setAuthData(auth:any):void{
    localStorage.setItem("Token", auth);
  }

  public setUserData(data:any):void{
    localStorage.setItem("Email",data);
  }

  public setGid(data:any):void{
    localStorage.setItem("Gid",data);
  }
}
