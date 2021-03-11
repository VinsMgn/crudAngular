import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FestivalService } from '../festival.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Festival } from '../models/festival';

@Component({
  selector: 'app-manage-festival',
  templateUrl: './manage-festival.component.html',
  styleUrls: ['./manage-festival.component.css']
})
export class ManageFestivalComponent implements OnInit, OnDestroy {

  festivals: Festival[];
  festivalSubscription: Subscription;

  constructor(
    private festivalService: FestivalService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.festivalSubscription = this.festivalService.festivalSubject.subscribe(
      (data: Festival[]) => {
        this.festivals = data;
      }
    );
    this.festivalService.emitFestival();
  }

  onNewFestival() {
    this.router.navigate(['/festivals', 'new'])
  }

  onDeleteFestival(festival: Festival) {
    this.festivalService.removeFestival(festival);
  }

  onViewFestival(id: number) {
    this.router.navigate(['/festivals', 'view', id])
  }

  ngOnDestroy(): void {
    this.festivalSubscription.unsubscribe();
  }
  

}
