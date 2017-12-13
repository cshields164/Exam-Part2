var express = require('express');
var myPowers = require('../src/common/util/math/myPowers');

var app = express();

app.set('views', './src/views');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
        name: 'charles',
        lastname: 'shields'
    };
    res.render('./pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var inpNumber = 2;
    var data2template = {
        head: { title: 'Square page' },
        inpNumber: inpNumber,
        resultNumber: myPowers.toSquare(inpNumber),
    };
    res.render('pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var inpNumber = 3;
    var data2template = {
        head: { title: 'Cube page' },
        inpNumber: inpNumber,
        resultNumber: myPowers.toCube(inpNumber),
    };
    res.render('pages/cube.ejs', data2template);
});

app.get('/about', function(req, res) {
    res.status(200).render('pages/about.html');
});

var apiV1HelpRouter = express.Router();
apiV1HelpRouter.route('/help')
    .get((request, response) => { response.send('<h3>/api/v1/help got GET - text/html directly returned from server.js</h3>'); })
    .post((request, response) => { response.send('<h3>/api/v1/help got POST - text/html directly returned from server.js</h3>'); })
    .put((request, response) => { response.send('<h3>/api/v1/help got PUT - text/html directly returned from server.js</h3>'); });

app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

var server = app.listen(9016, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});

/*module.exports = {
    toString: function(inpNumber) {
        var numberStr = "";
        if (typeof inpNumber === "number") {
            numberStr = inpNumber.toString();
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            numberStr = inpNumber;
        }
        return numberStr;
    },

    toNumber: function(inpNumber) {
        var num = NaN;
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }
        return num;
    },

    add2numbers: function(inpNumber1, inpNumber2) {
        var sum = NaN,
            num1 = NaN,
            num2 = NaN;
        if (typeof inpNumber1 === "number") {
            num1 = inpNumber1;
        } else if (typeof inpNumber1 === "string" && Number(inpNumber1) === "number") {
            num1 = Number(inpNumber1);
        }

        if (typeof inpNumber2 === "number") {
            num2 = inpNumber2;
        } else if (typeof inpNumber2 === "string" && Number(inpNumber2) === "number") {
            num2 = Number(inpNumber2);
        }

        return num1 * num1;
    }
}*/