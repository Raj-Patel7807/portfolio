import React from 'react';
import './about.css';

import Raj from "../assets/Raj.jpg";

export const About = () => {
    return (
        <>
            <div className='about'>
                <div className="myphoto">
                    <p>ABOUT ME  ----------</p>
                    <img src={Raj} alt='Raj Patel'></img>
                </div>
                <div className="aboutme">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus totam quasi suscipit, sint sed veniam rem? Sit, deleniti facilis magni enim accusamus ipsam blanditiis quis quos amet similique quidem voluptates!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime molestias dolorum nihil necessitatibus consectetur veritatis blanditiis pariatur accusantium velit sapiente adipisci et ut, consequuntur, exercitationem minima, tenetur ullam totam suscipit!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt tempora alias asperiores minima id dignissimos quia voluptas similique perspiciatis, repudiandae quisquam excepturi veniam ex voluptatem rerum aspernatur saepe adipisci. Tenetur.</p>
                </div>
            </div>
        </>
    )
};
