import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
        // const url = 'http://localhost:9999';
        const url = `${environment.api_search_url}` + city;

        // let headers = new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8', 'Access-Control-Allow-Origin' : '*/*'});
        // let headers2 = new HttpHeaders();
        // headers2.set('Access-Control-Allow-Origin', '*');
        // headers2.set('Content-Type', 'application/json');
        // console.log(headers2);
        // const options = {headers: headers2};
        //
        // return this.http.get(url, options);
        console.log('URL: ' + url);
        return this.http.get(url);
    }
}
