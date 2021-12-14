import { Component, OnInit } from '@angular/core';
import { Evenement } from '../evenement';
import { EvenementsService } from '../evenements.service';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tableau-evenement',
  templateUrl: './tableau-evenement.component.html',
  styleUrls: ['./tableau-evenement.component.css']
})
export class TableauEvenementComponent implements OnInit {
  evenements: Evenement[] = [];
  ajoutPanier: Evenement[] = [];
  displayedColumns1: string[] = ['sport', 'amphitheatre', 'date', 'section', 'ranger', 'siege' , 'prix', 'rabais', 'actions'];
  displayedColumns2: string[] = ['sport', 'amphitheatre', 'date', 'section', 'ranger', 'siege' , 'prix', 'rabais'];
  selectedEvent?: Evenement;
  dataSource = new MatTableDataSource(this.evenements);
  connection : Boolean = false;

  constructor(private evenementService: EvenementsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.evenementService.getEvents()
        .subscribe(resultat => this.evenements = resultat);
  }

  onSelect(evenement: Evenement): void {
    this.selectedEvent = evenement; 
  }

  onEdit(heroFormEdition: NgForm): void {
    if (heroFormEdition.valid && this.selectedEvent) {
      this.evenementService.updateEvent(this.selectedEvent)
          .subscribe(() => this.selectedEvent = undefined);
    }
   }

  onDelete(produit: Evenement): void {
    if(produit._id) 
    {
	  this.evenementService.deleteEvent(produit._id)
        .subscribe(result => this.evenements = this.evenements.filter(h => h !== produit)); 
    }
   }
}
