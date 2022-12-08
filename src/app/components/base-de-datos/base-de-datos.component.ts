import { Component, Input, OnInit } from '@angular/core';

import { ObtenerInfoService } from 'src/app/services/obtener-info.service';


@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnInit {
  
  
  listarInfo: any =[]

  constructor(
    private obtenerInfoService:ObtenerInfoService
  ) { this.listarInfo = new Array<any>() }

  ngOnInit(): void { 

    this.obtenerInfoService.getInfo().subscribe(
      (publishListBD) => {
        
        const { main, name } = publishListBD

        const objNew = {name, main}

        this.listarInfo=objNew

        console.log(this.listarInfo)

      }
    )

   }
}
