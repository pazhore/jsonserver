const jsonserver=require("json-server");
const todoappserver=jsonserver.create();
const router =jsonserver.router("db.json");
const middleware=jsonserver.jsonserver.default();;
const port=4000 || process.env.PORT;
todoappserver.use(middleware)
todoappserver.use(router)
todoappserver.use(router)
todoappserver.listen(port,()=>{
    console.log("server created successfulluy @ port $(port)")
})