const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternEmail = /\w+@\w+.\w+.\w+/g
const matchEmail = banco.match(patternEmail)
console.log(matchEmail);
