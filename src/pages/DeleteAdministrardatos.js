import React, { useState } from 'react';
import Api from '../Api';
import './DeleteAdministrardatos.css';

const DeleteAdministrarDatos = () => {
    const [documento, setDocumento] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validar que el campo documento no esté vacío
        if (!documento.trim()) {
            alert('El campo documento no puede estar vacío.');
            return;
        }
    
        // Confirmar la eliminación
        if (!window.confirm('¿Estás seguro de que deseas eliminar este dato?')) {
            return;
        }
    
        // Hacer una solicitud DELETE para eliminar el dato
        Api.delete(`/AdministrarDatos/eliminar/${documento}`)
            .then(response => {
                alert('Dato eliminado exitosamente');
                setDocumento('');
            })
            .catch(error => {
                console.error('Error al eliminar el dato:', error.response?.data || error.message);
                alert('Error al eliminar el dato: ' + (error.response?.data?.message || error.message));
            });
    };

    return (
        <div className="delete-administrardatos">
            <h1>Eliminar Datos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={documento}
                    onChange={(e) => setDocumento(e.target.value)}
                    placeholder="Ingrese el documento a eliminar"
                    required
                />
                <button type="submit">Eliminar</button>
            </form>
        </div>
    );
};

export default DeleteAdministrarDatos;
