import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Treino } from '../treino';
import { TreinoApiService } from '../treino-api.service';

@Component({
  selector: 'app-mostra-meus-treinos',
  templateUrl: './mostra-meus-treinos.component.html',
  styleUrls: ['./mostra-meus-treinos.component.css']
})

export class MostraMeusTreinosComponent implements OnInit {
  titulo = "Treinos";
  listaTreino: Treino[] = []


  constructor(private service: TreinoApiService) { 
    this.listar()

    
  }

  listar() {
    this.service.listar().subscribe(
      (data: any) => {
        this.listaTreino =(data); 
        console.error(this.listaTreino);
      }
    )

  }


  ngOnInit(): void {
  }

}
