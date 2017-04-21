const express = require('express');

const app = express();

app.listen(3000,() => console.log('Server started!'));

app.get('/', (request, response) => response.send('XIN CHAO CAC BAN!'));

app.get('/show', (req, res) => res.send('<h1>BAN DANG O TRONG ROUTE SHOW</h1>'));

// id = 10, id = 11

app.get('/info/:id', (req, res) => {
    const { id } = req.params;
    res.send('SAN PHAM ' + id);
});

app.get('/cong/:soA/:soB', (req, res) => {
    const { soA, soB } = req.params;
    res.send(+soA + +soB + '');
});

app.get('/chao/:ten/:tuoi', (req, res) => {
    const { ten, tuoi } = req.params;
    res.send(`Chao ban ${ten}, 
    ${tuoi} tuoi!`);
});

// app.get('/chao/')

//http://localhost:3000/tinh/cong/4/5
class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    show() {
        let pt;
        switch (this.tenPhepTinh) {
            case 'cong': { 
                pt = '+';
                break;
            }
            case 'tru': { 
                pt = '-';
                break;
            }case 'nhan': { 
                pt = '*';
                break;
            }default: { 
                pt = '/';
                break;
            }
        }
        const veTrai = `${this.soA} ${pt} ${this.soB}`;
        return `${veTrai} = ${ eval(veTrai) }`;
    }
}
const pt1 = new PhepTinh(10, 4, 'nhan');
console.log(pt1.show());