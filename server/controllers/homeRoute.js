const home = async (req, res) => {
    try {
        res.status(200).json({
            message: "Hello developers from GFG",
        });
    }
    catch (error) {
        console.error(error);
    }
}
module.exports=home;

