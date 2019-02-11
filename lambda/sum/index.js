function sum (x = 0, y = 0) {
    return Number(x) + Number(y);
}

function validate (param) {
    return !isNaN(Number(param));
}

module.exports = {
    handler(event, context, callback) {
        const { queryStringParameters } = event;
        const { x, y } = queryStringParameters;

        if (!validate(x) || !validate(y)) {
            return callback(null, {
                statusCode: 400
            });
        }

        return callback(null, {
            statusCode: 200,
            body: sum(x, y)
        });
    }
};
