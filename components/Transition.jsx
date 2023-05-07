import { StyleSheet, Text, View,Image,Animated} from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import registeTimeState from '../atoms/registeTime'
import { useNavigate } from 'react-router-native'

const Transition = () => {
    const registeTime = useRecoilValue(registeTimeState)
    const deathNumber = registeTime * 1.8
    const navigate = useNavigate();

    setTimeout(()=>{
      navigate("/feed");
    },3000)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        An Unfriendly Reminder
      </Text>
      <View style={styles.desc}>
        <Text style={styles.diedNumber}>
          {deathNumber}
        </Text>
        <Text style={styles.time}>
           people around the world  have died during the period you filled out your birthday
        </Text>
      </View>

      <Image
          style={{height:30,width:50}}
          source={require('../assets/images/pass.png')}
      />
      
    </View>
  )
}

export default Transition

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:"column",
    gap:40
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    fontFamily: 'Snell Roundhand',
    color:'red'
  },
  desc:{
    width:'80%',
    display:'flex',
    textAlign:'center',
    flexDirection:'row',
    justifyContent:'center',
    gap:5,
    
  },
  diedNumber:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  time:{
    color:'white',
    fontSize:16
  }
  
})