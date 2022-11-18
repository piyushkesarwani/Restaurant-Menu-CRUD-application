import React from 'react'

export default function Menu({menuItems}) {
  return (
    <div className='menuSection'>
        {menuItems.map((item) => {
            const {id, title, price, desc, img} = item;
            return (
                <article key={id} className='singleMenu'>
                    <img src={img} alt={title}/>
                    <div className='header'>
                        <h3>{title}</h3>
                        <p>${price}</p>
                    </div>
                    <p>{desc}</p>
                </article>
            );
        })}
    </div>
  );
}
