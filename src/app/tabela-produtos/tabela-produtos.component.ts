import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Treino } from '../treino';
import { TreinoApiService } from '../treino-api.service';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})

export class TabelaProdutosComponent implements OnInit {
  titulo = "Treinos";
  nomePesquisado = ""; 

  
  lista: Treino[] = []
  
  constructor(private servico: TreinoApiService) {
    this.listar()
  }

  listar() {
    this.servico.listar().subscribe(
      (data) => {
        this.lista = data; 
        console.error(this.lista)
      }
    )

  }

  ngOnInit(): void {
  }



}
