import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Treino } from './treino';



@Injectable({
  providedIn: 'root'
})
export class TreinoApiService {

  baseApi = "http://localhost:3000/treino"

  constructor(private http: HttpClient) { }


  listar(): Observable<Treino[]> {
      return (this.http.get<Treino[]>(this.baseApi))
  }
}

  /*inserir(){}

  buscarPorId(id:number): Observable<Produto> {

    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;

    return this.http.get<Produto>(uri);  

  }





  deletar(id: number){

    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;

    return this.http.delete(uri);

  --> segunda parte   buscarPorId(id:number): Observable<Produto> {

    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;

    return this.http.get<Produto>(uri);  

  }



  editar(id: number, produto: Produto): Observable<Produto> {

    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;

    return this.http.put<Produto>(uri, produto, httpOptions);    

  }



  deletar(id: number){

    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;

    return this.http.delete(uri);

  }

19:20
tabela-produtos.component:

deletar(id: number){

    this.servico.deletar(id).subscribe(res => {

      this.listar();

      console.log(res);

    });

  }

19:21
form-produtos.component:

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.mensagem = "";

    console.log("ID", this.id);

    if(this.id) {

      this.botaoAcao= "Editar";      

      //this.produto = Object.assign({}, 

      //  this.produtoApiService.buscarPorId(this.id));

      this.produtoApiService.buscarPorId(this.id).subscribe(prod => {

        this.produto = prod;  

        console.log(this.produto);   

      })

    }

  }



  private estaInserindo() {

    return !this.id;

  }



  salvar() {

    if(this.estaInserindo()) {

      this.produtoApiService.inserir(this.produto).subscribe(produto => {

        console.log("Produto Cadastrado", produto);

        this.mensagem = this.produto.nome + " cadastrado com sucesso!";

        this.produto = new Produto();

      });



    }

    else {

      this.produtoApiService.editar(this.id, this.produto).subscribe(prod => {

        this.mensagem = `${prod.nome} editado com sucesso!`; 

        this.produto = prod;

      })



    }

  }}*/ 
