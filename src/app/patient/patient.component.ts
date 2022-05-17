import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public patientService : PatientService) { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    this.patientService.addPatient().subscribe({
      next:(data) => { },
      complete:() => {console.log("Successfully added your details.You will shortly receive an email." ); },
      error:(err) => { console.log("Unable to Create New User" + err);}
      })
    }
  }
