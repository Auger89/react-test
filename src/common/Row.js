import React from 'react'

export const Row = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '3rem' }}>
    {children}
  </div>
)