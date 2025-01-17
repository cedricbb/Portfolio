import { useCallback, useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"

const ParticlesContainer = () => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine)
        }).then(() => {
            setInit(true)
        })
    }, []);

    const particlesLoaded = useCallback(async () => {}, [])

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#0d47a1",
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                }
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min:1, max: 5 },
                },
            },
            detectRetina: true,
    }),
    [],
    )

    if (!init) {
        return (
            <Particles
            className="w-full h-full absolute translate-z-0"
            id="tsparticles"
            options={options}
            loaded={particlesLoaded}
            init={true}
            />
        )
    }
    return <></>
}

export default ParticlesContainer