import mongoose from "mongoose";

async function connect() {
    try {
       await mongoose.connect("mongodb+srv://HannahFreitas:07042805@cluster0.ppvmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
       console.log("Database connected!")
    } catch (error) {
        console.log(error);
    }
}

export default connect;