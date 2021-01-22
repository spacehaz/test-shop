import React from 'react'


function Cart({ data, onOrder }) {
  if (!data || !data.id) {
    return <div>пусто</div>
  }
  const {
    id,
    title,
    price,
    weight,
    unit
  } = data

  const defineTypeItem = type => {
    const item = data[type]
    if (!item) { return null }
    return <div>
      {item.title} - {item.quantity}
    </div>
  }
  return (
    <div className="cart">
      <h1>КОРЗИНА!</h1>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <div>
        ITEMS:
        {defineTypeItem('soup')}
        {defineTypeItem('drink')}
      </div>
      <button
        onClick={_ => onOrder(data)}
      >ЗАКАЗАТЬ</button>
    </div>
  );
}

export default Cart
