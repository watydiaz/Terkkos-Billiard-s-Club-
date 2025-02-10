import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Mesa } from '../interfaces/mesa.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab1Page {
  mesas: Mesa[] = [];
  precioMinuto: number = 116; // Precio por minuto en pesos

  constructor() {
    this.inicializarMesas();
  }

  private inicializarMesas() {
    for (let i = 1; i <= 4; i++) {
      this.mesas.push({
        numero: i,
        estado: 'disponible',
        horaInicio: '--:--',
        horaFin: '--:--',
        tiempoJugado: 0,
        total: 0
      });
    }
  }

  iniciarJuego(mesa: Mesa) {
    mesa.estado = 'en-uso';
    mesa.horaInicio = new Date().toLocaleTimeString();
    mesa.horaFin = '--:--';
    mesa.tiempoJugado = 0;
    mesa.total = 0;
  }

  finalizarJuego(mesa: Mesa) {
      mesa.estado = 'disponible';
      mesa.horaFin = new Date().toLocaleTimeString();
      
      // Obtener las horas y minutos de inicio
      const [horaInicio, minInicio] = mesa.horaInicio.split(':').map(Number);
      
      // Obtener hora actual para el fin
      const ahora = new Date();
      const horaFin = ahora.getHours();
      const minFin = ahora.getMinutes();
      
      // Calcular diferencia en minutos
      const minutosTranscurridos = (horaFin * 60 + minFin) - (horaInicio * 60 + minInicio);
      
      // Actualizar valores
      mesa.tiempoJugado = minutosTranscurridos;
      mesa.total = minutosTranscurridos * this.precioMinuto;
      
      console.log('Minutos jugados:', minutosTranscurridos);
      console.log('Precio por minuto:', this.precioMinuto);
      console.log('Total a pagar:', mesa.total);
  }
}