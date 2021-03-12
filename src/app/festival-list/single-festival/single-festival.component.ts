import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalService } from 'src/app/festival.service';
import { Festival } from 'src/app/models/festival';


@Component({
  selector: 'app-single-festival',
  templateUrl: './single-festival.component.html',
  styleUrls: ['./single-festival.component.css']
})
export class SingleFestivalComponent implements OnInit {

  festival: Festival;

  constructor(private route: ActivatedRoute, private festivalService: FestivalService, private router: Router ) { }

  ngOnInit(): void { 
    console.log('INIT SINGLE');
    this.festival = new Festival();
    const id = this.route.snapshot.params['id'];
    this.festivalService.getOneFestival(+id).then(
      (data: Festival) => {
        this.festival = data;
      }
    )
  }

  onBack() {
    this.router.navigate(['/festivals']);
  }

}
