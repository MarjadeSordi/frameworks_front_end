import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Treino } from '../treino';
import { Categoria } from '../categoria';
import { TreinoApiService } from '../treino-api.service';

@Component({
  selector: 'app-mostra-meus-treinos',
  templateUrl: './mostra-meus-treinos.component.html',
  styleUrls: ['./mostra-meus-treinos.component.css']
})

export class MostraMeusTreinosComponent implements OnInit {
  titulo = "Cadastre e edite seus treinos aqui:";
  listaTreino: Treino[] = []
  nomePesquisado = "";


  constructor(private service: TreinoApiService, private servico: CategoriaService) { 
    this.listar()

    
  }

  ngOnInit(): void {
  }

  listar() {
    this.service.listar().subscribe(
      (data: any) => {
        this.listaTreino =(data); 
        this.listaTreino.forEach((item) => {
        this.servico.buscarPorId(item.categoria).subscribe((nome: any) => { return item.nomeCategoria = nome }) 
        
        });
        console.error(this.listaTreino);
      }
    )

  }

  deletar(id: number){
    this.service.deletar(id).subscribe(res => {
      this.listar();
      console.log(res);
    });
  }
}


 


