module.exports = [
    {
        method: 'POST',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    }, {
        method: 'POST',
        path: '/api/user',
        handler: function (request, reply) {
            console.log("HELLLLOOOOOO");
            reply('Hello, ' + encodeURIComponent(request.params.id) + '!');
        }
    }
];