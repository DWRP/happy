import React, { useState } from 'react'
import { View, Text } from 'react-native';
import MapView, { Marker, Callout ,PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import { RectButton } from 'react-native-gesture-handler'

import styles from '../../styles'
import mapMarker from '../../images/map-marker.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';
import OrphanageProps from '../../util/OrphanageProps';

export default function OrphanagesMap(){
    const [orphanages, setOrphanages ] = useState([])
    const navigation = useNavigation()

    useFocusEffect(()=>{
        api.get('/orphanages').then(response => {
            setOrphanages(response.data)
        })
    })

    
    function handleNavigationToOrphanage(id: number){
        navigation.navigate('Orphanage',{ id })
    }

    function handleNavigationToCreateOrphanage(){
        navigation.navigate('SelectMapPosition')
    }

    return (
        <View style={styles.orphanageMaps.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.orphanageMaps.map} 
                initialRegion={{
                    latitude: -20.1794062,
                    longitude: -40.2627389,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }} 
            >
                {
                    orphanages.map((orphanage:OrphanageProps)=>{
                        return(
                            <Marker
                                key={orphanage.id}
                                icon={mapMarker}
                                calloutAnchor={{
                                    x: 2.7,
                                    y: 0.8
                                }}

                                coordinate={{
                                    latitude: orphanage.latitude,
                                    longitude: orphanage.longitude
                                }}
                            >
                                <Callout tooltip onPress={()=>{handleNavigationToOrphanage(orphanage.id)}}>
                                    <View style={styles.callout.container} >
                                        <Text style={styles.callout.text} > { orphanage.name } </Text>
                                    </View>
                                </Callout>
                            </Marker>
                        )
                    })
                }
            </MapView>

            <View style={styles.orphanageMaps.footer}>
                    <Text style={styles.orphanageMaps.footerText}>{orphanages.length} orfanatos encontrados</Text>
                    <RectButton style={styles.orphanageMaps.createOrphanageButton} onPress={handleNavigationToCreateOrphanage}>
                        <Feather name="plus" size={20} color="#FFF" />
                    </RectButton>
            </View>
        </View>
    )
}