'use strict'

const config = {
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  client: {
    endpoints: {
      pictures: 'http://api.intercambiagram.com/picture',
      users: 'http://api.intercambiagram.com/user',
      auth: 'http://api.intercambiagram.com/auth'
    }
  },
  auth: {
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://intercambiagram.com/auth/facebook/callback'
    }
  },
  secret: process.env.PLATZIGRAM_SECRET || 'pl4tzi' // never use default
}

// For development use local micro instances
if (process.env.NODE_ENV !== "production") {
  config.client.endpoints = {
    pictures: 'http://localhost:5000',
    users: 'http://localhost:5001',
    auth: 'http://localhost:5002'
  }

  config.auth.facebook.callbackURL = 'http://intercambiagram.test:5050/auth/facebook/callback'
}

module.exports = config
