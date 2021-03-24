import React from 'react';


const Card =({name,email,id}) =>{
    
    return (
    <div>
                <div className='card'>

            <img src={`https://robohash.org/${id}?100x100`}  alt="robot" />
            <div>
                 <h2>{name}</h2>
            <p>{email}</p>
            </div>
           

        </div>
       
     


    </div>
     

    );

}

export default Card;