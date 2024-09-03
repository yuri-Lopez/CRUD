import React, { useState } from 'react';
import Api from '../Api'; 
import './UpdateAdministrardatos.css';

const UpdateAdministrarDatos = () => {
    const [documento, setDocumento] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [planillaSeguridadSocial, setPlanillaSeguridadSocial] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica que todos los campos necesarios estén llenos
        if (!documento || !nombre || !apellido || !correoElectronico || !telefono || !planillaSeguridadSocial) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        // Hacer una solicitud de actualización para actualizar el dato
        Api.put('/AdministrarDatos/actualizardato', {
            documento,
            nombre,
            apellido,
            correoElectronico,
            telefono,
            planillaSeguridadSocial
        })
        .then(response => {
            alert('Dato actualizado exitosamente');
            // Limpiar campos
            setDocumento('');
            setNombre('');
            setApellido('');
            setCorreoElectronico('');
            setTelefono('');
            setPlanillaSeguridadSocial('');
        })
        .catch(error => {
            let errorMessage = 'Error al actualizar el dato';

            // Verifica si hay una respuesta de error con datos
            if (error.response && error.response.data) {
                errorMessage = error.response.data.message || JSON.stringify(error.response.data);
            } else if (error.message) {
                // Si el error tiene un mensaje, úsalo
                errorMessage = error.message;
            }

            console.error('Error al actualizar el dato:', error);
            alert(errorMessage);
        });
    };

    return (
        <div className="update-administrardatos">
            <h1>Actualizar Datos</h1>
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
                    type="email"
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    placeholder="Correo Electrónico"
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

export default UpdateAdministrarDatos;
