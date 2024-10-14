const http=require('http');

const server=http.createServer((req,res)=>{
    const {method,url}=req;

    res.setHeader("Content-Type","application/json");

    switch(method){
        case "GET":
            if(url==='/'){
                res.statusCode=200;
                res.end(JSON.stringify({message:"This is a GET request"}));
            }
            break;
        case "POST":
            if(url==='/'){
                let body="";
                req.on("data",(chunk)=>{
                    body+=chunk.toString();
                });
                req.on("end",()=>{
                    req.statusCode=201;
                    res.end(
                        JSON.stringify({
                            message:"Data received via POST",
                            data:JSON.parse(body)
                        })
                    );
                })

            }
            break;
        case "PUT":
            if(url==='/'){
                let body="";
                req.on("data",(chunk)=>{
                    body+=chunk.toString();
                });
                req.on("end",()=>{
                    req.statusCode=200;
                    res.end(
                        JSON.stringify({
                            message:"Data updated via POST",
                            data:JSON.parse(body)
                        })
                    );
                })
            }
            break;
        default:
            console.log('error');
            

    }
});

const port=5000;
server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
