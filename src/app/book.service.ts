import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL)
  }

  getPostById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_URL}/${id}`);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_URL}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}

