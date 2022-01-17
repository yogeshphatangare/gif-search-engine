import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GiphyData, GiphyResult } from './gif-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static readonly giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  static readonly giphyApiKey = 'aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB'; 

  private searchText = new Subject<string>();

  constructor(private http: HttpClient) {}

  public getSearchText():Observable<string>{
    return this.searchText.asObservable();
  }

  public setSearchText(text:string):void{
    this.searchText.next(text);
  }

 public  searchGif(searchTerm:string):Observable<GiphyData[]>{
    const params = {
      api_key: DataService.giphyApiKey,
      q: searchTerm,
      limit:'15'
    };
   return this.http.get<GiphyResult>(DataService.giphyUrl, { params }).pipe(map(t=>t.data))
  }
}
