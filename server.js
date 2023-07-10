const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'Node'
  });
  

const app = express()
app.use(cors('*'))

    app.get("/:e_name",(request,response)=>{
    
        connection.query(`select * from Employee_Tb where e_name='${request.params.e_name}'`,(error,result)=>{
            if(error==null){
                var data =JSON.stringify(result)
                response.setHeader("Content-Type","application/json");
                response.write(data);
            }
            else{
                console.log(error);
                        response.setHeader("Content-Type","application/json");
                        response.write(error)
            }
            response.end();
        })
    })

    // app.post("/",(request,response)=>{
    //     connection.query(`insert into Employee_Tb  values (${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`,(error,result)=>{
    //         if(error==null){
    //             var data =JSON.stringify(result)
    //             response.setHeader("Content-Type","application/json");
    //             response.write(data);
    //         }
    //         else{
    //             console.log(error);
    //                     response.setHeader("Content-Type","application/json");
    //                     response.write(error)
    //         }
    //         response.end();
    //     })
    // })


    app.post("/",(request,response)=>{
        var query=`insert into Employee_Tb values  (${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}',${request.body.emp_id},'${request.body.dname}','${request.body.doj}')`
        connection.query(query,(error,result)=>{
            if(error==null){
                var data=JSON.stringify(result);
                response.setHeader("Content-Type","application/json");
                response.write(data);
            }
            else{
                response.write(error);
            }response.end();
        })
    })

    app.put("/:id",(request,response)=>{
        var query=`update Employee_Tb values  set dname='${request.body.dname}',doj='${request.body.doj}' where id=${request.params.id}`
        connection.query(query,(error,result)=>{
            if(error==null){
                var data=JSON.stringify(result);
                response.setHeader("Content-Type","application/json");
                response.write(data);
            }
            else{
                response.write(error);
            }response.end();
        })
    })


    
// app.delete("/:id",(request,response)=>{
//     var query=`delete   Employee_Tb where id=${request.body.ENo}`
//     connection.query(query,(error,result)=>{
//         if(error==null){
//             var data=JSON.stringify(result);
//             response.setHeader("Content-Type","application/json");
//             response.write(data);
//         }
//         else{
//             response.write(error);
//         }response.end();
//     })
// })

app.listen(5000, () => {
  console.log('server started on port 5000')
})














// app.use(express.json()); 




