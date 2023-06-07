import React from 'react';

function SupportPanel({ username, userData, onUpdateTicket }) {
  const handleTicketUpdate = (ticketId) => {
    // Encuentra el ticket con el ID especificado en la matriz de datos userData
    const updatedTicket = userData.find((ticket) => ticket.id === ticketId);

    if (updatedTicket) {
      // Actualiza el estado del ticket o realiza cualquier otra operación necesaria
      updatedTicket.status = 'Completado';

      // Invoca la función onUpdateTicket para informar al componente padre sobre la actualización del ticket
      onUpdateTicket(updatedTicket);
    }
  };

  return (
    <div>
      <h3 className="max-lg:pb-16 pb-8 text-3xl text-red-800 font-bold uppercase text-center mt-10">
        Tickets del usuario: {username}
      </h3>
      {userData && userData.length > 0 ? (
        <div className="flex flex-col items-center">
          {userData.map((ticket, index) => (
            <div key={ticket.id || index} className="border-2 sm:mx-0 w-96 mt-6 rounded bg-slate-100 text-center p-6">
              <h4 className="mb-4 text-2xl font-bold">Ticket ID: {ticket.id}</h4>
              <p className="mb-2">
                <span className="font-bold">Estado:</span> {ticket.status}
              </p>
              
              <p className="mb-2">
                <span className="font-bold">Fecha de creación:</span> {ticket.creationDate}
              </p>

              <p><span className="font-bold">Edificio: </span> {ticket.location.building}</p>
              <p><span className="font-bold">Dirección de entrega: </span> {ticket.location.deliveryAddress}</p>
              <p><span className="font-bold">Datos de facturación: </span> {ticket.location.billingData}</p>
              <p><span className="font-bold">Piso: </span> {ticket.location.floor}</p>
              <p><span className="font-bold">Tipo de equipo: </span> {ticket.equipment.type}</p>
              <p><span className="font-bold">Modelo de equipo: </span> {ticket.equipment.model}</p>
              <p><span className="font-bold">Número de serie: </span> {ticket.equipment.serialNumber}</p>
              <p><span className="font-bold">Nivel de urgencia: </span> {ticket.problem.urgencyLevel}</p>
              <p><span className="font-bold">Descripción del problema: </span> {ticket.problem.description}</p>
              <p><span className="font-bold">Fecha de servicio: </span> {ticket.service.date}</p>
              <p><span className="font-bold">Hora de servicio: </span> {ticket.service.time}</p>
              <p><span className="font-bold">Email: </span> {ticket.service.email}</p>
              <p><span className="font-bold">Teléfono: </span> {ticket.service.phone}</p>

              {ticket.status !== 'Completado' && (
                <button
                  onClick={() => handleTicketUpdate(ticket.id)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Actualizar ticket
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className='text-white font-bold mb-10 rounded text-center'>No hay tickets disponibles</p>
      )}
    </div>
  );
}

export default SupportPanel;
