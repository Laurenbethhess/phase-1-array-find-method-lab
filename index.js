
function superbowlWin(array) {
    const winner = array.find(element => element.result === "W") 
    if (winner) {
        return winner.year
    }
}