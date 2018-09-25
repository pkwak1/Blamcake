const app = require('express')()

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production')
    app.use(express.static(path.join(__dirname, '../client/build')))

app.listen(port, () => console.log(`server running on port ${port}`))
