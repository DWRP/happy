import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';
import styles from '../../styles';
import OrphanageProps from '../../util/OrphanageProps';
import { useRoute } from '@react-navigation/native'
import api from '../../services/api';

export default function Orphanage(){

    const route = useRoute()
    const [ orphanage, setOrphanage ] = useState<OrphanageProps>()
    const params = route.params as OrphanageProps

    function handleOpenMapRoute(){
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
    }

    useEffect(()=>{
        api.get(`/orphanages/${params.id}`).then((res)=>{
            setOrphanage(res.data)
        })
    },[params.id])

    if(!orphanage){
        return <Text >Loading...</Text>
    }
    return (
        <ScrollView style={styles.orphanage.container}>
            <View style={styles.orphanage.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                    {
                        orphanage.images?.map(image=>{
                            return (
                                <Image key={image.id} style={styles.orphanage.image} source={{ uri: image.url }} />
                            )
                        })
                    }
                </ScrollView>
            </View>

            <View style={styles.orphanage.detailsContainer}>
                <Text style={styles.orphanage.title}>{orphanage.name}</Text>
                <Text style={styles.orphanage.description}>{orphanage.about}</Text>
            
                <View style={styles.orphanage.mapContainer}>
                <MapView 
                    initialRegion={{
                    latitude: orphanage.latitude,
                    longitude: orphanage.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                    }} 
                    zoomEnabled={false}
                    pitchEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={false}
                    style={styles.orphanage.mapStyle}
                >
                    <Marker 
                    icon={mapMarkerImg}
                    coordinate={{ 
                        latitude: orphanage.latitude,
                        longitude: orphanage.longitude,
                    }}
                    />
                </MapView>

                <TouchableOpacity onPress={handleOpenMapRoute} style={styles.orphanage.routesContainer}>
                    <Text style={styles.orphanage.routesText}>Ver rotas no Google Maps</Text>
                </TouchableOpacity>
                
                </View>
            
                <View style={styles.orphanage.separator} />

                <Text style={styles.orphanage.title}>Instruções para visita</Text>
                <Text style={styles.orphanage.description}>{orphanage.instructions}</Text>

                <View style={styles.orphanage.scheduleContainer}>
                <View style={[styles.orphanage.scheduleItem, styles.orphanage.scheduleItemBlue]}>
                    <Feather name="clock" size={40} color="#2AB5D1" />
                    <Text style={[styles.orphanage.scheduleText, styles.orphanage.scheduleTextBlue]}>{orphanage.opening_hours}</Text>
                </View>
                <View style={[styles.orphanage.scheduleItem, orphanage.open_on_weekends?styles.orphanage.scheduleItemGreen:styles.orphanage.scheduleItemRed]}>
                    <Feather name="info" size={40} color={orphanage.open_on_weekends?"#39CC83":"#FF6966"} />
                    <Text style={[styles.orphanage.scheduleText, orphanage.open_on_weekends?styles.orphanage.scheduleTextGreen:styles.orphanage.scheduleTextRed]}>{orphanage.open_on_weekends?"Atendemos":"Não Atendemos"} aos fim de semana</Text>
                </View>
                </View>

                {/* <RectButton style={styles.orphanage.contactButton} onPress={() => {}}>
                <FontAwesome name="whatsapp" size={24} color="#FFF" />
                <Text style={styles.orphanage.contactButtonText}>Entrar em contato</Text>
                </RectButton> */}
            </View>
        </ScrollView>
    )
}