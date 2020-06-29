import { BookDeleteComponent } from './book-delete/book-delete.component';
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
  { path: 'book/:id/edit', component: BookEditComponent },
  { path: 'book/:id/delete', component: BookDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
