import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker'

import styles from '../../styles';
import api from '../../services/api';

interface PositionParams{
  position:{
    latitude: number
    longitude: number
  }
}


export default function OrphanageData() {
  const navigation = useNavigation()
  
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpenHours] = useState('')
  const [open_on_weekends, setOpenWeeks] = useState(false)
  const [images,setImages] = useState<string[]>([])


  const route = useRoute()
  const params = route.params as PositionParams

  async function handleSubmit(){
    const { latitude, longitude } = params.position

    const data = new FormData()
        data.append('name',name)
        data.append('latitude',String(latitude))
        data.append('longitude',String(longitude))
        data.append('about',about)
        data.append('instructions',instructions)
        data.append('opening_hours',opening_hours)
        data.append('open_on_weekends',String(open_on_weekends))
        images.forEach((image,index)=>{
            data.append('images',{
              name:`image_${index}_${Date.now()}.jpg`,
              type: 'image/jpg',
              uri: image
            } as any)
        })

        const result = await api.post('/orphanages',data)

        if(result){
            alert('Cadastro realizado com sucesso')
        }else{
            alert('Error')
        }

        navigation.navigate('OrphanageMap')
  }

  async function handleSelectImages(){
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
    
    if ( status !== 'granted'){
      alert('Eita, precissamos de acesso à sua galeria!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality:1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if (result.cancelled){
      return
    }

    const { uri } = result

    setImages([...images, uri])
  }


  return (
    <ScrollView style={styles.orphanageData.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.orphanageData.title}>Dados</Text>

      <Text style={styles.orphanageData.label}>Nome</Text>
      <TextInput
        style={styles.orphanageData.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.orphanageData.label}>Sobre</Text>
      <TextInput
        style={[styles.orphanageData.input, { height: 110 }]}
        value={about}
        onChangeText={setAbout}
        multiline
      />

      <Text style={styles.orphanageData.label}>Fotos</Text>
      <View style={styles.orphanageData.uploadContainer}>
        {
          images.map(uri=>{
            return (
              <Image
                key={uri}
                source={{uri}}
                style={styles.orphanageData.uploadImage}
              />
            )
          })
        }
      </View>
      <TouchableOpacity style={styles.orphanageData.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.orphanageData.title}>Visitação</Text>

      <Text style={styles.orphanageData.label}>Instruções</Text>
      <TextInput
        style={[styles.orphanageData.input, { height: 110 }]}
        value={instructions}
        onChangeText={setInstructions}
        multiline
      />

      <Text style={styles.orphanageData.label}>Horario de visitas</Text>
      <TextInput
        style={styles.orphanageData.input}
        value={opening_hours}
        onChangeText={setOpenHours}
      />

      <View style={styles.orphanageData.switchContainer}>
        <Text style={styles.orphanageData.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenWeeks}
        />
      </View>

      <RectButton style={styles.orphanageData.nextButton} onPress={handleSubmit}>
        <Text style={styles.orphanageData.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}

