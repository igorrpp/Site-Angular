import { Component, OnInit } from '@angular/core';
import { listaCliente } from 'src/environments/dados-cliente';
import { Cliente } from 'src/model/cliente';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-cliente-visualizar',
  templateUrl: './cliente-visualizar.component.html',
  styleUrls: ['./cliente-visualizar.component.css']
})
export class ClienteVisualizarComponent implements OnInit {
  lista : Cliente[] = listaCliente;
  cliente : Cliente;
  
  //Variaveis em rotas ActivateRoute, Router
  constructor(private actRoute : ActivatedRoute,
    private router : Route) {

      this.actRoute.paramMap.subscribe(response=>{ // Recuperar algum elemento da URL
      
       // console.log(response.get('id')); recuperar o valor de id
       // um array possui o metodo find()

       this.cliente = 
       this.lista.find(function(cliente){
         return cliente.id === response.get('id');
       });
      });

       // console.log(this.cliente);

     }

  ngOnInit(): void {
  }

}
