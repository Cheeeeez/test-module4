import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'book/:id/show', component: BookDetailComponent },
  { path: 'book/add', component: BookAddComponent },
  { path: 'book/:id/editBook', component: BookEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
