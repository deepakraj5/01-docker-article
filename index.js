const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.send('Sample application Docker demo')
})


app.listen(PORT, () => console.log(`server listening on port ${PORT}`))