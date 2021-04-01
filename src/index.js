import express from 'express';
import routes from './routes'; 
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
let home = (req, res) => res.send('')
let studenti = (req, res) => res.send(lista_studenti)
let first = (req, res) => res.send(lista_studenti[0])
let last = (req, res) => res.send(lista_studenti[4])

app.get('/', home)
app.get('/studenti', studenti)
app.get('/first', first)
app.get('/last', last)
let lista_studenti = [
    {jmbag: "32553276532", ime: "Barbara", prezime: "Zeljeznik", godina: "treca"},
    {jmbag: "89652634353", ime: "Leonarda", prezime: "Milevoj", godina: "treca"},
    {jmbag: "94367346563", ime: "Jan", prezime: "Tudan", godina: "treca"},
    {jmbag: "27835967289", ime: "Petar", prezime: "Peric", godina: "prva"},
    {jmbag: "23895723756", ime: "Marija", prezime: "Maric", godina: "druga"},
]

console.log(lista_studenti[0])
app.listen(port, () => console.log(`Slušam na portu ${port}!`))
console.log(lista_studenti[4])