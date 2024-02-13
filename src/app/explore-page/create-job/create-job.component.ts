import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent {
  availableJobs!: Observable<any>;

  constructor(private firestore: Firestore) {
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
  }
}
