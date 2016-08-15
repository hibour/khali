var khaliData = require('./data/payload.json');

module.exports = [
    {
        method: 'POST',
        path: '/',
        handler: function (request, reply) {
            console.log("HIIIIII");
            reply('Hello, world!');
        }
    }, {
        method: 'POST',
        path: '/api/user',
        handler: function (request, reply) {
            var reqBody = JSON.parse(request.payload);
            reply(khaliData.users[reqBody.id]);
        }
    }
];