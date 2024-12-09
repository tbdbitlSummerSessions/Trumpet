/* eslint-disable react/prop-types */
import { Container, LoadingOverlay } from "@mantine/core";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";

const styles = {
  container: {
    position: "absolute", // Use absolute positioning for centering
    top: "50%", // Position container vertically at the center
    left: "50%", // Position container horizontally at the center
    transform: "translate(-50%, -50%)", // Adjust for true center alignment
    backgroundColor: "#fff", // White background for the container
    padding: "20px", // Space inside the container
    borderRadius: "15px", // Rounded corners (contoured edges)
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
    width: "80%",
    height: "80%", // Width of the container
    maxWidth: "500px", // Maximum width to keep it from becoming too large
    textAlign: "center", // Center the text inside the container
  },
};

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function AnimationView() {
  return (
    <Container style={styles.container}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [-2.5, 0, 1], fov: 50 }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default AnimationView;
