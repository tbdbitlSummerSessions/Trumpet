import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { BasicAppShell } from "./components/AppShell"

function App() {
  return (
    <BasicAppShell>
      {/* <Canvas camera={{ position: [5, 1.5, 5], fov: 50}} shadows>
        <Experience/>
      </Canvas> */}
    </BasicAppShell>
  )
}

export default App
