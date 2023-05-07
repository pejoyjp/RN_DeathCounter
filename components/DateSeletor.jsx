import { StyleSheet, Text, View} from 'react-native'
import React,{useRef,useState,useEffect} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRecoilState } from 'recoil';
import birthState from '../atoms/birthAtom';
import lifeSpanState from '../atoms/lifeSpanAtom'
import {Picker} from '@react-native-picker/picker';
import { Link } from 'react-router-native';
import registeTimeState from '../atoms/registeTime';

export default function DateSeletor() {

    const [birth,setBirth] = useRecoilState(birthState)
    const [lifeSpan,setLifeSpan] = useRecoilState(lifeSpanState)
    const [registeTime,setRegisteTime] = useRecoilState(registeTimeState)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setRegisteTime(prevTime=>prevTime + 1)
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    const ageGroup = []
    for (let i = 1; i <= 119; i++) {
        ageGroup.push(i);
    }

    const handleDateChange = (event, date) => {
        if (date) {
          console.log(birth);
          setBirth(date);
        }
      };
    
   
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Death Counter
                </Text>
                
                
                <View style={styles.dob}>
                    <Text style={styles.subtitle}>Date Of Birth:</Text>
                    <DateTimePicker
                        value={birth} // convert the birth state value to a Date object
                        mode="date"
                        display="spinner"
                        onChange={handleDateChange}
                        textColor="white" // 在此处设置字体颜色为红色
                    />
                </View>
            </View>
            

            <View style={styles.lifespan}>
                <Text style={styles.subtitle}>Your Expected Life Span:</Text>
                <Picker
                    style={styles.agePicker}
                    selectedValue={lifeSpan}
                    onValueChange={(itemValue, itemIndex) =>
                        setLifeSpan(itemValue)
                    }>
                    {
                        ageGroup.map((ageValue,ageIndex)=>(
                            <Picker.Item label={ageValue.toString()} value={ageValue} color='#fff' key={ageIndex}/>
                        ))
                    }
                </Picker>
            </View>

            <View style={styles.btn}>
                <Link to="/transition">
                    <Text style={{color:'white',
                                 fontFamily:'Snell Roundhand',
                                 fontSize:30,

                    }}>
                        Continue
                    </Text>
                </Link>
            </View>
            
        </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        color:'#fff',
        height:'90%',
        flexDirection:'column',
        justifyContent:'space-around',
    },
    title:{
        color:'white',
        fontSize:45,
        fontWeight:'bold',
        fontFamily: 'Snell Roundhand',
        fontStyle:'italic',
        paddingBottom:30
    },
    dob:{
        display:'flex',
        flexDirection:'column',
        gap:10

    },
 
    subtitle:{
        paddingLeft:10,
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
    },

    lifespan:{
        display:'flex',
        flexDirection:'column',
        gap:10,
    },
    btn:{
        display:'flex',
        flexDirection:'row-reverse',
    }
  
   
})

