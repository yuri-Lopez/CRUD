import React, { useState } from 'react';
import Api from '../Api';
import './UpdateRegistro.css'; // Asegúrate de tener el archivo CSS importado

const UpdateRegistro = () => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [planillaSeguridadSocial, setPlanillaSeguridadSocial] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!id || !nombre || !apellido || !documento || !telefono || !correoElectronico || !planillaSeguridadSocial) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        // Resetear mensaje de error
        setError('');

        try {
            // Actualizar registro
            await Api.put(`/api/registro/${id}`, { nombre, apellido, documento, telefono, correoElectronico, planillaSeguridadSocial });
            setMessage('Registro actualizado exitosamente');
            // Limpiar formulario
            setId('');
            setNombre('');
            setApellido('');
            setDocumento('');
            setTelefono('');
            setCorreoElectronico('');
            setPlanillaSeguridadSocial('');
        } catch (error) {
            console.error('Error al actualizar el registro', error);
            setError(`Error al actualizar el registro. ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="update-registro-form">
            <h1 id="update-registro-form">Actualizar Registro</h1>
            <div className="form-group">
                <label htmlFor="registro-id">
                    ID del Registro:
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
            <div className="form-group">
                <label htmlFor="nombre">
                    Nombre:
                    <input 
                        id="nombre"
                        type='text'
                        placeholder='Nombre'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="apellido">
                    Apellido:
                    <input 
                        id="apellido"
                        type='text'
                        placeholder='Apellido'
                        value={apellido}
                        onChange={e => setApellido(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="documento">
                    Documento:
                    <input 
                        id="documento"
                        type='text'
                        placeholder='Documento'
                        value={documento}
                        onChange={e => setDocumento(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="telefono">
                    Teléfono:
                    <input 
                        id="telefono"
                        type='text'
                        placeholder='Teléfono'
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="correo-electronico">
                    Correo Electrónico:
                    <input 
                        id="correo-electronico"
                        type='email'
                        placeholder='Correo Electrónico'
                        value={correoElectronico}
                        onChange={e => setCorreoElectronico(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="planilla-seguridad-social">
                    Planilla Seguridad Social:
                    <input 
                        id="planilla-seguridad-social"
                        type='text'
                        placeholder='Planilla Seguridad Social'
                        value={planillaSeguridadSocial}
                        onChange={e => setPlanillaSeguridadSocial(e.target.value)}
                    />
                </label>
            </div>
            {error && <p className="error-message">{error}</p>}
            {message && <p className="success-message">{message}</p>}
            <button type='submit'>Actualizar</button>
        </form>
    );
};

export default UpdateRegistro;
