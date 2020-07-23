var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rect for l= "+ l +" b= "+b)
    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("error ", err.message)
        }
        else{
            console.log("the area is: "+ rectangle.area())
            console.log("the perimeter is: "+ rectangle.perimeter())
        }
    })
    console.log("this is after rect()")
}

solveRect(2,4)
solveRect(0,1)
solveRect(10,10)
solveRect(-2,9)
