import React from 'react';
import './Description.css'

const Description = (props) => {
    return(
    <>
        
<section className='wrapper-desc'>
            <h2>{props.name}</h2>


                    <a href="http://www.dev.przemekrura.pl/">See more</a>


</section>
        
    </>
    )
}

export default Description