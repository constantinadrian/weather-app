import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Environment,
    OrbitControls,
} from "@react-three/drei";
import { Link } from "react-router-dom";

import Model from "../components/UI/Model";

import classes from "./WelcomePage.module.css";

const WelcomePage = (props) => {

    return (
        <>
            <div className={`${classes["full-screen"]}`}>
                <div
                    className={`d-flex justify-content-center align-items-center flex-column h-100 text-center text-break`}
                >
                    <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={1.0} />
                        <spotLight
                            angle={1}
                            position={[-80, 200, -100]}
                            intensity={1}
                        />
                        <OrbitControls makeDefault />
                        <Suspense fallback={null}>
                            <Environment preset="city" />
                            <Model />
                        </Suspense>
                    </Canvas>
                    <div className={`${classes["welcome-text"]} position-absolute`}>
                        <h1>AC Weather</h1>
                        <Link className={`${classes["welcome-text"]}`} to="/weather">
                            Enter
                        </Link>
                    </div>

                    <div className="fixed-bottom">
                        <p className={`${classes["attribution"]} text-muted`}>
                        
                        <a
                            href="https://sketchfab.com/3d-models/earth-36ac223837984d9a841f39edabeefa10"
                            title="Earth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Earth
                        </a>
                        {" "}by{" "}
                        <a
                            href="https://sketchfab.com/zisisbad"
                            title="Earth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        zisisbad</a>
                        {" "}is licensed under{" "}
                        <a
                            href="https://creativecommons.org/licenses/by/4.0/"
                            title="Earth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        Creative Commons Attribution</a>                        
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default WelcomePage;