// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration
let obj = {
  "Name": `🅁🄰🄹🄰🅃`,
  "age": `𝟚𝟞`,
  "School": `🄼🄰🅂🄰🄸`,
  "Section": `🄵🅆22_0478`,
  "Roll_No": `𝟙`,
  "Marks_Math": `𝟟𝟟`,
  "Marks_Physics": `𝟠𝟠`,
  "Marks_Chemestry": `𝟠𝟠`

}
for (let a in obj) {
  console.log(a + "-" + obj[a])
}