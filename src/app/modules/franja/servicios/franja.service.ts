import { inject, Injectable } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class FranjaService {
  private _httpService = inject(HttpService);

  lista(parametros: any) {
    return this._httpService.post<any>(`general/funcionalidad/lista/`, parametros);
  }

  listaAutocompletar(modelo: string) {
    return this._httpService.post<{ cantidad_registros: number; registros: any[] }>(
      'general/funcionalidad/autocompletar/',
      {
        filtros: [
          {
            id: '1692284537644-1688',
            operador: '__icontains',
            propiedad: 'nombre__icontains',
            valor1: ``,
            valor2: '',
          },
        ],
        limite: 0,
        desplazar: 0,
        ordenamientos: [],
        limite_conteo: 10000,
        modelo,
      }
    );
  }

  listaCiudades(arrFiltros: any) {
    return this._httpService.post<any[]>(
      'general/funcionalidad/autocompletar/',
      arrFiltros
    );
  }

  guardarFranja(data: any) {
    return this._httpService.post<any[]>(`ruteo/franja/`, data);
  }

  actualizarDatosVehiculo(id: number, data: any) {
    return this._httpService.put<any>(`ruteo/franja/${id}/`, data);
  }

  actualizarFranja(id: number, data: any) {
    return this._httpService.put<any>(`ruteo/franja/${id}/`, data);
  }

  eliminarFranja(id: number) {
    return this._httpService.delete(`ruteo/franja/${id}/`, {});
  }

  consultarDetalle(id: number) {
    return this._httpService.getDetalle<any>(`ruteo/franja/${id}/`);
  }

  consultarFranjas() {
    return this._httpService.getDetalle<any>(`ruteo/franja/`);
  }

  importarArchivoKML(archivoEnBase64: string) {
    return this._httpService.post('ruteo/franja/importar/', {
      base64: archivoEnBase64,
    });
  }
}