import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public materia:string = '';
  public descricao:string = '';
  public datahora:string = new Date().getDate().toString();

  constructor(
    public localstorage_service:LocalStorageService
  ) { }

  ngOnInit() {
    // 2021-05-20T21:46:00
    console.log(new Date().);
  }
  
  salvar() { 
    let compromisso = {
      materia:this.materia,
      descricao:this.descricao,
      datahora:this.datahora
    };
    this.localstorage_service.post('compromisso',compromisso);
    alert('Salvo com sucesso!');
  } 
}
