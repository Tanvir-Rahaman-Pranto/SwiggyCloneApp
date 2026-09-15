import * as express from 'express';

let app: express.Application = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


function xyz(){
    return true;
}

function abc(){
    return false;
}

function result():Promise<string>{
    return new Promise((resolve, reject) => {
        if(xyz()){
            resolve('xyz is true');
        }else if (abc()){
            resolve('abc is true');
        }else{
            reject('Neither xyz nor abc is true');
        }
    });
}
/*
result().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});*/

async function final(){
    try{
        const resultValue = await result();
        return resultValue;
    }catch(error){
        return error;
    }
}

final().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});