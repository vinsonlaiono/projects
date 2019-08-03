import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  jobsApiUrl = 'https://jobs.github.com/positions.json?description=python&location=new+york';
  
  constructor(
    private _http : HttpClient
    ) { }
    
    getJobs(){
      let headers = new HttpHeaders();
      headers.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
      headers.set("Access-Control-Allow-Origin", "http://localhost:8000");
      headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Content-Length, Accept, Origin,");
      headers.set("Access-Control-Allow-Credentials", "true");
      headers.set('Cache-Control', 'no-cache');
      headers.set('Content-Type', 'application/json')

      console.log('In get jobs function in service file')
      return this._http.get(`${this.jobsApiUrl}`, {headers:headers})
      // return this._http.get('https://pokeapi.co/api/v2/pokemon/ditto');
      // return this._http.get(this.jobsApiUrl, this.httpOptions)
  }
}
