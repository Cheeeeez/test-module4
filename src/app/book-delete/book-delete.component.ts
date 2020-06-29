import { BookService } from './../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from './../book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getPostById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error)
        this.book = null;
      }
    )
  }

  onClick() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.deleteBook(id).subscribe(
      next => { this.router.navigate(['/book']) })
  }
}
