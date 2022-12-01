import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  nbElements : number = 0

  constructor(private route: ActivatedRoute) {
    //this.nbElements = route.snapshot.queryParams['n']
    this.nbElements = route.snapshot.params['n']
   }

  ngOnInit(): void {
  }

}
