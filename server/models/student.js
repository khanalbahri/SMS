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


const studentSchema = mongoose.Schema({
    userId: {type:String,required:true},
    userName: {type:String,required:true},
    studentName: {type: String,required:true},
    fatherName: {type:String,required:true},
    birthDate: {type:String,required:true},
    classAdmittedIn: {type:String,required:true},
    classStudyingIn: {type:String,required:true},
    phoneNumber: {type:Number,required:true},
    address: {type:String,required:true},
    status: Number,
    withdrawnDate: {type:String,default:null},
    studentImage: String,
    date: {type:String,default: formattedDate()}
})

export default mongoose.model("Student",studentSchema);