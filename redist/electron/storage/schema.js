module.exports = {
    connection: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string'
                },
                name: {
                    type: 'string'
                },
                url: {
                    type: 'string'
                },
                port: {
                    type: 'number'
                }
            }
        }
    }
}
