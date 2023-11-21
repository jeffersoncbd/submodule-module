import React from 'react'

const containerStyle: React.CSSProperties = {
    color: '#eee',
    backgroundColor: '#555',
    padding: '16px'
}

const Header: React.FC = () => {
    return (
        <div style={containerStyle}>
            <h2>Módulo de header</h2>
        </div>
    )
}

export default Header
