import React from 'react';
import './App.css';
var jwt = require('jsonwebtoken');
var fs = require('browserify-fs');

const path = require('path');


export default class App extends React.Component {
    render() {
        const token =  jwt.sign({
            data: 'foobar',
            cpf: '437437728-09'
        }, '123', { expiresIn: 30000 });
        console.log(__dirname)
        fs.readFile(__dirname +'private.key', 'utf-8', function(err, data) {
            console.log(data);
        });
        return (
            <div className="App">
                <div style={{marginTop : '50px'}}>
                    {token}
                </div>
                <div style={{marginTop : '50px'}}>
                    {/*{tokenRs256}*/}
                </div>
            </div>
        );
    }
}

// function App() {
//
//    const token =  jwt.sign({
//         data: 'foobar',
//         cpf: '437437728-09'
//     }, '123', { expiresIn: 30000 });
//
//    console.log(fs)
//     fs.readFile(
//         path.resolve(__dirname, './files/test.txt'),
//         'utf-8',
//         (err, data) => {
//             if (err) throw err;
//             values = data.toString().split('\n');
//
//             const listItems = values.map(val => <p>{val}</p>);
//             return callback(listItems);
//         }
//     );
//     // var tokenRs256 = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
//
//   return (
//     <div className="App">
//         <div style={{marginTop : '50px'}}>
//             {token}
//         </div>
//         <div style={{marginTop : '50px'}}>
//             {/*{tokenRs256}*/}
//         </div>
//     </div>
//   );
// }
//
// export default App;
