    const express = require('express'); 
    const cookieParser = require('cookie-parser');
    const app = express();

    app.use(cookieParser());

    app.get('/', (req,res) => {
        res.sendFile(__dirname + '/public/index.html');
    })

    app.get('/ctf_1', (req, res) => {
        res.cookie('age', 'age>19');
        res.cookie('order', '5,3,2,1,4');
        res.cookie('name_string', 'd,m,n,a,i');
        res.cookie('get', 'query');

        const name = req.query.name;
        const age = Number(req.query.age);

        if(age > 19){
            if(name === 'inmda'){
                return res.send('FLAG{51234}');
            } else{
                return res.send('String Fail');
            }
        } else{
            return res.send('Age Fail');
        }
    });

    app.get('/ctf_2', (req, res) => {
        res.cookie('letter', 'hello i\'m YOUSOL\'s CTF Developer. I have a id');
        res.cookie('id', '');

        if(req.cookies.id === 'YOUSOL'){
            return res.send('FLAG{643175}');
        } else{
            return res.send('No way :(');
        }
    });

    app.listen(3000, () => console.log('listening on 3000'));

