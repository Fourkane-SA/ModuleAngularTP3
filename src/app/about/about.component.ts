import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  nbElements : number = 0

  constructor(public activiteService : ActiviteService) {
   }

  ngOnInit(): void {
  }

}
