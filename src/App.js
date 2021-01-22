import React from 'react'
import logo from './logo.svg';
import './App.css';

import { Meals, Contents, Cart } from './components'

const meals = [
  {
    id: 'big',
    title: 'Большой набор',
    price: 3999,
    weight: '9,5',
    unit: 'кг'
  },
  {
    id: 'middle',
    title: 'Стандартный набор',
    price: 2599,
    weight: '4,5',
    unit: 'кг'
  },
  {
    id: 'test',
    title: 'Пробный набор',
    price: 1599,
    weight: '2,5',
    unit: 'кг'
  }
]

const soups = [
  {
    title: 'Крем-суп из шпината',
    id: 1,
    imgLink: 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Овощной суп Три капусты с курицей',
    imgLink: 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    id: 2
  },
  {
    title: 'Овощной крем-суп',
    imgLink: 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    id: 3
  }
]

const drinks = [
  {
    title: 'Кока-кола',
    id: 1,
    imgLink: 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Морс',
    imgLink: 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    id: 2
  },
  {
    title: 'Компот',
    imgLink: 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    id: 3
  }
]

function App() {

  const [ cart, setCart ] = React.useState({})

  const addToCart = (type, item) => {
    const updatedCart = {
      ...cart,
      [type]: {
        ...item,
        quantity: 1
      }
    }
    setCart(updatedCart)
  }

  const onUpdateQuantity = (type, add) => {
    const currentQuantity = cart[type].quantity
    if (currentQuantity === 0 && add < 0) { return }
    const updatedCart = {
      ...cart,
      [type]: {
        ...cart[type],
        quantity: currentQuantity + add
      }
    }
    setCart(updatedCart)
  }

  const mealChosen = Object.keys(cart).length > 0


  return (
    <div className="App">
      <Meals
        meals={meals}
        onSelect={meal => {
          setCart(meal)
        }}
        selected={cart}
      />

      {mealChosen && <Contents
        items={soups}
        title='Супы'
        onSelect={soup => addToCart('soup', soup)}
        selected={mealChosen && cart.soup}
        onUpdateQuantity={quantity => onUpdateQuantity('soup', quantity)}
      />}

      {mealChosen && <Contents
        items={drinks}
        title='Напитки'
        onSelect={drink => addToCart('drink', drink)}
        selected={mealChosen && cart.drink}
        onUpdateQuantity={quantity => onUpdateQuantity('drink', quantity)}
      />}

      {/* тут дальше можно сколько угодно сделать таких штук */}

      {mealChosen && <Cart data={cart} onOrder={data => alert(JSON.stringify(data))} />}
    </div>
  );
}

export default App;
