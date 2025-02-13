import Racer from "./Racer";
import GasCar from "./GasCar";

export const findRacersWithEmptyFuel = (racers: Racer[]) => {
    let newRacers = []
    let racerWithEmptyFuel = racers[0]
    for (let i = 0; i < racers.length; i++) {
        if (racers[i].isFuelEmpty() === true) {
            racerWithEmptyFuel = racers[i]
            newRacers.push(racerWithEmptyFuel)
        }
    }
    return newRacers
}

export const findAverageSpeed = (racers: Racer[]): number => {
    let totalSpeed = 0
    if (racers.length === 0) return 0
    for (let i = 0; i < racers.length; i++) {
        totalSpeed += racers[i].speed
    }
    const averageSpeed = totalSpeed / racers.length
    return averageSpeed
}

export const getFasterRacer = (racerA: Racer, racerB: Racer): Racer | null => {
    if (racerA.speed > racerB.speed) return racerA
    else if (racerB.speed > racerA.speed) return racerB
    else return null
}