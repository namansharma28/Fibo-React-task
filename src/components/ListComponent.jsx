import React from 'react'

function ListComponent({ items, title, description }) {
  return (
    <div className="list-section">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListComponent