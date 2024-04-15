import React from 'react';
import Dropdown from './DropDownCategorias';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const options = ['Herramientas Manuales', 'Materiales Básicos', 'Equipos de Seguridad', 'Tornillos y Anclajes', 'Fijaciones y Adhesivos', 'Equipos de Medición'];
    return (
        <header className="bg-gray-900 text-white">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Buscar"
                className="px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Buscar
              </button>
            </div>
          </div>
          <nav>
            <ul className="container mx-auto flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
              <Dropdown options={options} />
              <li><a href="#" className="hover:text-gray-300">Iniciar sesión</a></li>
              <li><a href="#" className="hover:text-gray-300">Mis compras</a></li>
              <li><a href="#" className="hover:text-gray-300">Carrito</a></li>
            </ul>
          </nav>
        </header>
      );
    };

export default Header;