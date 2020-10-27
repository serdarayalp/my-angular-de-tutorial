import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Object>;

  // Der Rückgabewert der get-Methode des HTTP-Services liefert ein Observable zurück.
  // Dies ist eine Datenstruktur, welche uns den Umgang mit asynchronen Daten erleichtert.
  // Angular nutzt dafür die RxJS Observables.
  constructor(private bookData: BookDataService) {
    this.books$ = this.bookData.getBooks();
  }

  ngOnInit(): void {}
}
