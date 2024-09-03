import React from 'react';


const Header = () => {
    return (
        <header style={styles.header}>
            <h1>INSTITUCIÓN EDUCATIVA LA ESPERANZA</h1>
            
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    }
};

export default Header;
