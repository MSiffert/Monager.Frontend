import { Injectable } from "@angular/core";
import { Entry } from "../models/entry.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EntriesSerivce {
  public constructor(private httpClient: HttpClient) { }

  public getEntries(): Observable<Entry[]> {
    const url = 'https://localhost:5001/api/entries';
    return this.httpClient.get<Entry[]>(url);
  }

  public createEntry(entry: Entry): Observable<Entry> {
    console.log('hello');
    console.log(entry);
    const url = 'https://localhost:5001/api/entries';
    return this.httpClient.post<Entry>(url, entry);
  }

  public updateEntry(entry: Entry): Observable<Entry> {
    const url = 'https://localhost:5001/api/entries';
    return this.httpClient.put<Entry>(url, {});
  }

  public deleteEntry(id: number) {
    const url = 'https://localhost:5001/api/entries';
    return this.httpClient.delete(url);
  }
}
