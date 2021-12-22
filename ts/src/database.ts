import mongoose from "mongoose";

async function connect() {
    try {
       await mongoose.connect("mongodb+srv://janainaLopes:987928739@cluster0.remn1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
       console.log("Database connected!")
    } catch (error) {
        console.log(error);
    }
}

export default connect;