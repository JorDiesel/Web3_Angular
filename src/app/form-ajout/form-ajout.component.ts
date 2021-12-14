import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Evenement } from '../evenement';
import { EvenementsService } from '../evenements.service';



@Component({
  selector: 'app-form-ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutComponent implements OnInit {
  nouvelEvenement: Evenement = {nom:'', prenom:'', sport:'', amphitheatre: {ville: "", pays:""}, date: "", positionement: {section: "", ranger: 0, siege: 0}, nombrePlace: 0, guichetFermer: false, prix: 0, rabais:0, vedette: false, joueurEtoile: [{nom : "", prenom : "", age: 0}], tags: ""}
  evenements: Evenement[] = [];
  
  constructor(private evenementService : EvenementsService) { }

  ngOnInit(): void {
  }

  onAdd(produitFormAjout: NgForm){
    if(produitFormAjout.valid) {
      this.evenementService.addEvent(this.nouvelEvenement)
        .subscribe(produit => {this.evenements.push(produit); produitFormAjout.resetForm();})
    }
  }

}
