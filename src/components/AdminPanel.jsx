import React, { useState, useEffect } from 'react';

function AdminPanel({ username, userData, onUpdateTicket }) {
  const [ticketStatus, setTicketStatus] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Inicializar ticketStatus con el estado inicial basado en userData
    const storedStatus = localStorage.getItem('ticketStatus');
    if (storedStatus) {
      setTicketStatus(JSON.parse(storedStatus));
    } else {
      const initialStatus = userData.map(() => '');
      setTicketStatus(initialStatus);
    }
  }, [userData]);

  const handleTicketUpdate = (index, newStatus) => {
    onUpdateTicket(index, newStatus);
    setTicketStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = newStatus;
      localStorage.setItem('ticketStatus', JSON.stringify(updatedStatus));
      return updatedStatus;
    });
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTickets = () => {
    if (filter === 'concluidos') {
      return userData.filter((_, index) => ticketStatus[index] === 'Concluido');
    } else if (filter === 'enproceso') {
      return userData.filter((_, index) => ticketStatus[index] !== 'Concluido');
    } else {
      return userData;
    }
  };

  return (
    <div className='border-2 max-lg:mx-0 mx-40 pt-10 pb-10 rounded bg-slate-100 text-center'>
      <h2 className='max-lg:pb-16 pb-8 text-3xl text-red-800 font-bold uppercase text-center'>Bienvenido, {username} (Administrador)!</h2>
      <div className='mb-10'>
        <button className='bg-green-500 p-2 rounded mx-2 text-white hover:bg-green-700' onClick={() => handleFilter('concluidos')}>Concluidos</button>
        <button className='bg-yellow-500 hover:bg-yellow-600 p-2 rounded mx-2 text-white' onClick={() => handleFilter('enproceso')}>En proceso</button>
        <button className='bg-blue-500 hover:bg-blue-700 mt-10 p-2 rounded mx-2 text-white' onClick={() => handleFilter('all')}>Mostrar todos</button>
      </div>
      {filteredTickets().map((formData, index) => (
        <div key={index}>
          <div className={`border-2 max-lg:mx-0 mx-52 pt-10 pb-10 rounded text-left px-10 bg-slate-100`}>
          <p className="mb-2">
                <span className="font-bold">Estado:</span> {formData.status}
              </p>
              
              <p className="mb-2">
                <span className="font-bold">Fecha de creación:</span> {formData.creationDate}
              </p>
            <p className="mb-2"> <span className="font-bold">Edificio: </span>{formData.location.building}</p>
            <p className="mb-2"> <span className="font-bold">Dirección de entrega: </span>{formData.location.deliveryAddress}</p>
            <p className="mb-2"> <span className="font-bold">Datos de facturación: </span>{formData.location.billingData}</p>
            <p className="mb-2"> <span className="font-bold">Piso: </span>{formData.location.floor}</p>
            <p className="mb-2"> <span className="font-bold">Tipo de equipo: </span>{formData.equipment.type}</p>
            <p className="mb-2"> <span className="font-bold">Modelo de equipo: </span>{formData.equipment.model}</p>
            <p className="mb-2"> <span className="font-bold">Número de serie: </span>{formData.equipment.serialNumber}</p>
            <p className="mb-2"> <span className="font-bold">Nivel de urgencia: </span>{formData.problem.urgencyLevel}</p>
            <p className="mb-2"> <span className="font-bold">Descripción del problema: </span>{formData.problem.description}</p>
            <p className="mb-2"> <span className="font-bold">Fecha de servicio: </span>{formData.service.date}</p>
            <p className="mb-2"> <span className="font-bold">Hora de servicio: </span>{formData.service.time}</p>
            <p className="mb-2"> <span className="font-bold">Email: </span>{formData.service.email}</p>
            <p className="mb-2"> <span className="font-bold">Teléfono: </span>{formData.service.phone}</p>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
