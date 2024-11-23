import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import Icon from '../assets/logo.png';
import IconOwl from '../assets/finq-owl.png';

export default function SplashScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={Icon} style={styles.image}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  image: {
    width: 177.84,
    height: 74.89,
    resizeMode: "contain"
  }
})