const express = require('express')

const app = express()
const { PORT } = process.env

app.use(express.static('dist'))

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on ${PORT} port\n`))
