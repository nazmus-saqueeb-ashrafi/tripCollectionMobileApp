import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

import Navigation from './src/components/Navigation';
import LoginScreen from './src/screens/LoginScreen';

import { Provider } from "react-redux";
import { store } from "./src/app/store";

import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    
    <Provider store={store}>
      <TailwindProvider>
        <SafeAreaProvider>
          <PaperProvider>
            <Navigation/>

          </PaperProvider>
        </SafeAreaProvider>
        
    
      </TailwindProvider>

    </Provider>

    
    
    
    
  );
}


{/* flex-1 items-center justify-center bg-slate-100 */}
      // <View className="flex-1 items-center justify-center bg-slate-100">
        
        {/* <StatusBar style="auto" />  */}
