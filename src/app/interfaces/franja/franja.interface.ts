export interface Coordenada {
  lat: number;
  lng: number;
}

export interface Franja {
  id: number;
  codigo: string;
  nombre: string;
  coordenadas: Coordenada[];
}
