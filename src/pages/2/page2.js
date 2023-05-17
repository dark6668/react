import React from 'react';
import Header2 from './Header2';
import ContainerContact from './img';
import imgContact from './img-contact';

export default function Page2() {

        
    
    
    let airbnb = imgContact.map(contact => {

        return <ContainerContact item={contact} />

        /* 
        < ContainerContact 
        key = 
        img=
        name=
        rating=
        data=
        cost=
        openSpots=
         * 4*/
        /*
           < ContainerContact item= {contact}  < ContainerContact item{
        key = 
        img=
        name=
        rating=
        data=
        cost=
        openSpots=
        */

    })
 

    return (

        <div>
            <Header2 />

            <div className='containerContainerContact'>

                {airbnb}
          

            </div>
        </div>





    )
}
