
module.exports = simpleFunction

function simpleFunction() {
    return {
        getSum: getSum
    }
    function getSum(req, res) {
        let a = req.body.a
        let b = req.body.b
        let sum = a + b;
        console.log(sum);
        res.json(sum);
    }
};