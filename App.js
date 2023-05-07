import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { NativeRouter, Route, Routes, } from "react-router-native";
import DateSeletor from './components/DateSeletor';
import { Dimensions } from 'react-native';
import { RecoilRoot } from 'recoil';
import Feed from './components/Feed';
import Transition from './components/Transition';

export default function App() {
  const screenHeight = Dimensions.get('window').height;

  return (
    <NativeRouter>
      <RecoilRoot>
        <View height={screenHeight} style={styles.container}>
        
          <Routes>
            <Route exact path="/" element={<DateSeletor />} />
            <Route path="/transition" element={<Transition />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </View>
      </RecoilRoot>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
});
