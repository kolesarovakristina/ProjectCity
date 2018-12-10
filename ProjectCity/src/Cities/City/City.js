import React from 'react';

const City = (props)=>{

  return(
    <div>
      Hello {props.name},country:{props.country},temp:{props.temp}
    </div>

  );
}

export default City;