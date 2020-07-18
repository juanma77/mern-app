const express = require('express');
const app = express();

// Port settings
app.set( 'port', process.env.PORT || 8000 ); 



// Usamos npm run dev para iniciar el server de desarrollo; como no es un script de start, no podemos usar el npm start o npm dev
app.listen( app.get('port') , () =>{
    console.log(`Server listenning on port ${ app.get('port') }!`);
});