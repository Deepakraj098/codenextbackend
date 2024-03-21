const express=require('express');
const router=express.Router();
const database=require('../databaseConnection');

function errorHandler()
{
    res.status(500).send('Server Error');
}

router.post('/submitCode',(req,res)=>{
    const {userName,lang,stdin,code} = req.body;
    database.query(`INSERT INTO CodeDetails (UserName,language,stdin,code) VALUES ('${userName}','${lang}','${stdin}','${code}')`,(error,result)=>{
        if(error)
        {
            errorHandler();   
        }
        else
        {
            res.status(200).send('Data saved Successfully');
        }
    });
});

router.get('/getSubmission',(req,res)=>{
    database.query(`SELECT * FROM CodeDetails`,(error,result)=>{
        if(error)
        {
            errorHandler();
        }
        else
        {
            res.status(200).json({data:result});
        }
    });
});

module.exports=router;