import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class PrevisionService {

    constructor(private http: HttpClient) {
    }

    getPrevision(city: string): Observable<any> {
        const url = `${environment.api_backend_hostname}` + '/' + city;
        return this.http.get(url);
    }

    searchCity(city: string): Observable<any> {
        const url = `${environment.api_search_url}` + city;
        return this.http.get(url);
    }
}
