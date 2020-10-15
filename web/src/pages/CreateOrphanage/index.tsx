import React, { useState, FormEvent, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from "react-icons/fi";

import '../../styles/pages/create-orphanage.css';

import Sidebar from "../../components/Sidebar";
import mapIcon from "../../util/mapIcon";
import { LeafletMouseEvent } from "leaflet";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function CreateOrphanage() {
    const history = useHistory()

    const [position, setPosition] = useState({lat:0, lng: 0})
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [instructions, setInstructions] = useState('')
    const [opening_hours, setOpenHours] = useState('')
    const [open_on_weekends, setOpenWeeks] = useState(false)
    const [images,setImages] = useState<File[]>([])
    const [ previewImgs, setPreviewImgs ] = useState<string[]>([])

    async function handlerSubmit(event: FormEvent){
        event.preventDefault()

        const data = new FormData()
        data.append('name',name)
        data.append('latitude',String(position.lat))
        data.append('longitude',String(position.lng))
        data.append('about',about)
        data.append('instructions',instructions)
        data.append('opening_hours',opening_hours)
        data.append('open_on_weekends',String(open_on_weekends))
        images.forEach(image=>{
            data.append('images',image)
        })

        const result = await api.post('/orphanages',data)

        if(result){
            alert('Cadastro realizado com sucesso')
        }else{
            alert('Error')
        }

        history.push('/app')

    }

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return
        }

        const selectedImages = Array.from(event.target.files)
        setImages(selectedImages)

        const selectedImagesPreview = selectedImages.map(img=>URL.createObjectURL(img))

        setPreviewImgs(selectedImagesPreview)
    }

  return (
    <div id="page-create-orphanage">

      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handlerSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={(event:LeafletMouseEvent)=>{
                  const { lat, lng } = event.latlng
                  setPosition({lat,lng})
              }}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

             {
                 position.lat !== 0 && position.lng !== 0  ? (
                    <Marker 
                        interactive={false} 
                        icon={mapIcon} 
                        position={[position.lat,position.lng]} 
                    />
                 ): ""
             }

            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={(event)=>{setName(event.target.value)}} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} value={about} onChange={(event)=>{setAbout(event.target.value)}} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {
                    previewImgs.map(image=><img key={image} src={image} alt={name}/>)
                }
                <label htmlFor="image[]" className="new-image">
                    <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

            </div>
            <input multiple onChange={handleSelectImages} type="file" id="image[]" hidden/>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" value={instructions} onChange={(event)=>{setInstructions(event.target.value)}} />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input id="opening_hours" value={opening_hours} onChange={(event)=>{setOpenHours(event.target.value)}} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                    type="button" 
                    className={open_on_weekends?"active":""}
                    onClick={()=>setOpenWeeks(true)}
                >
                    Sim
                </button>
                <button 
                    type="button"
                    className={!open_on_weekends?"active":""}
                    onClick={()=>setOpenWeeks(false)}
                >
                    Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
