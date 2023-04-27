import { useThree, useFrame } from '@react-three/fiber';

export default function CameraControls() {
    const camera = useThree(state => state.camera);
  
    const planetCoordinates = {
      earth: [0, 0, 0],
      mars: [8, 0, 0],
    }
  return (
    null
  )
}
