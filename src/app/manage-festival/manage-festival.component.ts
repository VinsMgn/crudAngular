import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GraphqlService as festivalService } from '../festival.service';

@Component({
  selector: 'app-manage-festival',
  templateUrl: './manage-festival.component.html',
  styleUrls: ['./manage-festival.component.css']
})
export class ManageFestivalComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private festivalService: festivalService) {

  }

  checkoutForm = this.formBuilder.group({
    artiste: '',
    scene: '',
    style: '',
    date: Date,
    heure: 12,
    image: '',
  });

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    console.log('formulaire envoyé', this.checkoutForm.value);
  }
}
