const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use(express.json())

app.post('/api/data', (req, res) => {
    const reqestData = {...req.body}
    
    fs.writeFile('./data.json', JSON.stringify(reqestData), err => {
        if (err) {
            throw err
        }
        
        fs.readFile('./data.json', 'utf-8', (err, data) => {
           if (err) {
            throw err
        }
        
        res.status(201).json(data)
    })
    })
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen('3333', () => console.log('Server has been started on port 3333'))
