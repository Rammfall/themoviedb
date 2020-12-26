const express = require('express')
const { join } = require('path')

const app = express()
const { PORT } = process.env

app.get(/^((?!(.js|.css)).)*$/, (req, res) => {
  res.sendFile(join(`${__dirname}/dist/index.html`))
})
app.use(express.static('dist'))
const port = PORT || 3000
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on ${port} port\n`))
