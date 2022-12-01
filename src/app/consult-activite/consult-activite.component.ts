import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  

  id1 ?: number
  id2 ?: string
  isEdit : boolean = false
  form: string = "";
  constructor(private route : ActivatedRoute,public activiteService : ActiviteService, public router: Router) { 
    this.id1 = route.snapshot.params['id1']
    this.id2 = route.snapshot.params['id2']
  }

  ngOnInit(): void {
  }

  removeElem(id : number) {
    this.activiteService.objectifs.splice(id,1)
    this.router.navigateByUrl('/')
  }

  goToHome() {
    this.router.navigateByUrl('/')
  }

  setEdit() {
    this.isEdit = true
  }

  save(id : number) {
    this.activiteService.objectifs[id] = this.form
    this.isEdit = false
  }

}
