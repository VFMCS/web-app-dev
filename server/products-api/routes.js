const { Router } = require('express');
const controller = require('./controllers.js');

const router = Router();

router.get("/",controller.getAllProducts);
router.post("/",controller.insertProd);
router.get("/:vendor_id", controller.getProductByVendorID);
//router.post("/", controller.insertProd)

module.exports = router;
