class Notificacion {
    constructor(id_notificacion, asunto, cuerpo, fecha_envio, id_usuario, id_reserva, id_espacio) {
      this.id_notificacion = id_notificacion;
      this.asunto = asunto;
      this.cuerpo = cuerpo;
      this.fecha_envio = fecha_envio;
      this.id_usuario = id_usuario;
      this.id_reserva = id_reserva;
      this.id_espacio = id_espacio;
    }
  }
  
  export default Notificacion;
  