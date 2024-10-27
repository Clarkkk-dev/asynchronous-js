

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true;

            if(preHeatOven) {
                resolve("Preheat oven to 180deg.");
            } else {
                reject("Task 1 failed!")
            }
        }, 1000)
    })
}


const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = true;

            if(addChoco) {
                resolve("Place butter and chocolcate chips, stir until melted and smooth.");
            } else {
                reject("Task 2 failed!")
            }
        }, 1000)
    })
}

const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true;

            if(addSaltFlour) {
                resolve("Add flour, cocoa and salt and stir until smooth.");
            } else {
                reject("Task 3 failed!")
            }
        }, 1000)
    })
}

const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true;

            if(bakeMixture) {
                resolve("Bake for 24 minutes.");
            } else {
                reject("Task 4 failed!")
            }
        }, 1000)
    })
}

const bakeChocolateBrownies = async () => {

    try{
        const task1 = await preHeatOven();
        console.log(task1);
    
        const task2 = await addSugarAndChocoChips();
        console.log(task2);
    
        const task3 = await addFlourCocoaAndSalt();
        console.log(task3);
    
        const task4 = await bakeMixture();
        console.log(task4);
    
        console.log("Enjoy your Brownies!")
    } catch(err) {
        console.log(err);
    }
   
}

bakeChocolateBrownies();