//let months = [January, February, March, April, May, June, July, August, September, October, November, December]


let time = new Date()
let userNmae = prompt('Enter Your Name !')
let birthYear = +prompt('Please Enter Your Birth Year !', 2000)
let birthMonth = +prompt('Please Enter Your Birth Month !', 1)
let birthDay = +prompt('Please Enter Your Birth Day !', 1)
let nameUpperCase = userNmae.toUpperCase()

let userComBirthDay = new Date(birthYear, birthMonth - 1, birthDay)
let userBirthMilliSec = userComBirthDay.getTime()
let currentMilliSec = time.getTime()
let finalUserMilliSec = currentMilliSec - userBirthMilliSec
let finalYears = Math.trunc(finalUserMilliSec / (1000 * 60 * 60 * 24 * 365.25))
let finalMonths = Math.trunc(finalUserMilliSec / (1000 * 60 * 60 * 24 * 12))
let finalDays = Math.trunc(finalUserMilliSec / (1000 * 60 * 60 * 24))

alert(`Dear ${nameUpperCase} ! Thanks To Give Information. \nYou are ${finalYears} Years & \n${finalMonths} Months & \n${finalDays} Days Old.` )
