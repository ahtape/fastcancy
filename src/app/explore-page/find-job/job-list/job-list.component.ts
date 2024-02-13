import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  availableJobs!: Observable<any>;

  constructor(private firestore: Firestore) {
    this.getJob();
  }

  getJob() {
    const collectionInstance = collection(this.firestore, 'job-list');

    this.availableJobs = collectionData(collectionInstance)
  }
}
