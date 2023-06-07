import React, { useState } from 'react';

function UserPanel({ username, onUserDataSubmit, onViewTickets }) {
  const [name, setName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [billingData, setBillingData] = useState('');
  const [floor, setFloor] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [equipmentModel, setEquipmentModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !deliveryAddress ||
      !billingData ||
      !floor ||
      !equipmentType ||
      !equipmentModel ||
      !serialNumber ||
      !urgencyLevel ||
      !problemDescription ||
      !serviceDate ||
      !serviceTime ||
      !email ||
      !phone
    ) {
      setFormError('Todos los campos son obligatorios');
      return;
    }

    // Lógica para enviar los datos del formulario del usuario
    const formData = {
      location: {
        building: name,
        deliveryAddress,
        billingData,
        floor
      },
      equipment: {
        type: equipmentType,
        model: equipmentModel,
        serialNumber
      },
      problem: {
        urgencyLevel,
        description: problemDescription
      },
      service: {
        date: serviceDate,
        time: serviceTime,
        email,
        phone
      }
    };

    // Llama a la función onUserDataSubmit con los datos del formulario
    onUserDataSubmit(formData);

    // Reinicia los campos del formulario a sus valores iniciales
    setName('');
    setDeliveryAddress('');
    setBillingData('');
    setFloor('');
    setEquipmentType('');
    setEquipmentModel('');
    setSerialNumber('');
    setUrgencyLevel('');
    setProblemDescription('');
    setServiceDate('');
    setServiceTime('');
    setEmail('');
    setPhone('');
    setFormError('');
  };

  const handleViewTickets = () => {
    onViewTickets();
  };

  return (
    <div>
      <h3 className='max-lg:pb-16 pb-8 text-3xl text-red-800 font-bold uppercase text-center'>Complete el formulario</h3>
      <form onSubmit={handleSubmit} className="md:grid  md::grid-cols-2 md:gap-4 md:mx-24 mx-5">
        {/* Sección 1: Seleccione la ubicación del equipo */}
        <div className="border-2 sm:mx-0 pt-10 pb-10 rounded bg-slate-100 text-center px-6 mb-5">
          <h4 className="mb-10 text-2xl font-bold">Seleccione la ubicación del equipo</h4>
          <div className="mb-2 text-left">
            <label className="mb-10 text-1xl font-bold mr-4">Edificio:</label>
            <select className="w-full" value={name} onChange={(e) => setName(e.target.value)}>
              <option value="">Seleccione un edificio</option>
              <option value="Edificio 1">Edificio 1</option>
              <option value="Edificio 2">Edificio 2</option>
              <option value="Edificio 3">Edificio 3</option>
            </select>
          </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Dirección de entrega:</label>
              <input className="w-full" type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} required />
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Datos de facturación:</label>
              <input className="w-full" type="text" value={billingData} onChange={(e) => setBillingData(e.target.value)} required />
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Piso:</label>
              <select className="w-full" value={floor} onChange={(e) => setFloor(e.target.value)} required>
                <option value="">Seleccione un piso</option>
                <option value="Piso 1">Piso 1</option>
                <option value="Piso 2">Piso 2</option>
                <option value="Piso 3">Piso 3</option>
              </select>
            </div>
          </div>
  
          {/* Sección 2: Información del equipo */}
          <div className="border-2 sm:mx-0 pt-10 pb-10 rounded bg-slate-100 text-center px-6 mb-5">
            <h4 className="mb-10 text-2xl font-bold">Información del equipo</h4>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Tipo:</label>
              <select className="w-full" value={equipmentType} onChange={(e) => setEquipmentType(e.target.value)} required>
                <option value="">Seleccione un tipo</option>
                <option value="Tipo 1">Tipo 1</option>
                <option value="Tipo 2">Tipo 2</option>
                <option value="Tipo 3">Tipo 3</option>
                <option value="Tipo 4">Tipo 4</option>
              </select>
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Modelo:</label>
              <select className="w-full" value={equipmentModel} onChange={(e) => setEquipmentModel(e.target.value)} required>
                <option value="">Seleccione un modelo</option>
                <option value="Modelo 1">Modelo 1</option>
                <option value="Modelo 2">Modelo 2</option>
                <option value="Modelo 3">Modelo 3</option>
              </select>
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Número de serie:</label>
              <select className="w-full" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required>
                <option value="">Seleccione un número de serie</option>
                <option value="Serie 1">Serie 1</option>
                <option value="Serie 2">Serie 2</option>
                <option value="Serie 3">Serie 3</option>
              </select>
            </div>
          </div>
  
          {/* Sección 3: Descripción del problema */}
          <div className="border-2 sm:mx-0 pt-10 pb-10 rounded bg-slate-100 text-center px-6 mb-5">
            <h4 className="mb-10 text-2xl font-bold">Descripción del problema</h4>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Nivel de Urgencia:</label>
              <select className="w-full" value={urgencyLevel} onChange={(e) => setUrgencyLevel(e.target.value)} required>
                <option value="">Seleccione un nivel de urgencia</option>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Descripción:</label>
              <textarea className="w-full h-40 mt-2" value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} required />
            </div>
          </div>
  
          {/* Sección 4: Datos para realizar el servicio */}
          <div className="border-2 sm:mx-0 pt-10 pb-10 rounded bg-slate-100 text-center px-6 mb-5">
            <h4 className="mb-10 text-2xl font-bold">Datos para realizar el servicio</h4>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Fecha:</label>
              <input className="w-full" type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} required />
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Horario para la visita:</label>
              <input className="w-full" type="time" value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} min="08:00" max="18:00" required />
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Correo:</label>
              <input className="w-full" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-2 text-left">
              <label className="mb-10 text-1xl font-bold mr-4">Teléfono:</label>
              <input className="w-full" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
  
          {formError && <p>{formError}</p>}
          
          <div className="col-span-2 flex justify-center mt-8">
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
              Enviar
            </button>
          </div>
          <div className="col-span-2 flex justify-center mt-8">
            <button
              type="button"
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
              onClick={handleViewTickets}
            >
              Ver Tickets
            </button>
            
          </div>
        
        </form>
        
  
      </div>
    );
  }
export default UserPanel;
