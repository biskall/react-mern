import React, {useRef, useEffect} from 'react';

import './Map.css';

const Map = props => {
    const mapRef = useRef()

    const { center, zoom } = props;

    useEffect(() =>{
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        })
    
        new window.google.maps.Marker({position: center, map: map})
    },[center, zoom])

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
    </div>
  );
};

// my api key = AIzaSyCkm1c5cWbFjX-p_pUm4AbzB21q9v77UZw

export default Map;
