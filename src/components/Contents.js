import React from 'react'


function Contents({ items, title, selected = {}, onUpdateQuantity, onSelect }) {
  return (
    <div className="meals">
      <h2>{title}</h2>
      {items.map(item => {
        return <div
          key={item.id}
        >
          <div
            onClick={_ => onSelect(item)}
            style={{
              border: selected.id === item.id ? '2px solid red' : 'none',
              marginRight: '10px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {item.title}
          </div>

          <button
            disabled={selected.id !== item.id}
            onClick={_ => onUpdateQuantity(1)}
          >Add</button>
          {selected.id === item.id ? selected.quantity : 0}
          <button
            disabled={selected.id !== item.id}
            onClick={_ => onUpdateQuantity(-1)}
          >Reduce</button>
        </div>
      })}
    </div>
  );
}

export default Contents
