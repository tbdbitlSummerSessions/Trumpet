/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState, useContext } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";
import { FundContext } from "./NavBarSection";

// eslint-disable-next-line react/prop-types
function FBXModel() {
  const fund = useContext(FundContext);
  const [model, setModel] = useState(null);
  const [animation, setAnimation] = useState(null);
  const [clip, setClip] = useState();
  const [actions, setActions] = useState();
  const mixer = useRef();
  console.log(fund);

  // Load the FBX model
  const fbx = useLoader(FBXLoader, "Models/Marching_Band_Try2_V5.fbx");
  const test = useLoader(FBXLoader, "Models/Marching_Band_Try2_V5.fbx");
  //console.log(test);

  fbx.traverse(function (node) {
    if (node.isMesh) node.castShadow = true;
  });

  // Initialize the animation when the model is loaded
  useEffect(() => {
    if (fbx) {
      fbx.scale.set(0.01, 0.01, 0.01); // Scale the model if needed
      setModel(fbx);

      const mixerInstance = new THREE.AnimationMixer(fbx);
      setAnimation(mixerInstance);

      console.log(`Bruh ${fund.fname}`);
      console.log(fbx.animations.find((obj) => obj.name === fund.fname));
      setClip(fund.name);
      console.log(`WHATTTTTTTTT`);
      // Set up animations if present

      // Set up animations if present
      fbx.animations.forEach((clip) => {
        console.log(clip);
      });

      let clip = fbx.animations.find((obj) => obj.name === fund.fname);
      let action = mixerInstance.clipAction(clip);
      action.play();

      //currentAction = action;
      mixer.current = mixerInstance;
    }
  }, [fbx]);

  useEffect(() => {
    let clip = fbx.animations.find((obj) => obj.name === fund.fname);
    let action = mixer.current.clipAction(clip);
    mixer.current.stopAllAction();
    action.play();
    //currentAction.stop();
  }, [fund]);

  // Update the animation mixer on each frame
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  function changeClip(fund) {
    console.log(`NoWAY ${fund}`);
  }

  console.log(`Bingus Twing ${fund.name}`);

  return model ? <primitive object={model} /> : null;
}

export default FBXModel;
