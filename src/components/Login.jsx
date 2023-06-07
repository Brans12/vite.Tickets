import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Verifica si el usuario y la contraseña son correctos
      if (username === 'admin' && password === 'admin123') {
        // Llama a la función onLogin con el tipo de usuario y nombre de usuario
        onLogin('admin', username);
      } else if (username === 'usuario' && password === 'usuario123') {
        onLogin('usuario', username);
      } else if (username === 'soporte' && password === 'soporte123') {
        onLogin('soporte', username);
      } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        setError('Usuario o contraseña incorrectos');
      }
    };
  
    return (
      <div className='mx-5'>
        <Header/>
        <div className='border-2 max-lg:mx-0 mx-96 pt-10 pb-10 rounded bg-slate-100 text-center'>
          <h2 className='max-lg:pb-16 pb-8 text-3xl text-red-800 font-bold uppercase text-center'>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-10'>
              <label className='text-2xl font-bold mr-4'>Usuario:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='mb-10'>
              <label className='text-2xl font-bold mr-4'>Contraseña:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className='bg-red-800 p-2 rounded mr-16 text-white'>Iniciar sesión</button>
            {error && <p>{error}</p>}
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
export default Login;
