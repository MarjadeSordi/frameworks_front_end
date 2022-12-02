import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  id!: number;
  mensagem = ""; 
  produto = new Produto();
  botaoAcao = "Cadastrar"

  constructor(private produtoService: ProdutoService, 
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.mensagem = "";
    if(this.id) {      
      this.botaoAcao = "Editar";
      this.produto = Object.assign({}, this.produtoService.buscarPorId(this.id));
    }
  }

 salvar() {
  if(!this.id){
    this.produtoService.inserir(this.produto);
    this.mensagem = `Produto ${this.produto.nome} inserido com sucesso`
    this.produto = new Produto();
  }
  else {
    this.produtoService.editar(this.id, this.produto);
    this.mensagem = `Produto ${this.produto.nome} editado com sucesso`
  }
  }
  


  cancelar(){
    this.router.navigate(['/tabela']);
  }



}
