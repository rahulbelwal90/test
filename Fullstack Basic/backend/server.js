// In javascript there are two way of importing :Common js  :Module js

import express from 'express'  //module js way of import

const app = express()

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// })

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is joke'
        },
        {
            id:2,
            title:'A joke',
            content:'This is second joke'
        },
        {
            id:3,
            title:'A joke',
            content:'This is third joke'
        },
        {
            id:4,
            title:'A joke',
            content:'This is fourth joke'
        },
        {
            id:5,
            title:'A joke',
            content:'This is fifth joke'
        },

    ];
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})