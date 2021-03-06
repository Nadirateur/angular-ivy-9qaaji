import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumService {
  private _apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private _httpClient: HttpClient) {}

  getAllAlbum(): Observable<any> {
    return this._httpClient.get(this._apiUrl);
  }
}
