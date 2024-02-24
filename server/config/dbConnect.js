const mongoose = require("mongoose");

// connect
const dbConnect = async()=>{
    try{
        await mongoose.connect("mongodb+srv://ravindrasapkal2304:12345@cluster0.8faq4ft.mongodb.net/IncomeExpenseTracker?retryWrites=true&w=majority");
        console.log("Db connected Successfully");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
};

dbConnect();