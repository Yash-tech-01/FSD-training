import React from 'react'
import './card.css';
function Card(props) {
  return (
    <div id="card">
    
      <div id="adi">
        <img src="https://tse4.mm.bing.net/th/id/OIP.ppTkg0ZYJ-Y9MM40wo_46wHaEw?pid=Api&P=0&h=180" alt=""height={100} width={100} />
        <h1>{props.name}</h1>
        <h3>{props.edu}</h3>
      </div>
        
    </div>
  )
}

export default Card