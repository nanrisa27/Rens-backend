import express, { Router } from "express";

const router = express.Router();

router.get('/inventory',(res, req)=>{

    res.send('10')
});

export default Router