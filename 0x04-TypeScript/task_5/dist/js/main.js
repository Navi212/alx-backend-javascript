// Task 11
// Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:
//  Each interface defines a number named credits
//  Add a brand property to each interface in order to uniquely identify each of them
// Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:
// Each function takes two arguments subject1 and subject2
// sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
// Each function sums the credits of the two subjects
function sumMajorCredits(subject1, subject2) {
    var majorCredit = subject1.credits + subject2.credits;
    return "MajorCredits: ".concat(majorCredit);
}
function sumMinorCredits(subject1, subject2) {
    var minorCredit = subject1.credits + subject2.credits;
    return "MinorCredits: ".concat(minorCredit);
}
//# sourceMappingURL=main.js.map