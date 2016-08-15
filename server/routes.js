module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    }, {
        method: 'GET',
        path: '/api/user',
        handler: function (request, reply) {
            console.log("HELLLLOOOOOO");
            reply('Hello, ' + encodeURIComponent(request.params.id) + '!');
        }
    }
];