import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; Sede principal la Esperanza 
                carrera 94 N° 1a-71 Alto Jordan 
                Telefono:3332018
                Codigo Dane:176001014138
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        bottom: '0',
    }
};

export default Footer;
