import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> Os nossos produtos!  </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/sabonete.jpg' 
                        text ='Com aromas do rio Nilo e Lavanda'
                        label ='Leite de Burra'
                        path = '/services'
                        />
                        <CardItem
                        src='images/sabonete.jpg'
                        text ='Com aromas do rio Nilo e Jinseng'
                        label ='Leite de Cabra'
                        path = '/services'
                        />
                        <CardItem
                        src='images/sabonete.jpg'  
                        text ='Com aromas do rio Nilo e Jinseng'
                        label ='Leite de Vaca'
                        path = '/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/sabonete.jpg'  
                        text ='Com aromas do rio Nilo e Lavanda'
                        label ='Leite em Pó'
                        path = '/services'
                        />
                       
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/sabonete.jpg'  
                        text ='Com aromas do rio Nilo e Lavanda'
                        label ='Leite em Pó'
                        path = '/services'
                        />
                       
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/sabonete.jpg'  
                        text ='Com aromas do rio Nilo e Lavanda'
                        label ='Leite em Pó'
                        path = '/services'
                        />
                       
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/sabonete.jpg'  
                        text ='Com aromas do rio Nilo e Lavanda'
                        label ='Leite em Pó'
                        path = '/services'
                        />
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
