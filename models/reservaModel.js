export class Reserva {
    constructor(id_reserva, fecha_reserva, hora_inicio, hora_fin, estado_reserva, motivo_reserva, id_usuario, id_espacio) {
      this.id_reserva = id_reserva;
      this.fecha_reserva = fecha_reserva;
      this.hora_inicio = hora_inicio;
      this.hora_fin = hora_fin;
      this.estado_reserva = estado_reserva;
      this.motivo_reserva = motivo_reserva;
      this.id_usuario = id_usuario;
      this.id_espacio = id_espacio;
    }
  }
  
  export default Reserva;
  