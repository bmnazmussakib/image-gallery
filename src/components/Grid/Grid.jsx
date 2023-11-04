import React from 'react'

export default function Grid({children, columns}) {
  return (
    <div
    style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 15,
        padding: 10,
      }}
    >
        {children}
    </div>
  )
}
