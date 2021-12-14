import { Component, OnInit } from '@angular/core';
import { Statsmoyenne } from '../statsmoyenne';
import { StatsTotal } from '../stats-total';
import { EvenementsService } from '../evenements.service';

@Component({
  selector: 'app-stats-prix-moyen',
  templateUrl: './stats-prix-moyen.component.html',
  styleUrls: ['./stats-prix-moyen.component.css']
})
export class StatsPrixMoyenComponent implements OnInit {
  statistiques: StatsTotal[] = []

  constructor(private evenementService: EvenementsService) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(): void {
    this.evenementService.getStast1()
        .subscribe(resultat => this.statistiques = resultat);
  }

}
