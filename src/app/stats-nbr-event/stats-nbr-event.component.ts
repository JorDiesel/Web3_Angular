import { Component, OnInit } from '@angular/core';
import { StatsTotal } from '../stats-total';
import { Statsmoyenne } from '../statsmoyenne';
import { EvenementsService } from '../evenements.service';


@Component({
  selector: 'app-stats-nbr-event',
  templateUrl: './stats-nbr-event.component.html',
  styleUrls: ['./stats-nbr-event.component.css']
})
export class StatsNbrEventComponent implements OnInit {
  statistique: Statsmoyenne[] = []

  constructor(private evenementService: EvenementsService) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(): void {
    this.evenementService.getStats2()
        .subscribe(resultat => this.statistique = resultat);
  }

}
