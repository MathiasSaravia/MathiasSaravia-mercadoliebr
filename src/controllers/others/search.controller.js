const { loadData } = require("../../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const {keywords} = req.query
    const products = loadData()
    const productFilter = products.filter(
        (p) => p.name.toLowerCase().includes(keywords.toLowerCase()) || p.description.toLowerCase().includes(keywords.toLowerCase()) )    
    res.render("others/results", {
        products : productFilter,keywords,toThousand
    })
}