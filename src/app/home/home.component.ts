import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [ trigger('animAjoutItem' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.6s ease-in' , keyframes ([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
    style({opacity: 1, transform: 'translateY(0)', offset: 1}), ]))]),{optional: true})
    ]) 
  ])]

})
export class HomeComponent implements OnInit {

  nbItems : number = 0
  btnText : string = "Ajouter un lien"
  objectifText : string = ""
  

  constructor(private monRouteur: ActivatedRoute,public router: Router,public activiteService : ActiviteService) { }

  ngOnInit(): void {
  }

  ajoutItem() {
    this.activiteService.objectifs.push(this.objectifText)
    this.nbItems++
    //setTimeout(()=> {this.router.navigateByUrl('about')}, 1000 )
  }

  goToconsultAct(id : number) {
    this.router.navigateByUrl('/consultAct/' + id)

  }

}
