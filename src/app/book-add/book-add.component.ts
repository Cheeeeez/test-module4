import { Router } from '@angular/router';
import { BookService } from './../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const { value } = this.bookForm;
      this.bookService.createBook(value).subscribe(
        next => { this.router.navigate(['/book']) })
    }
  }
}
