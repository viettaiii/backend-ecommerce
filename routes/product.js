const router = require("express").Router();
const {
    getProducts,getProduct,createProduct
 } = require('../controllers/product')
router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct);

module.exports = router;
