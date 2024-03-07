const { loadData, saveData } = require("../../data");

module.exports = (req, res) => {
    const {id} = req.params
    const products = loadData()

    const productLessOne = products.filter(p=> p.id !== +id);
    saveData(productLessOne);
    res.redirect("/productos")
    
}