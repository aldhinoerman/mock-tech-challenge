function warnTheSheep(queue) {
    // your code here
    if (queue[queue.length -1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        var index = queue.indexOf((x) => x == 'wolf' );
        return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`;
    }
}


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");