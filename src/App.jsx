import React, { useState } from 'react';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';
import SupportPanel from './components/SupportPanel';
import TicketsUser from './components/TicktesUser';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState([]);
  const [showTickets, setShowTickets] = useState(false); // Variable de estado para controlar la visibilidad de TicketsUser

  const handleLogin = (type, name) => {
    setUserType(type);
    setUsername(name);
    setLoggedIn(true);
    setError('');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserType('');
    setUsername('');
    setError('');
  };

  const handleUserDataSubmit = (data) => {
    const updatedData = {
      ...data,
      status: 'En proceso',
      id: userData.length + 1, // Generar un ID único para el ticket
      description: '', // Agregar la descripción del ticket aquí
      creationDate: new Date().toLocaleString() // Agregar la fecha de creación del ticket aquí
    };
    setUserData([...userData, updatedData]);
  };

  const handleUpdateTicket = (index, newStatus) => {
    setUserData((prevUserData) => {
      const updatedUserData = [...prevUserData];
      updatedUserData[index] = { ...updatedUserData[index], status: newStatus };
      return updatedUserData;
    });
  };

  const handleViewTickets = () => {
    setShowTickets(true); // Mostrar TicketsUser cuando se hace clic en "Ver Tickets"
  };

  const handleHideTickets = () => {
    setShowTickets(false); // Ocultar TicketsUser cuando se hace clic en "Ocultar Tickets"
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <div className="flex justify-end my-10">
            <button onClick={handleLogout} className="bg-red-800 p-2 rounded mr-16 text-white">
              Cerrar sesión
            </button>
          </div>
          {userType === 'admin' && Array.isArray(userData) && (
            <AdminPanel username={username} userData={userData} onUpdateTicket={handleUpdateTicket} />
          )}
          {userType === 'usuario' && (
            <>
              <UserPanel
                username={username}
                onUserDataSubmit={handleUserDataSubmit}
                onViewTickets={handleViewTickets} // Pasar la función handleViewTickets al componente UserPanel
              />
              {showTickets ? (
                <TicketsUser
                  username={username}
                  userData={userData}
                  onUpdateTicket={handleUpdateTicket}
                  onHideTickets={handleHideTickets} // Pasar la función handleHideTickets al componente TicketsUser
                />
              ) : null}
            </>
          )}
          {userType === 'soporte' && Array.isArray(userData) && (
            <SupportPanel username={username} userData={userData} onUpdateTicket={handleUpdateTicket} />
          )}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
