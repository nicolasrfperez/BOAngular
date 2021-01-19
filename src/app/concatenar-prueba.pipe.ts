import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarPrueba'
})
export class ConcatenarPruebaPipe implements PipeTransform {

  transform(value: string): unknown {
    return value+" Prueba";
  }

}
