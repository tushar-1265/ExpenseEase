const ExpenseSchema=require('../models/ExpenseModel')
exports.addExpense=async (req,res)=>{
    const{title,amount,category,description,date}=req.body

    const income=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title|| !amount || !category || !description || !date)
        return res.status(400).json({message:"All fields are required"})

        if(amount<=0 || !amount===Number)
        return res.status(400).json({message:"Amount must be positive number"})

        await income.save()
        res.status(200).json({message:"Expense added"})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

exports.getExpense=async (req,res)=>{
    try
    {
    const incomes=await ExpenseSchema.find().sort({createdAt:-1})
    res.status(200).json(incomes)
    }
    catch(error)
    {
        res.status(500).json({message:"Server Error"})
    }
}
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await ExpenseSchema.findByIdAndDelete(id);
        if (!income) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json({ message: "Expense deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server Error" });
    }
}



