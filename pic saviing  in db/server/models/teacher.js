import mongoose from "mongoose";

function formattedDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10){
        dd = "0"+dd;
    }
    if(mm<10){
        mm = "0"+mm;
    }

    var date = `${yyyy}-${mm}-${dd}`;
    return date;
}


const teacherSchema = mongoose.Schema({
    userId: {type:String,required:true},
    userName: {type:String,required:true},
    teacherName: {type:String,required:true},
    qualification:{type:String,required:true},
    role:{type:String,required:true},
    phoneNumber:{type:Number},
    email:{type:String},
    address:{type:String,required:true},
    otherInfo: {type:String},
    status: String,
    birthDate: {type:String,default:null},
    arrivalDate: {type:String,default:null},
    withdrawnDate: {type:String,default:null},
    teacherImage: String,
    date: {type:String,default: formattedDate()}
})


export default mongoose.model("Teacher",teacherSchema);