import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.scss'
})
export class BucketComponent {
  store = inject(Store<{bucket: Bucket[]}>);
  myBucket$?:Observable<Bucket[]> = this.store.select("bucket"); 

}
