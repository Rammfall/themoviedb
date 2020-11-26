const express = require('express')
const { join } = require('path')

const app = express()
const { PORT } = process.env

app.get(/^((?!(.js|.css)).)*$/, (req, res) => {
  res.sendFile(join(`${__dirname}/dist/index.html`))
})
app.use(express.static('dist'))
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on ${PORT} port\n`))
