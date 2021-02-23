import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {


  const Nayoks = ['Razzak', 'Josim', 'Salman Sha', 'Bappi', 'Shuvo']

  const Products = [
    { name: 'Photography', price: '$9.99' },
    { name: 'Acroba Pro', price: '$23.56' },
    { name: 'Photoshop', price: '$20.44' },
    { name: 'PDF READER', price: '$259.44' }

  ]

  const NayokNames = Nayoks.map(nayok => nayok);
  console.log(NayokNames);



  return (
    <div className="App">
      <header className="App-header">
        <p>I AM PRACTICE NOW REACT</p>
        <Counter></Counter>
        <Users></Users>



        <ul>
          {
            Nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            Products.map(Product => <li>{Product.name}</li>)
          }
        </ul>

        {
          Products.map(pd => <Product Product={pd}></Product>)
        }




        <Person name=' Showan' profession=' football player'></Person>
        <Person name=' Osman' profession=' Dorshok'></Person>
      </header>
    </div>
  );
}

function Counter() {

  const [count, setCount] = useState(30)
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrase</button>
    </div>
  )

}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>setUsers(data));
  })



  return (
    <div>
      <h1>Daynamic Users: {users.length}</h1>
<ul>
  {
    users.map(user=><li>{user.email}</li>)
  }
</ul>
    </div>
  )

}















function Product(props) {

  const ProductsStyle = {
    border: '2px solid gray',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px',
  }
  const { name, price } = props.Product;
  console.log(name, price);
  return (

    <div style={ProductsStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>

  )


}


function Person(props) {

  const StylePerson = {
    border: '2px solid red',
    margin: '20px',
    padding: '30px'
  }

  return (

    <div style={StylePerson}>

      <h1>Name:{props.name} </h1>
      <p>Profession: {props.profession} </p>


    </div>
  )

}

export default App;
