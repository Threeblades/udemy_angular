import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authorsArray: string[];

  constructor() { 
    this.authorsArray = ['author1', 'author2', 'auhtor3'];
  }

  public getAuthors(){
    return this.authorsArray;
  }

}
