import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs;

  constructor(
    private _httpSerivce : HttpService,
  ) { }

  ngOnInit() {
    this.getAllJobs()
  }

  getAllJobs(){
    this._httpSerivce.getJobs().subscribe( data => {
      console.log("Here is the data from jobs api", data)
      this.jobs = data
    })
  }
}
