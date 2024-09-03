import React, { useState } from 'react';
import Api from '../Api'; 
import './UpdateEditarUsuario.css'; 

const UpdateEditarUsuario = () => {
    const [documento, setDocumento] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [planillaSeguridadSocial, setPlanillaSeguridadSocial] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica que todos los campos necesarios estén llenos
        if (!documento || !nombre || !apellido || !correoElectronico || !telefono || !planillaSeguridadSocial) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        // Confirmar la actualización
        if (!window.confirm('¿Estás seguro de que deseas actualizar estos datos?')) {
            return;
        }

        // Hacer una solicitud de actualización para actualizar el dato
        Api.put('/editar_usuario/actualizardato', {
            documento,
            nombre,
            apellido,
            telefono,
            correoElectronico,
            planillaSeguridadSocial
        })
        .then(response => {
            setSuccess('Dato actualizado exitosamente');
            setError('');
            // Limpiar campos
            setDocumento('');
            setNombre('');
            setApellido('');
            setTelefono('');
            setCorreoElectronico('');
            setPlanillaSeguridadSocial('');
        })
        .catch(error => {
            console.error('Error al actualizar el dato:', error.response?.data || error.message);
            setError('Error al actualizar el dato: ' + (error.response?.data?.message || error.message));
            setSuccess('');
        });
    };

    return (
        <div className="update-editar-usuario">
            <h1>Actualizar Usuario</h1>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={documento}
                    onChange={(e) => setDocumento(e.target.value)}
                    placeholder="Documento"
                    required
                />
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    required
                />
                <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Apellido"
                    required
                />
                <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                    required
                />
                <input
                    type="email"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    placeholder="Correo Electrónico"
                    required
                />
                <input
                    type="text"
                    value={planillaSeguridadSocial}
                    onChange={(e) => setPlanillaSeguridadSocial(e.target.value)}
                    placeholder="Planilla de Seguridad Social"
                    required
                />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
};

export default UpdateEditarUsuario;
