const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { loadData } = require("../../data")

module.exports = (req, res) => {
    const products = loadData()
    productsInsale = products.filter(p => p.category === "in-sale")
    productsVisited = products.filter(p => p.category === "visited")

    res.render("others/home", {productsInsale,productsVisited,toThousand})
}