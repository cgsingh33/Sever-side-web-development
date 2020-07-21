var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solveing for rect for l= "+ l +" b= "+b)
    if(l<=0 || b<=0){
        console.log("invalid values")
    }
    else{
        console.log("perimeter is "+ rect.perimeter(l,b))
        console.log("area is "+ rect.area(l,b))
    }
}

solveRect(2,4)
solveRect(0,1)
solveRect(10,10)
solveRect(-2,9)
