import { Environment, useGLTF } from '@react-three/drei';

export default function Laptop () {

    const laptop = useGLTF(
        path: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    )

    return(
        <>
        <Environment preset="warhouse" />
        <primitive object={laptop.scene} />
        </>
    );
}