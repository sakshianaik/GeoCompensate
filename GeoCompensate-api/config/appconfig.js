require('dotenv').config();

exports.appConfig = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3001,
        appName: process.env.APP_NAME || '',
        env: process.env.NODE_ENV || 'development',
    },
    pubsub: {
        topicId: process.env.GOOGLE_PUBSUB_TOPICID
    }
};