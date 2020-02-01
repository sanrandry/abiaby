import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {

  constructor() { }

  /**
   * initializeCredentials
   * set the credentials local strorage
   * @param credentials string
   */
  public initializeCredentials(credentials) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
  }

   /**
    * clear
    * clear all local storage data
    */
   public clear() {
     localStorage.clear();
   }

    /**
     * getAccesToken
     * get the user access token to the local storage
     * @return string
     */

     public getAccessToken() {
       let token;
       let credentials: any = localStorage.getItem('credentials');
       if (credentials) {
         credentials = JSON.parse(credentials);
         if (credentials.id) {
           token = credentials.id;
         }
       }
       return token;
     }

     /**
      * getUserId
      * @return string
      */
     public getUserId() {
       let userId;
       let credentials: any = localStorage.getItem('credentials');
       if (credentials) {
         credentials = JSON.parse(credentials);
         if (credentials.userId) {
          userId = credentials.userId;
         }
       }
       return userId;
     }

}
