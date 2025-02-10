export interface Mesa {
  numero: number;
  estado: 'disponible' | 'en-uso';
  horaInicio: string;
  horaFin: string;
  tiempoJugado: number;
  total: number;
}