import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject } from 'rxjs';
import { Word } from 'src/app/models/word/word.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WordService {
  private url = environment.baseUrl + "/api/words";

  public wordData = new BehaviorSubject<any>([]);
  public sentenceData = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  setData(search: Word, sentence: Word) {
    this.wordData.next(search);
    this.sentenceData.next(sentence);
  }

  getWordData() {
    return this.wordData.asObservable();
  }

  getSentenceData() {
    return this.sentenceData.asObservable();
  }

  index(): Observable<Word[]> {
    return this.http.get<Word[]>(this.url).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error("WordService.index(): error retrieving word list:" + err));
      })
    );
  }

  show(id: number): Observable<Word> {
    return this.http.get<Word>(this.url + "/" + id).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error("WordService.show(): error retrieving word:" + err));
      })
    );
  }

  create(word: Word): Observable<Word> {
    return this.http.post<Word>(this.url, word).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error("WordService.create(): error creating word:" + err));
      })
    );
  }

  update(word: Word, id: number) {
    console.log(word);
    let endpoints = `/${id}`
    return this.http.put<Word>(this.url + endpoints, word).pipe(
      catchError((err: any) => {
        console.error("WordService.update(): error updating word:");
        console.error(err);
        return throwError(() => new Error("WordService.index(): error updating word"));
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.error("WordService.destroy(): error deleting word");
        console.error(err);
        return throwError(() => new Error("WordService.index(): error deleting word"))
      })
    );
  }

}
