import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private testApiUrl = '/api/v1/test';
    
    constructor(private http: Http) {}
    
    getTestData (): Observable<any> {
        return this.http.get(this.testApiUrl)
            .map((res: Response) => {
                return res.json().data || {};
            });
    }
}