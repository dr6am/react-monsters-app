import React from 'react';
import './card-list.styles.css.css'
import {Card} from "../card/card.component";

export  const CardList = (props)=>{
    return(
        <div className="card-list">
            {props.monsters.map((item)=>
                <Card key={item.id} name={item.name} id={item.id} email={item.email}/>
            )}
        </div>)
}