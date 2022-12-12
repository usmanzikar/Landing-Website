import React from 'react';

const About = (props) => {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod 
                culpa distinctio adipisci nam vero. Odio autem molestiae repudiandae quaerat
                rerum iusto maxime inventore suscipit. Fugiat earum consequatur similique eveniet.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;
