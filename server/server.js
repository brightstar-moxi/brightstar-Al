import express from 'express';
import * as dotenv from 'dotenv';
import cors from cors;
import {Configuration, OperAIApi} from 'openai';

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAL_API_KEY,
})


const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message:'Hello from brightstar'
    })
});
app.post('/', async (req,res) => {
    try {
        const prompt = req.body.prompt;

        const response = await openai.createCompletion({
            
        })
    } catch (error) {

    }
})