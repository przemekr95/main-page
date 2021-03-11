import React from 'react';
import './Description.css'

const Description = (props) => {
    return(
    <>
        
<section className='wrapper-desc'>
    <a href={props.link}>{props.name}</a>
</section>
        
    </>
    )
}

export default Description