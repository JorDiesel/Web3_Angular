import { Pipe, PipeTransform } from '@angular/core';
import { Evenement } from './evenement';

@Pipe({
  name: 'nondispo'
})
export class NondispoPipe implements PipeTransform {

  transform(evenements: Evenement[]): Evenement[] {
    return evenements.filter(evenements => evenements.guichetFermer == true)
  }

}
