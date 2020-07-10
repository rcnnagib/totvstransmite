import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NFe } from './features/documentos/nfe/nfe.model';
import { IdEnt } from './features/documentos/nfe/id-ent';

@Injectable()
export class AppServiceService{

  constructor(private http: HttpClient) { }

  NFes(): Observable<NFe[]>{
    // return this.http.get<NFe[]>('http://localhost:8081/api/NFes');
    return this.http.get<NFe[]>('http://localhost:3000/banco');
    }

    IdEnt(): Observable<IdEnt[]>{
    // return this.http.get<IdEnt[]>('http://localhost:3000/entidade');
    return this.http.get<IdEnt[]>('http://localhost:3000/entidade2');
    }
}
