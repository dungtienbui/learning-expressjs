const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');

// const sass = require('sass');
// const result = sass.compile(path.join(__dirname, 'resources/scss/app.scss'));
// console.log(result)

const app = express()
const port = 3000


app.use(morgan('combined'))

// template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})