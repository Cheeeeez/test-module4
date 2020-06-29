import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from './../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.bookForm= this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(10)]]
    });
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getPostById(id).subscribe(
      next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }
}
