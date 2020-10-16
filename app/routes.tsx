import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()
import OrphanageMap from './src/pages/OrphanagesMap'
import Orphanage from './src/pages/Orphanage'
import SelectMapPosition from './src/pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from './src/pages/CreateOrphanage/OrphanageData'
import Header from './src/components/Header'

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator 
                screenOptions={{
                    headerShown: false, 
                    cardStyle:{
                        backgroundColor: '#F2F3F5'
                        }
                }}
            >
                <Screen 
                    name="OrphanageMap" component={OrphanageMap} 
                />
                <Screen
                    name="Orphanage"
                    options={{
                        headerShown: true,
                        header: ()=> <Header showCancel={false} title="Orfanato" />
                    }}
                    component={Orphanage} 
                />
                <Screen 
                    name="SelectMapPosition" 
                    options={{
                        headerShown: true,
                        header: ()=> <Header title="Selecione no mapa" />
                    }}  
                    component={SelectMapPosition} 
                />
                <Screen 
                    name="OrphanageData" 
                    options={{
                        headerShown: true,
                        header: ()=> <Header title="Informe os dados" />
                    }}  
                    component={OrphanageData} 
                />
            </Navigator>
        </NavigationContainer>
    )
}