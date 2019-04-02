import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Constants } from '../constants';

@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.scss']
})
export class PatientPortalComponent implements OnInit {
  ip: string = Constants.IP_ADDRESS;
  data: any;
  clicks: any;
  patient: any;
  constructor(private http: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getPatient(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
        return this.data = data;
    });
    this.getPatientClicks(this.route.snapshot.paramMap.get('id')).subscribe((clicks) => {
      return this.clicks = clicks;
    });
  }
  getPatient(id) {
    return this.http.get(`${this.ip}/patientPortal/${id}`);
  }
  getPatientClicks(id) {
    return this.http.get(`${this.ip}/patientPortal/clicks/${id}`);
  }
}
