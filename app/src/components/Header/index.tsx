import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps{
    title: string
    showCancel?:boolean
}

export default function Header({ title, showCancel=true }: HeaderProps){

    const navigation = useNavigation()

    function handleToHome(){
        navigation.navigate('OrphanageMap')
    }
    return (
        <View style={styles.header.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#15B6D6" />
            </BorderlessButton>

            <Text style={styles.header.title}> {title} </Text>
            {
                showCancel?(
                    <BorderlessButton onPress={handleToHome}>
                        <Feather name="x" size={24} color="#FF669D" />
                    </BorderlessButton>
                ): <View />
            }
        </View>
    )
}