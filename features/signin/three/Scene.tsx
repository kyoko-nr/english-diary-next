import { FC, memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";

const SceneComponent: FC = () => {
  return (
    <div id="canvas-container">
      <Canvas className={"canvas"} camera={{ fov: 75, position: [0, 0, 4] }}>
        <ambientLight intensity={2.0} />
        <directionalLight intensity={1.0} position={[0, 0, 6]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export const Scene = memo(SceneComponent);
