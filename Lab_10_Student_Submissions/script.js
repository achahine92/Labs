// ARRAY
const submissions = [
    {name: "Jane", score: 95, passed: true},
    {name: "Joe", score: 77, passed: true},
    {name: "Jack", score: 59, passed: false},
    {name: "Jill", score: 88, passed: true}
]
console.log(submissions)

// ADD SUBMISSION TO ARRAY
const addSubmission = (submissions, newName, newScore) => {
    const newSubmission = {
        name: newName, 
        score: newScore, 
        passed: newScore >= 60
    }
    submissions.push(newSubmission)
}

addSubmission(submissions, "Neville", 59)
addSubmission(submissions, "Hermione", 101)
addSubmission(submissions, "Ron", 78)
console.log(submissions)

// DELETE SUBMISSION BY INDEX
const deleteSubmissionByIndex = (submissions, index) => {
    if (index >= 0 && index < submissions.length) {
        submissions.splice(index, 1)
    }
}

deleteSubmissionByIndex(submissions, 2)
console.log(submissions)

// DELETE SUBMISSION BY NAME
const deleteSubmissionByName = (submissions, name) => {
    const index = submissions.findIndex(submission => submission.name === name)
    if (index !== -1) {
        submissions.splice(index, 1)
    }
}

deleteSubmissionByName(submissions, "Joe")
console.log(submissions)

// EDIT SUBMISSION BY NAME
const editSubmissionByName = (submissions, name, newScore) => {
    const studentToEdit = submissions.find(submission => submission.name === name)
    if (studentToEdit) {
        studentToEdit.score = newScore
    }
   studentToEdit.passed = newScore >= 60
}

editSubmissionByName(submissions, "Neville", 47)
console.log(submissions)

// EDIT SUBMISSION BY INDEX
const editSubmissionByIndex = (submissions, index, newScore) => {
    if (index >= 0 && index < submissions.length) {
        submissions[index].score = newScore
        submissions[index].passed = newScore >= 60
    }
}

editSubmissionByIndex(submissions, 0, 92)
console.log(submissions)

// FIND SUBMISSION BY NAME
const findSubmissionByName = (submissions, name) => {
    const studentToFind = submissions.find(submissions => submissions.name === name)
    if (studentToFind) {
        return studentToFind
    }
}

console.log(findSubmissionByName(submissions, "Hermione"))

// FIND SUBMISSIONS BY INDEX
const findSubmissionByIndex = (submissions, index) => {
    if (index >= 0 && index < submissions.length) {
        return submissions[index]
    }
}

console.log(findSubmissionByIndex(submissions, 2))

// FIND LOWEST SCORE
const findLowestScore = submissions => {
    const allScores = submissions.map(submission => submission.score)
    return Math.min(...allScores)
}

console.log(findLowestScore(submissions))

// FIND AVERAGE SCORE
let sumOfScores = 0
let studentCount = 0
const findAverageScore = submissions => {
    for (const submission of submissions) {
        studentCount++
        sumOfScores += submission.score
    }
    return sumOfScores / studentCount
}

console.log(findAverageScore(submissions))

// FILTER PASSING SUBMISSIONS
const filterPassing = submissions => {
    return submissions.filter(submission => submission.passed === true)
}

console.log(filterPassing(submissions))

// FILTER SUBMISSIONS WITH 90+ SCORES
const filter90AndAbove = submissions => {
    return submissions.filter(submission => submission.score >= 90)
}

console.log(filter90AndAbove(submissions))


// EXTENDED CHALLENGE

// CREATE A RANGE ARRAY
const nums = [1, 2, 4, 5, 7, 8, 9, 12, 14, 16, 42]
const createRange = (start, end) => {
    return nums.filter(num => num >= start && num <= end)
}

console.log(createRange(5, 15))

// COUNT ELEMENTS IN AN ARRAY
const countElements = strs => {
    const objCount = { }
    for (const str of strs) {
        if (objCount[str]) {
            objCount[str]++
        } else {
            objCount[str] = 1
        }
    }
    return objCount
}

let strs = ["m", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"]
console.log(countElements(strs))