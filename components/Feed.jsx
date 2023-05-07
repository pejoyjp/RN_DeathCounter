import { StyleSheet, Text, View,Image} from 'react-native'
import React,{Suspense, useEffect,useState} from 'react'
import birthState from '../atoms/birthAtom'
import lifeSpanState from '../atoms/lifeSpanAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { DateTime } from 'luxon'
import Hourglass from './Hourglass'
import { Canvas } from '@react-three/fiber';


export default function Feed() {
  const birth = useRecoilValue(birthState)
  const lifeSpan = useRecoilValue(lifeSpanState)
 
  const [remainingLife,setRemainingLife] = useState("")
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentAge = DateTime.now().diff(formattedDate, 'years').years;
      setRemainingLife(((lifeSpan - currentAge)/lifeSpan).toFixed(9) + '%')
 
   
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateTime = DateTime.fromJSDate(new Date(birth));
  const formattedDate = DateTime.fromISO(dateTime.toFormat('yyyy-MM-dd'))

  

  return (
    
        <View style={styles.container}>
            <Text style={styles.title}>
                Your Remaining Life:
            </Text>
            <View style={styles.downWrapper}>
              <Text style={styles.remainingLife}>
                  {remainingLife}
              </Text>
              <Image
                  style={styles.down}
                  source={require('../assets/images/down.png')}
                />
            </View>
            
            <Canvas style={styles.canvas}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Hourglass/>
                </Suspense>
            </Canvas>
            
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        color:'#fff',
        height:'90%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    downWrapper:{
        display:'flex',
        gap:10,
        flexDirection:'row'
    },
    down:{
        height:30,
        width:30
    },  
    title:{
        paddingVertical:30,
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        fontFamily: 'Snell Roundhand',
        fontStyle:'italic',
    },
    remainingLife:{
        fontSize:25,
        color:'#dc2626'
    },
   
 

})