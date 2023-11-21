import React from 'react'

const containerStyle: React.CSSProperties = {
    color: '#eee',
    backgroundColor: '#555',
    padding: '16px'
}

const Header: React.FC = () => {
    return (
        <div style={containerStyle}>
            <h2>Header da aplicação principal</h2>
        </div>
    )
}

export default Header
