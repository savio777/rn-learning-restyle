import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";

import Home from "./src/screens/Home";
import { theme } from "./src/theme";

export default function App() {
  const [loaded] = useFonts({ Inter_400Regular, Poppins_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {loaded && <Home />}
      <StatusBar backgroundColor="transparent" style="light" translucent />
    </ThemeProvider>
  );
}
