import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors: string[];

  constructor(public authorsService: AuthorsService) { 
    this.authors = this.authorsService.getAuthors()
  }

  ngOnInit(): void {
  }

  public displayAuthors() {
    return this.authorsService.getAuthors();
  }

  public displayNumberOfAuthors() {
    return this.authors.length;
  }

}
