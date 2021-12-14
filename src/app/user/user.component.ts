import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../evenements.service';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { Evenement } from '../evenement';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  evenements: Evenement[] = [];
  submitUser : Users = {username: "", password: ""}
  user: String = ""; 

  constructor(private evenementService: EvenementsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.evenementService.getEvents()
        .subscribe(resultat => this.evenements = resultat);
  }

  validateUser(eventFormUser: NgForm): void {
    if(eventFormUser.valid) {
    this.evenementService.validateUser(this.submitUser)
        .subscribe(resultat => {this.user = resultat; eventFormUser.resetForm();});
    }
    console.log(this.user);
  }
}
