//imports
import express from 'express'
import cors from 'cors';
import { router } from './routes/router'

//app
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
    console.log('Server running on port 3000')
});