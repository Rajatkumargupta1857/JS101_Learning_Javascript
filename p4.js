// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration
let obj = {
  "Name": `ππ°πΉπ°π`,
  "age": `ππ`,
  "School": `πΌπ°ππ°πΈ`,
  "Section": `π΅π22_0478`,
  "Roll_No": `π`,
  "Marks_Math": `ππ`,
  "Marks_Physics": `π π `,
  "Marks_Chemestry": `π π `

}
for (let a in obj) {
  console.log(a + "-" + obj[a])
}