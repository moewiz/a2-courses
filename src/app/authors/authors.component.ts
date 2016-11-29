import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {

  title: string = "Title for the author page";
  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

}
