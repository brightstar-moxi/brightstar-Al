import express from 'express';
import * as dotenv from 'dotenv';
import cors from cors;
import {Configuration, OperAIApi} from 'openai';

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAL_API_KEY,
})


const openai = new OpenAIApi(configuration);