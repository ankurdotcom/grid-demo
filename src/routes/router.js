const Router = require ('express');
const router = Router();
const path = require('path');



router.get("/hello", (req, res) => res.json({message : "Hello This is grid Demo"}))

router.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(path.join(__dirname+'/../pages/index.html')));
})

router.get("/health", (req, res) => 
    res.status(200).json({message: "Everythid is good"})
)

module.exports = router