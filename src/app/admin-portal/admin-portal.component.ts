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
  cats:any = [
    'https://cdn2.thecatapi.com/images/4fp.gif',
    'https://cdn2.thecatapi.com/images/a5m.jpg',
    'https://cdn2.thecatapi.com/images/bcv.gif',
    'https://cdn2.thecatapi.com/images/cig.gif',
    'https://cdn2.thecatapi.com/images/df1.gif',
    'https://cdn2.thecatapi.com/images/ecr.gif',
    'https://cdn2.thecatapi.com/images/SqEbHe6XM.gif',
    'https://cdn2.thecatapi.com/images/Kjf-Z_8YE.gif'
  ]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPatients().subscribe((response) => {
      console.log(response)
        return this.patients = response;
    });
  }
  getPatients() {
    return this.http.get(`${this.ip}/patientPortal/getAllPatientsProfile`);
  }
  api(type, id){
    console.log(type, id)
    this.sendthing(type, id).subscribe()
    this.getPatients().subscribe((response) => {
      console.log(response)
        return this.patients = response;
    });
  }
  sendthing(type, id): Observable<any>{
    return this.http.post(`${this.ip}/patients/${id}/${type}`, {}).pipe(
      // console.log(err)

    );

  }
}
