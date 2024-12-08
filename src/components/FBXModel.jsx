/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FBXLoader } from 'three-stdlib'

// eslint-disable-next-line react/prop-types
function FBXModel({ url }) {
  const [model, setModel] = useState(null)
  const [animation, setAnimation] = useState(null)
  const mixer = useRef()

  // Load the FBX model
  const fbx = useLoader(FBXLoader, url)

  fbx.traverse(function(node){
    if(node.isMesh)
      node.castShadow = true
  })

  // Initialize the animation when the model is loaded
  useEffect(() => {
    if (fbx) {
      fbx.scale.set(0.01, 0.01, 0.01) // Scale the model if needed
      setModel(fbx)
      
      const mixerInstance = new THREE.AnimationMixer(fbx)
      setAnimation(mixerInstance)

      // Set up animations if present
      fbx.animations.forEach((clip) => {
        mixerInstance.clipAction(clip).play()
      })
      
      mixer.current = mixerInstance
    }
  }, [fbx])

  // Update the animation mixer on each frame
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta)
    }
  })

  return model ? <primitive object={model} /> : null
}

export default FBXModel
