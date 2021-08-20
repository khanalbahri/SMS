import jwt from "jsonwebtoken";


const secret = "khanAlbahri";

const auth = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        var decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token,secret);
            req.userId = decodedData?.id;
        }
        else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();

    } catch (error) {
        res.status(500).json(error)
    }
}

export default auth;