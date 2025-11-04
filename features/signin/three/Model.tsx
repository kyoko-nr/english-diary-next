import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { AnimationMixer } from 'three'
import { FC, memo } from 'react'

const ModelComponent:FC = () => {
  const gltf = useLoader(GLTFLoader, '/model_nodraco.glb')
  const mixer = new AnimationMixer(gltf.scene)
  if (mixer) {
    gltf.animations.forEach((animation) => {
      const action = mixer.clipAction(animation)
      action.play()
    })
  }

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return <primitive object={gltf.scene} dispose={null} position={[0, -2, 0]} scale={1} />
}

export const Model = memo(ModelComponent)
