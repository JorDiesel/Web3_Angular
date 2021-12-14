import { Pipe, PipeTransform } from '@angular/core';
import { Evenement } from './evenement';


@Pipe({
  name: 'guichetFermer'
})
export class GuichetFermerPipe implements PipeTransform {

  transform(evenements: Evenement[]): Evenement[] {
    return evenements.filter(evenements => evenements.guichetFermer == false)
  }

}
