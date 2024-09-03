import React, { useState } from 'react';
import Api from '../Api'; 
import './DeleteEditarUsuario.css'; // Asegúrate de tener este archivo CSS

const DeleteEditarUsuario = () => {
    const [documento, setDocumento] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Confirmar la eliminación
        if (!window.confirm('¿Estás seguro de que deseas eliminar este dato?')) {
            return;
        }

        try {
            // Hacer una solicitud DELETE para eliminar el dato
            const response = await Api.delete(`/editar_usuario/eliminar/${documento}`);
            if (response.status === 200) {
                setSuccess('Dato eliminado exitosamente');
                setError('');
                setDocumento('');
            } else {
                setError('No se pudo eliminar el dato. Estado: ' + response.status);
            }
        } catch (error) {
            console.error('Error al eliminar el dato:', error.response?.data || error.message);
            if (error.response?.status === 404) {
                setError('Documento no encontrado. Verifica que el documento exista.');
            } else {
                setError('Error al eliminar el dato: ' + (error.response?.data?.message || error.message));
            }
            setSuccess('');
        }
    };

    return (
        <div className="delete-editar-usuario">
            <h1>Eliminar Usuario</h1>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
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

export default DeleteEditarUsuario;

