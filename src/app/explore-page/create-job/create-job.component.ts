import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent {
  availableJobs!: Observable<any>;

  constructor(private firestore: Firestore, private router: Router) {
  }

  postJob(jobForm:any) {
    const collectionInstance = collection(this.firestore, 'job-list');

    addDoc(collectionInstance, jobForm.value)
    .then(() => {
      console.log('posted')
    })
    .catch((err) => {
      console.log('error');
    })

    jobForm.reset();
    this.router.navigate(['/main/explore'])
  }
}
