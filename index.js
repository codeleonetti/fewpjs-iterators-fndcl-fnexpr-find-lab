// const superbowlWin = (recordArray) => {
//     let team = {
//         year: '1969'
//         result: 'w'
//     }
//     team.find
//        // return this.team;

// }

function superbowlWin(recordArray){
    // console.log("testing to see array")
     //console.log(recordArray[1]["result"] == 'w')
    //recordArray.find(element => console.log(`this is the element: ${element}`) > 10);
    let winningRecord
    recordArray.find(element => {
       if (element['result'] === "W")
    {
        winningRecord = element['year'];
    }
        
    });
    return winningRecord
}


//let record = team.find(result => result === year);