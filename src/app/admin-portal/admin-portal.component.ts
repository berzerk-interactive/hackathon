import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {
  patients:any
  ip: string = Constants.IP_ADDRESS;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPatients().subscribe((response) => {
      console.log(response)
        return this.patients = response;
    });
  }
  getPatients() {
    return this.http.get(`${this.ip}/patientPortal/getAllPatientsProfile`);// http://10.186.82.16:8081/patientPortal/getAllPatientsProfile
  }
  api(type, id){
    console.log(type, id)
    this.sendthing(type, id).subscribe()
  }
  sendthing(type, id): Observable<any>{
    return this.http.post(`${this.ip}/patients/${id}/${type}`, {}).pipe(
      // console.log(err)
    );

  }
}
