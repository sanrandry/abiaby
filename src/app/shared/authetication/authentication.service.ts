import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  /**
   * login
   * make a login request to the api service
   * @param data credentials
   * @return Observable <any>
   */
  public login(data: LoginData) {
    return this.http.post('/sellerAccounts/login', data).pipe(
      tap((element) => {
        this.tokenStorageService.initializeCredentials(element);
      }),
    );
  }

  /**
   * logout
   * clear all localstorage credentials
   * @return Observable <any>
   */
  public logout() {
    this.tokenStorageService.clear();
    return of(true);
  }

  /**
   * isAuthorized
   * verify if the user is logedin
   * @return Observable <bollean>
   */
    public isAuthorized(): Observable <boolean> {
      let isAuthorized = false;
      // verify if we have an access token
      if (this.tokenStorageService.getAccessToken()) {
        isAuthorized = true;
      }

      return of(isAuthorized);
    }
   /**
    * getAccessToken
    * get the user access token
    * @return observable <string>
    */
   public getAccessToken() {
     return this.tokenStorageService.getAccessToken();
   }

    /**
     * getUserId
     * get the the loged user id
     * @return string
     */
    public getUserId(): string {
      return this.tokenStorageService.getUserId();
    }
}
