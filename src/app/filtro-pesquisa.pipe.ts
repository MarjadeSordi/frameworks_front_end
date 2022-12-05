import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Treino } from './treino';

@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaTreino: Treino[], valor?: string): Treino[] {
    const nome = valor ?valor :"";
    console.log(nome);
    return listaTreino.filter(
      (item) => 
        item.tipo.toLocaleLowerCase().includes(nome.toLowerCase())
    );
    }
}
