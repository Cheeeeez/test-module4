import { BookService } from './../book.service';
import { Book } from './../book';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList: Book[] = [];
  bookForm: FormGroup;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }

}
