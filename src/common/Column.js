import React from 'react'

export const Column = ({ children }) => (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '3rem'}}>
    { children }    
    </div>
)