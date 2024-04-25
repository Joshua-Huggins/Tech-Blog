// Dependencies go here 
const express = require('express');
const session = require('express-session');
const routes = require('.controllers/');

// Sequelize things (This will take care of the session stuff)
const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// call express and set port 
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware things
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUniitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// intializes routes
app.use(routes);

// starts the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
})