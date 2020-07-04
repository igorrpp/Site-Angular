import { Component, OnInit } from '@angular/core';
import {listaCliente} from 'src/environments/dados-cliente';
import{ Cliente} from 'src/model/cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

// variáveis
clientes : Cliente[] = listaCliente;

// construtor
  constructor() { 

  }

// métodos

  ngOnInit(): void {
  }

}
