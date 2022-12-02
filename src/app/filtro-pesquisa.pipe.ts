import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?: string): Produto[] {
    const nome = valor ?valor :"";
    console.log(nome);
    return listaProdutos.filter(
      (produto) => 
        produto.nome.toLocaleLowerCase().includes(nome.toLowerCase())
    );
    }
}
