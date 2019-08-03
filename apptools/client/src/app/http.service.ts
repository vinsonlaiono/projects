import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  jobsApiUrl = 'https://jobs.github.com/positions.json';
  
  constructor(
    private _http : HttpClient
    ) { }
    
    getJobs(){
      // let httpOptions = {
      //   headers: new HttpHeaders({
      //     'Accept': 'application/json',
      //     'Access-Control-Allow-Origin' : '*',
      //     'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, FETCH',
      //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      //     'mode': 'no-cors',
      //     'Content-Type':  'application/json',
      //   })
      // };
      let header = new HttpHeaders();
      header.set('Content-Type', 'application/json')
      header.set('Access-Control-Allow-Origin' , '*')
      header.set('Access-Control-Allow-Methods', '*');
      header.set('Access-Control-Allow-Headers', '*');
      header.set('mode','no-cors');
      header.set('Cache-Control', 'no-cache');
      console.log(header)
      // console.log(httpOptions)

      console.log("need to get headers!")
      // fetch(this.jobsApiUrl, { 
      //   mode: 'no-cors',
      // })
      // .then(response => response.text())
      // .then(contents => console.log("COntentes:",contents))
      // .catch(() => console.log("Can’t access " + this.jobsApiUrl + " response. Blocked by browser?"))

      // return this._http.fe('/api/github/jobs/all')
      // return this._http.get(`${this.jobsApiUrl}`, httpOptions);
      return this._http.get(`${this.jobsApiUrl}`, { headers : header });
  }
}
