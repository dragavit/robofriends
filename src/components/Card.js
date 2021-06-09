import React from 'react';

const Card = ( { name, email, id } ) => { // прямо внутри параметра можно делать destructuring, чтобы внизу не писать props.id, props.name, props.email; другой способ - строкой ниже написать  const { name, email, id } = props;, но так лучше
    return( // return должен быть один элемент, и это <div>
        <div className='tx bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'> {/*  text centered, background light green, dib border 3, padding 3, margins 2, grow (animation) */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> {/* поскольку это JS expression, то опять заворачиваем в curly brackets; используем teplate string */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>

    );
}

export default Card;