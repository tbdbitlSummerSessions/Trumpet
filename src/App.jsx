import AnimationView from "./components/AnimationView";
import { MantineProvider } from "@mantine/core";
import { NavbarSection } from "./components/NavBarSection";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* <AnimationView url='Hip Hop Dancing'/> */}
      <NavbarSection />
    </MantineProvider>
  );
}

export default App;
