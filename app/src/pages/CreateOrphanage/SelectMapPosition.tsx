import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, MapEvent } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';
import styles from '../../styles';

export default function SelectMapPosition() {
  const navigation = useNavigation();

  const [ position, setPosition ] = useState({latitude: 0, longitude: 0})

  function handleNextStep() {
    position.latitude !== 0 && navigation.navigate('OrphanageData',{position});
  }

  return (
    <View style={styles.selectMapPosition.container}>
      <MapView 
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.selectMapPosition.mapStyle}
        onPress={(event:MapEvent)=>setPosition(event.nativeEvent.coordinate)}
      >
        {   
            position.latitude !== 0 && 
            <Marker 
                icon={mapMarkerImg}
                coordinate={{ latitude: position.latitude, longitude: position.longitude }}
            />
        }
      </MapView>

      <RectButton style={styles.selectMapPosition.nextButton} onPress={handleNextStep}>
        <Text style={styles.selectMapPosition.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  )
}
