import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  bookList: IBook[];
  content: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(next => {
      this.bookList = next;
      console.log(next);
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

  addVoteBook(id) {
    this.bookService.addVoteBook(id).subscribe(next => {
      console.log(next);
      this.ngOnInit();
    }, error => console.log(error));
  }

}
