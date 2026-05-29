import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
      {/* Chamar o NavigationContainer */}
      {/* Chamar o Componente do navigation/index.js */}
    </SafeAreaProvider>
  );
}
