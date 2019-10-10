import React from 'react';
import './App.css';
var jwt = require('jsonwebtoken');

function App() {

   const token =  jwt.sign({
        data: 'foobar',
        cpf: '437437728-09'
    }, '42035255', { expiresIn: 900000 });

  return (
    <div className="App">
        ola
        <div style={{marginTop : '50px'}}>

            {token}
        </div>
    </div>
  );
}

export default App;
