// CARDLIST.JS ДЕЛАЕТ LOOP ПО ТОМУ, ЧТО ПОЛУЧАЕТ, И ЗАПОЛНЯЕТ CARDS.JS

import React from 'react';
import Card from './Card';
// CardList component lists cards, all we need to do is pass it a prop of robots
const CardList = ({ robots }) => { // параметр может как угодно называться, но в App.js в него передается { robots }
    return (
      <div>
       {
         robots.map((blabla, i) => {
            return (
              // ПЕРЕДАЕМ ПО ОТДЕЛЬНОСТИ PROPERTY КАЖДОГО ЭЛЕМЕНТА ROBOTS В CARDS
              <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
            );
          })
       }
      </div>  
    ) 
}   

export default CardList;