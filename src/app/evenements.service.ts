import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Evenement } from './evenement';
import { StatsTotal } from './stats-total';
import { Statsmoyenne } from './statsmoyenne';
import { Users } from './users';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  eventsUrl = 'https://charettejordanweb3.herokuapp.com/';


  constructor(private http: HttpClient) { }

  getEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.eventsUrl + 'events');  
  }

  getByID(id : string): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.eventsUrl + 'events/' + id, httpOptions);
  }

  getStast1(): Observable<StatsTotal[]>{
    return this.http.get<StatsTotal[]>(this.eventsUrl + 'events/stats/event-par-sport');
  }

  getStats2(): Observable<Statsmoyenne[]>{
    return this.http.get<Statsmoyenne[]>(this.eventsUrl + 'events/stats/coutmoyen-parsport');
  }

  addEvent(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.eventsUrl + 'events', evenement, httpOptions);
}

updateEvent(evenement: Evenement) : Observable<any>{
  const id = evenement._id;
  return this.http.patch<Evenement>(this.eventsUrl + 'events/' + id, evenement, httpOptions);
}

deleteEvent(id: string) : Observable<Evenement>{
  return this.http.delete<Evenement>(this.eventsUrl + 'events/' + id, httpOptions)
}

validateUser(usager: Users): Observable<String> {
  return this.http.post<String>(this.eventsUrl + 'user', usager, httpOptions);  
}

}
