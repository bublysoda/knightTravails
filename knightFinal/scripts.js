function knightMoves(x0, y0, xEnd, yEnd){
    let start = [x0, y0]
    let end = [xEnd, yEnd]
    let allMoves = []
    let correctMap = []
    let allDone = 0
    let incorrectCoords = 0
    let scannerAmount = 0
    let coordInfo = {exactCoords:start, scannerTimesRan:scannerAmount}
    allMoves.push(coordInfo)

    function runThrough(x0, y0){
        scannerAmount++
        function moveOne(x0, y0){
            let xMod = x0 + 2
            let yMod = y0 + 1
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveTwo(x0, y0){
            let xMod = x0 + 2
            let yMod = y0 - 1
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveThree(x0, y0){
            let xMod = x0 - 2
            let yMod = y0 + 1
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveFour(x0, y0){
            let xMod = x0 - 2
            let yMod = y0 - 1
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveFive(x0, y0){
            let xMod = x0 + 1
            let yMod = y0 + 2
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveSix(x0, y0){
            let xMod = x0 + 1
            let yMod = y0 - 2
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveSeven(x0, y0){
            let xMod = x0 - 1
            let yMod = y0 + 2
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }
        }
        function moveEight(x0, y0){
            let xMod = x0 - 1
            let yMod = y0 - 2
            if(xMod > 7 || xMod < 0 || yMod > 7 || yMod < 0){
                incorrectCoords++
            }
            else if(xMod == xEnd && yMod == yEnd){
                alert('The correct coordinates have been found.  Please hold...')
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
                console.log(allMoves)
                allDone++
            }
            else{
                let coords = [xMod, yMod]
                let previousCoords = [x0, y0]
                let coordInfo = {exactCoords:coords, scannerTimesRan:scannerAmount, pastCoord: previousCoords}
                allMoves.push(coordInfo)
            }

        }

        moveOne(x0, y0)
        if(allDone == 1)return
        moveTwo(x0, y0)
        if(allDone == 1)return
        moveThree(x0, y0)
        if(allDone == 1)return
        moveFour(x0, y0)
        if(allDone == 1)return
        moveFive(x0, y0)
        if(allDone == 1)return
        moveSix(x0, y0)
        if(allDone == 1)return
        moveSeven(x0, y0)
        if(allDone == 1)return
        moveEight(x0, y0)

        scanner()

    }



    let arrayUp = 1
    function scanner(){
        if(allDone == 0){
            let allMovesScanner = allMoves
            let nextObj = allMovesScanner[arrayUp]
            let NextArray = nextObj.exactCoords
            NextX = NextArray[0]
            NextY = NextArray[1]
            arrayUp++
            runThrough(NextX, NextY)
            
        }
        if(allDone == 1){
            alert('The end has been found!')
            console.log('The end has been found!')
            printSolution()
            allDone++
            return
        }
    }

    runThrough(x0, y0)

    function printSolution(){
        let arrayLength = allMoves.length //technically dont need to do this, but it looks neater
        let mod = allMoves.length % 8
        console.log(`The mod of the whole array is ${mod}.  The total array length of the array is ${arrayLength}.  The scanner function has been called ${arrayUp} times.  The amount of incorrect coordinates is ${incorrectCoords}`)
        let finalObj = allMoves[arrayLength - 1]
        let finalCoordsPast = finalObj.pastCoord
        correctMap.push(end)
        correctMap.push(finalCoordsPast)
        function search(coordInput){
            //coordInput is the past coords of the object passed in, while compareCoords are the exact coords of the object it is searching for
            if(arrayLength == allMoves.length){arrayLength--}
            let compareObj = allMoves[arrayLength - 1]
            let compareCoords = compareObj.exactCoords
            let inputX = coordInput[0]
            let inputY = coordInput[1]
            let compareX = compareCoords[0]
            let compareY = compareCoords[1]
            if(inputX != compareX || inputY != compareY){
                arrayLength--
                search(coordInput)
            }
            if(inputX == compareX && inputY == compareY){
                let passIn = compareObj.pastCoord
                correctMap.push(passIn)
                if(passIn[0] == x0 && passIn[1] == y0){
                    alert('Everything works!')
                    correctMap.reverse()
                    console.log(correctMap)
                    return
                }
                search(passIn)
            }
        }
        search(finalCoordsPast)

    }
}
    





    //Copy/paste these into the browser for testintg:
    //One move solution:    knightMoves(0, 0, 2, 1)
    //One move solution:    knightMoves(1, 2, 0, 0)
    //Two move solution:    knightMoves(0, 0, 4, 2)
    //Two move solution:    knightMoves(0, 0, 3, 3)
    //Four move solution:   knightMoves(0, 0, 5, 7)
    //The Ultimate Solution: knightMoves(0, 0, 7, 7)