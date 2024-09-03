import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar desde 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear un root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
