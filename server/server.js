const Hapi = require('hapi');
const settings = require('../config/default.json');

const routes = require('./routes');

var server = new Hapi.Server({
    connections:{
        routes:{
            cors:settings.cors
        }
    }
});
server.connection({port:3000, host:settings.host});


// Add routing
server.route(routes);

server.start(function(){
    console.log('Server started at: ' + server.info.uri);
});

