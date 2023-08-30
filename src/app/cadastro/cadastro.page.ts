import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public materia:string = '';
  public descricao:string = '';
  public datahora:string = '';

  constructor() { }

  ngOnInit() {
  }
  
  salvar() {
    alert('A matéria digitada foi ' + this.materia);
  }

}
