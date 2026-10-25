const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB").then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log(err);
});
app.get('/students',async(req,res)=>{
    const data=await mongoose.connection.db.collection("students").find().toArray()
res.json(data);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});