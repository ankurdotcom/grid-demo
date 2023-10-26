const Router = require ('express');

const router = Router();


router.get("/", (req, res) => res.json({message : "Hello This is grid Demo"}))

router.get("/health", (req, res) => 
    res.status(200).json({message: "Everythid is good"})
)

export default router;