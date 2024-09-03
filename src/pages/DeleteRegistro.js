import React, { useState } from 'react';
import Api from '../Api';
import './DeleteRegistro.css'; // Asegúrate de tener el archivo CSS importado

const DeleteRegistro = () => {
    const [id, setId] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!id) {
            setError('El ID del registro es obligatorio.');
            return;
        }

        // Resetear mensaje de error
        setError('');

        try {
            // Eliminar registro
            await Api.delete(`/api/registro/${id}`);
            setMessage('Registro eliminado exitosamente');
            // Limpiar formulario
            setId('');
        } catch (error) {
            console.error('Error al eliminar el registro', error);
            setError(`Error al eliminar el registro. ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="delete-registro-form">
            <h1 id="delete-registro-form">Eliminar Registro</h1>
            <div className="form-group">
                <label htmlFor="registro-id">
                    ID del Registro a Eliminar:
                    <input 
                        id="registro-id"
                        type='text'
                        placeholder='ID del registro'
                        value={id}
                        onChange={e => setId(e.target.value)}
                        aria-required="true"
                    />
                </label>
            </div>
            {error && <p className="error-message">{error}</p>}
            {message && <p className="success-message">{message}</p>}
            <button type='submit'>Eliminar</button>
        </form>
    );
};

export default DeleteRegistro;
