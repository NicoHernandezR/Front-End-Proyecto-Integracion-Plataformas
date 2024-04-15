import React, { useState } from 'react';
import Header from '../../Header/components/Header';
import Footer from '../../Footer/components/Footer';

interface LoginProps {
  onRegisterClick: () => void;
}

const InicioMenu: React.FC<LoginProps> = ({ onRegisterClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aquí podrías implementar la lógica para iniciar sesión con el usuario y la contraseña
    console.log('Iniciar sesión con usuario:', username, 'y contraseña:', password);
  };

  const handleRegisterClick = () => {
    onRegisterClick();
  };
    return (
      <div>
        <Header title="Ferramas" />
        <main>
          {<div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Iniciar sesión</h2>
      <form className="max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-300">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900 focus:outline-none"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>}
        </main>
        <Footer />
      </div>
    );
  };


export default InicioMenu
