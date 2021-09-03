// Code your solutions in this file


function writeCards(name, event) {
    let out = []
    for (let i = 0; i < name.length; i++) {
        out.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return out
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}