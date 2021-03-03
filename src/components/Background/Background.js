import React from 'react';
import './Background.css';
import Description from './../Description/Description';

const Background = () => {

    return(
    <>
        <section className="wrapper-bg">
            <div className="bg">
                <Description name="Photography"/>  
            </div>
            <div className="bg">
                <Description name="Frontend Developer"/> 
            </div>
        </section>
    </>
    )
}

export default Background