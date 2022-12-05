import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import { Treino } from '../treino';
import { TreinoApiService } from '../treino-api.service';

@Component({
  selector: 'app-form-para-treino',
  templateUrl: './form-para-treino.component.html',
  styleUrls: ['./form-para-treino.component.css']
})
export class FormParaTreinoComponent implements OnInit {
  id!: number;
  mensagem = ""; 
  treino = new Treino();
  botaoAcao = "Cadastrar"
  listaCategoria: Categoria[] = []


  constructor(private service: TreinoApiService, private servico: CategoriaService, 
    private router: Router,
    private route: ActivatedRoute) { 
      this.listar()
    }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {      
      this.botaoAcao = "Editar";
      this.service.buscarPorId(this.id).subscribe(data => {
        this.treino = data;
     
        });
    }
  }

  dateTime(date: Date) {    
    let data = new Date(date);
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 
    return new Date(dataFormatada)
  }

  listar() {
    this.servico.listar().subscribe(
      (data: any) => {
        this.listaCategoria=(data);       
        });    
  }


  salvar() {
    if(!this.id){
      this.service.inserir(this.treino).subscribe(data => { 
      this.mensagem = `Treino de ${this.treino.tipo} cadastrado com sucesso`
      this.treino = new Treino();
      });
 }
 
    else {
      this.service.editar(this.id, this.treino).subscribe(data =>  {
        this.mensagem = `Seu treino de ${this.treino.tipo} foi editado com sucesso`
        this.treino = data});     
    }
}
    
  
  
    cancelar(){
      this.router.navigate(['/tabela']);
    }
  

}
