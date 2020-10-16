import { StyleSheet, Dimensions } from 'react-native';

const orphanageMaps = StyleSheet.create({
  container: {
    flex: 1
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  footer:{
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3
  },
  footerText:{
    fontFamily: "Nunito_700Bold",
    color: "#8FA7B3"
  },
  createOrphanageButton:{
    width: 56,
    height: 56,
    backgroundColor: "#15C3D6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center"
  }
});



const callout = StyleSheet.create({
    container:{
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius:16,
        justifyContent: "center",

        elevation: 3
    },
    text:{
        color: "#0089A5",
        fontSize: 14,
        textAlign: "center",
        fontFamily:"Nunito_700Bold"
    }
})

const orphanage = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4D6F80',
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
  },

  description: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
    marginTop: 40,
    backgroundColor: '#E6F7FB',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5'
  },

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: '#FCF0F4',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },
  scheduleItemGreen: {
      backgroundColor: '#EDFFF6',
      borderWidth: 1,
      borderColor: '#A1E9C5',
      borderRadius: 20,
    },
    
    scheduleText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  
  scheduleTextBlue: {
      color: '#5C8599'
    },
    scheduleTextRed: {
      color: '#FF669D'
    },
    
    scheduleTextGreen: {
        color: '#37C77F'
    },

  contactButton: {
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 40,
  },

  contactButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  }
})


const orphanageData = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  uploadContainer:{
    flexDirection: 'row'
  },
  uploadImage:{
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8
  },
  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})



const selectMapPosition = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})

const header = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: '#F9FAFC',
        borderBottomWidth:1,
        borderColor: '#DDE3F0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16
    }
})

export default {orphanageMaps, callout, orphanage, orphanageData, selectMapPosition, header}