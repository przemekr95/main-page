import React from 'react';
import './Background.css';
import Description from './../Description/Description';

const Background = () => {

    return(
    <>
        <section className="wrapper-bg">
            <div className="bg">
                <Description name="Photographer" link="http://www.foto.przemekrura.pl/"/>  
            </div>
            <div className="bg">
                <Description name="Frontend Developer" link="http://www.dev.przemekrura.pl/"/> 
            </div>
        </section>
    </>
    )
}

export default Background