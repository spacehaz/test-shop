import React from 'react'


function Meals({ meals, selected, onSelect }) {
  return (
    <div className="meals">
      {meals.map(meal => {
        return <button
          key={meal.id}
          onClick={_ => onSelect(meal)}
          style={{
            border: selected.id === meal.id ? '2px solid red' : 'none',
            marginRight: '10px',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          {meal.title} - {meal.price}
        </button>
      })}
    </div>
  );
}

export default Meals
