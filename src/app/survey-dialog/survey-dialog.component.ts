import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Constants } from '../constants';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-survey-dialog',
  templateUrl: './survey-dialog.component.html',
  styleUrls: ['./survey-dialog.component.scss']
})

export class SurveyDialogComponent implements OnInit {
  ip: string = Constants.IP_ADDRESS;
  survey:any
  questions:any
  surveyForm = new FormGroup({
   q1: new FormControl('',  Validators.required),
   q2: new FormControl('',  Validators.required),
   q3: new FormControl('',  Validators.required),
   // selectFormControl : new FormControl('', Validators.required)

 });
  constructor(public dialogRef: MatDialogRef<SurveyDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData, private http: HttpClient) { }

  ngOnInit() {
    this.getSurvey().subscribe((response) => {
      console.log(response)
        return this.questions = response;
    });
  }
  getSurvey() {
    return this.http.get(`${this.ip}/surveys`);
  }
  sendSurvey(): Observable<any>{
    let body = {
      mpi: sessionStorage.getItem('mpi'),
      survey_id: this.questions.surveyQuestionsId,
      question1:this.questions.question1,
      question2:this.questions.question2,
      question3:this.questions.question3,
      answer1:this.surveyForm.value.q1,
      answer2:this.surveyForm.value.q2,
      answer3:this.surveyForm.value.q3,
    }
    console.log(body)

    return this.http.post(`${this.ip}/surveys/${body.mpi}/survey`, body).pipe(
      // console.log(err)
    );

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    console.log(this.surveyForm)

    this.sendSurvey().subscribe()
  }
}
