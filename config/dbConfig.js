const { default: mongoose } = require("mongoose")

async function DbConnect(){
  
   await mongoose.connect(process.env.DB_URL).catch((err)=>{
        console.log(err)
    })
}

module.exports = DbConnect