import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import mapMark from '../../images/mapa-mark.svg'

import '../../styles/pages/orphanagesMap.css';
import api from '../../services/api'
import OrphanageMarker from '../../components/OrphanageMarker'
import OrphanageProps from '../../util/OrphanageProps'

function OrphanagesMap(){
    
    const MABOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

    const [orphanages,setOrphanages] = useState([])

    useEffect(()=>{
        async function loadOrphanages(){
            const response = await api.get('/orphanages')

            setOrphanages(response.data)
        }
        loadOrphanages()
    },[])
    
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMark} alt="Map Marker"/>
                    
                    <h1>Escolha um orfanato no mapa</h1>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Serra</strong>
                    <span>Espirito Santo</span>
                </footer>
            </aside>
            
            <Map 
                center={[-20.1837313,-40.2569731]}
                zoom={12}
                style={{
                    width:"100%",
                    height: "100%"
                }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${MABOX_TOKEN}`} 
                />

                {
                    orphanages.map((item:OrphanageProps)=>{
                        return (
                            <OrphanageMarker key={item.id} id={item.id} name={item.name} latitude={item.latitude} longitude={item.longitude} />
                        )
                    })
                }
            </Map>
            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap