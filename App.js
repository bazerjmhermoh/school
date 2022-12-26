import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Tabapp from './component/navigation';
import Edite from './screen/edite';


export default function App() {
  return (
    <NavigationContainer>
      <Tabapp />
    </NavigationContainer>);
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
