const mongoose = require("mongoose");

// user schema
const transactionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    transactionType:{
        type:String,
        enum:["Income","Expenses"],
        required: true,            // should be true
    },
    amount:{
        type:Number,
        required: true,
    },
    category:{
        type:String,
        enum:[
            "Personal",
            "Food",
            "Transportation",
            "Entertainment",
            "Shopping",
            "Utilities",
            "Health",
            "Travel",
            "Education",
            "Groceries",
            "Bills",
            "Uncategorized",
            "Building",
        ],
        required: true,                // should be true
    },
    color:{
        type:String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    notes:{
        type:String,
        requierd:true,
    },
},
{
    timestamps: true,
    toJSON: {virtuals: true},
}
);


// model
const Transaction = mongoose.model("Transaction",transactionSchema);

module.exports = Transaction;