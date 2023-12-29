import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import Card from './components/card';
import Swiper from 'react-native-deck-swiper';
import { useState } from 'react';
import data from './data';


export default function App() {
  const [index, setIndex] = useState(0)

  const onSwiped = () => {
    setIndex(index+1)
  }
  

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Swiper
      cards={data}
      cardIndex={index}
      renderCard={(card)=><Card card={card}/>}
      onSwiped={onSwiped}
      backgroundColor="white"
      stackSize={3}
      stackScale={5}
      stackSeparation={25}
      disableBottomSwipe
      disableTopSwipe
      animateOverlayLabelsOpacity
      overlayLabels={{
        left:{
          title:<Image source={require('./assets/icons/cross.png')}/>,
          style:{
            wrapper:{
              flexDirection:"column",
              alignItems:"flex-end",
              justifyContent:"flex-start",
              marginTop:115,
            
            }
          }
        },
        right:{
          title:<Image source={require('./assets/icons/tick.png')}/>,
          style:{
            wrapper:{
              flexDirection:"column",
              alignItems:"flex-start",
              justifyContent:"flex-start",
              marginTop:120,
              marginLeft:20
            }
          }
        }
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
