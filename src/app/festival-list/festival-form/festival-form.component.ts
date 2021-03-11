import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FestivalService } from 'src/app/festival.service';
import { Festival } from 'src/app/models/festival';

@Component({
  selector: 'app-festival-form',
  templateUrl: './festival-form.component.html',
  styleUrls: ['./festival-form.component.css']
})
export class FestivalFormComponent implements OnInit {

  festivalForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private festivalService: FestivalService,
    private router: Router) { }


  ngOnInit(): void {
  }

  initForm() {
    this.festivalForm = this.formBuilder.group({
      artiste: '',
      scene: '',
      style: '',
      date: Date,
      heure: 12,
      image: '',
    });

  }

  onSubmit(): void {
    const artiste = this.festivalForm.get('artiste').value;
    const scene = this.festivalForm.get('scene').value;
    const style = this.festivalForm.get('style').value;
    const newFestival = new Festival(artiste, scene, style);
    this.festivalService.createNewFestival(newFestival);
    this.router.navigate(['/festivals']);
    console.log('formulaire envoyé', this.festivalForm.value);
  }

}
