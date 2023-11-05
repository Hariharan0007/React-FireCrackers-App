// const express = require('express');
// const cors = require('cors');
// const apiRoutes = require('./routes');
// const { sequelize, connectToDb} = require('./db');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/api',apiRoutes);


// app.get('/',(req,res)=>{
//     res.status(200).json({"MESG":"Welcome to learn sequlize"});
// })


// const PORT = 5000
// app.listen(PORT ,async ()=>{
//     console.log("Server is running in the port "+PORT);
//     await connectToDb();
// })

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, connectToDb } = require('./db');
const crackerRoutes = require('./routes/crackerRoutes');
const saleRoutes = require('./routes/saleRoutes');

const app = express();
app.use(bodyParser.json());

(async () => {
    await connectToDb();

    // Set up routes
    app.use('/crackers', crackerRoutes);
    app.use('/sales', saleRoutes);

    app.get('/',(req,res)=>{
        res.status(200).json({"MESG":"WELCOME API"})
    })

    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();
