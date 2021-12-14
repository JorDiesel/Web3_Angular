import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './entete/entete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { TableauEvenementComponent } from './tableau-evenement/tableau-evenement.component';
import { StatsPrixMoyenComponent } from './stats-prix-moyen/stats-prix-moyen.component';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { GuichetFermerPipe } from './guichet-fermer.pipe';
import { StatsNbrEventComponent } from './stats-nbr-event/stats-nbr-event.component';
import { UserComponent } from './user/user.component';
import { NondispoPipe } from './nondispo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedDePageComponent,
    TableauEvenementComponent,
    StatsPrixMoyenComponent,
    FormAjoutComponent,
    GuichetFermerPipe,
    StatsNbrEventComponent,
    UserComponent,
    NondispoPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
