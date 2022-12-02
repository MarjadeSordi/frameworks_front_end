import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  titulo = "Bem vindos! Para acessar seus treinos, faça login";
  botaoLogar = 'Fazer Login'
  usuario = '';
  senha = '';
  mensagem = '';
  auth = false; 


  constructor(private service: LoginService ,
    private router: Router,
    private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    

  }

logar(){
  this.service.logar(this.usuario, this.senha).subscribe(resp => {
    if(resp.auth === true){
      this.router.navigate(['/tabela']);
    }
    else this.mensagem = 'Usuário ou senha incorretos'
  })
  
}

}
