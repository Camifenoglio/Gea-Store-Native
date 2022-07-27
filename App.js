import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigation/BottomTabs' 
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import mainReducers from './redux/reducers/mainReducers';
import { useFonts, AlegreyaSans_100Thin, AlegreyaSans_100Thin_Italic,  AlegreyaSans_400Regular, AlegreyaSans_400Regular_Italic,
  AlegreyaSans_700Bold } from '@expo-google-fonts/alegreya-sans'
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';

export default function App() {
  const store = createStore({ reducer: mainReducers, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 500 },
    serializableCheck: { warnAfter: 500 },
  }) });
  let [fontsLoaded] = useFonts({
    AlegreyaSans_100Thin,
    AlegreyaSans_100Thin_Italic,
    AlegreyaSans_400Regular,
    AlegreyaSans_400Regular_Italic,
    AlegreyaSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
<Provider store={store}>
       <NavigationContainer>
        <BottomTabs/>
        </NavigationContainer>
        <Toast />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
