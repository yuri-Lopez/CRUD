import React, { useState } from 'react';
import Api from '../Api';
import './CreateEditarUsuario.css'; // Importa el archivo CSS para el estilo

const CreateEditarUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [planillaSeguridadSocial, setPlanillaSeguridadSocial] = useState('');
    const [error, setError] = useState(''); // Estado para manejar errores

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de datos
        if (!nombre || !apellido || !documento || !telefono || !correoElectronico || !planillaSeguridadSocial) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        // Hacer una solicitud POST para crear un nuevo usuario
        Api.post('/editar_usuario/nuevodato', { nombre, apellido, documento, telefono, correoElectronico, planillaSeguridadSocial })
            .then(response => {
                alert('Usuario creado exitosamente');
                setNombre('');
                setApellido('');
                setDocumento('');
                setTelefono('');
                setCorreoElectronico('');
                setPlanillaSeguridadSocial('');
                setError(''); // Limpiar mensaje de error
            })
            .catch(error => {
                console.error('Error al crear el dato', error);
                setError('Error al crear el dato: ' + (error.response?.data?.message || error.message));
            });
    };

    return (
        <div className="create-editar-usuario">
            <h1>Crear/Editar Usuario</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Nombre'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Apellido'
                    value={apellido}
                    onChange={e => setApellido(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Documento'
                    value={documento}
                    onChange={e => setDocumento(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Teléfono'
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
                <input 
                    type='email'
                    placeholder='Correo Electrónico'
                    value={correoElectronico}
                    onChange={e => setCorreoElectronico(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Planilla Seguridad Social'
                    value={planillaSeguridadSocial}
                    onChange={e => setPlanillaSeguridadSocial(e.target.value)}
                />
                <button type='submit'>Crear</button>
            </form>
        </div>
    );
};

export default CreateEditarUsuario;
