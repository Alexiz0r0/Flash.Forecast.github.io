import { Component, OnInit} from '@angular/core'

import { ObtenerInfoService } from 'src/app/services/obtener-info.service'

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  /*Getting and Sending the ID of City*/

  mensaje:string=""
  
  
  showTableFromSurvey:boolean = false
  

  onSelected(cityid:string): void {
    this.mensaje=cityid
    console.log(this.mensaje)
     
	}

  constructor(
    private obtenerInfoService:ObtenerInfoService,

  ) {  }

  ngOnInit(): void {
    console.log(this.obtenerInfoService.checkConection())
    
  }

  successMsg(){
    /* Getting and Sending */
    this.obtenerInfoService.sendSuccessMsg(this.mensaje)
    console.log('enviado')
    
  }
}