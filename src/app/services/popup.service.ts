import { Injectable } from '@angular/core';
import {DatosService} from './datos.service';
import { HttpClient } from '@angular/common/http';
import {Dato} from '../models/dato.model';
@Injectable({
  providedIn: 'root'
})
export class PopupService {
  databolivia: Dato[]=[];
  ndatac: Dato[]=[];
  ndatar: number[]=[];
  ndatam: number[]=[];
  constructor(private http: HttpClient, private servicedata: DatosService) { }


  makeCapitalPopup(data: any,data2: any): string {

    return `` +
      `<div >Capital: ${ data.name }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>contagios:${data.contagios} </div>
         <div>Muertes:${data.Muertes} </div>
        <div>recuperados:${data.recuperados} </div>`;
       }
}
