const Router = require ('express');
const router = Router();
const path = require('path');



router.get("/hello", (req, res) => res.json({message : "Hello This is grid Demo"}))

router.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname+'/../pages/home.html'));
})

router.get("/home", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname+'/../pages/home.html'));
})

router.get("/newEntry", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(path.join(__dirname+'/../pages/newEntryForm.html')));
})

router.get("/newEntrySave", (req, res) => {
    res.status(200).end("Saved Successfully");
})

router.get("/reports", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(path.join(__dirname+'/../pages/reports.html')));
})

router.get("/health", (req, res) => 
    res.status(200).json({message: "Everythid is good"})
)

module.exports = router