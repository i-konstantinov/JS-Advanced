function info(worker) {
    if (worker.dizziness) {  
        let water = (worker.weight * 0.1) * worker.experience;
        worker.levelOfHydrated += water;
        worker.dizziness = false;
    }

    return worker;
}

console.log(info({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }))