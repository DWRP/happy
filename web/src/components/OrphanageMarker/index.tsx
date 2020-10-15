import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import mapIcon from '../../util/mapIcon'
import OrphanageProps from '../../util/OrphanageProps'

export default function OrphanageMarker(props:OrphanageProps){

    return (
        <Marker 
            icon={mapIcon}
            position={[props.latitude,props.longitude]}
        >

            <Popup 
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
            >
                {props.name}
                <Link to={`/orphanages/${props.id}`}>
                    <FiArrowRight size={32} color="#FFF" />
                </Link>
            </Popup>
        </Marker>
    )
}