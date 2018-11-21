import express from 'express';
import MongoClient from 'mongodb';
import 'babel-polyfill';

let moviesRouter = express.Router();

function router(nav){
    moviesRouter.route('/')
        .get((req,res) => {
            const url = 'mongodb://localhost:27017';
            const dbName = 'acadgild_aug';
            (async function mongo(){
                let client;
                try{
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);

                    const col = await db.collection('books');
                    const movies = await col.find().toArray();
                    res.render('movies',
                        {title:'Movies Page', 
                        nav,
                        movies})
                }
                catch(err){
                    console.log(err)
                }
                client.close();
            }())

        })
            
    moviesRouter.route('/:id')
        .get((req,res) => {
            const {id} = req.params;
            const url = 'mongodb://localhost:27017';
            const dbName = 'acadgild_aug';
            (async function mongo(){
                let client;
                try{
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const col = await db.collection('books');
                    const movieDetails = await col.findOne({_id:id});
                    res.render('details',
                        {title:'Details Page for '+ id, 
                        nav:nav,
                        movies:movieDetails})
                }
                catch(err){
                    console.log(err)
                }
                client.close();
            }())
           
        });
    
    return moviesRouter
}


module.exports= router;


/*

iffi

function add(a,b){
    return a+b
}
add(1,2)

(function add(a,b){
    return a+b
}())
*/
            