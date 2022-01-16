import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { GiphyData } from '../gif-model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  data$: Observable<GiphyData[]>;
  loading: boolean;
  constructor(private service: DataService) {
    this.data$ = this.service.getSearchText().pipe(
      tap(() => this.loading = true),
      switchMap(term => this.service.searchGif(term)),
      tap(() => this.loading = false),
    );
  } 

  ngOnInit() {
  }

}
