import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { Router } from '@angular/router';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  pestanaSeleccionada: String = "uno";

  constructor(private router: Router, private service: ClientService){
    
  }

  ngOnInit() {

  }

  cambiarPestana(value: String) {

    this.pestanaSeleccionada = value;
  }
}
