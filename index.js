/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const pg = require('pg')

const configs = {
    user: 'the574life',
    host: '127.0.0.1',
    database: 'project2',
    port: 5432,
}

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err. stack);
});

// Init express app
const app = express();

// Set upp middleware
app.use(methodOverride('_method'));
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended:true
}));

// Set react-views to be the dafult view engine
const reactEngine = require ('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);


/**
 * ===================================
 * Functions
 * ===================================
 */

function getUser(request, object) {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    let user;
    pool.query(query, (err, queryResponse) => {
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
            object.loggedin = loggedin;
            object.user = user;
            return object
        }});
}

/**
 * ===================================
 * Routes
 * ===================================
 */

// THE LONG METHOD


// Home Page
app.get('/', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        const queryString = 'SELECT * FROM activities';

        pool.query(queryString, (err, queryResult) => {
            let object = {};
            object.activities = [];
            for (let i = 0; i < queryResult.rows.length; i++){
                object.activities.push(queryResult.rows[i]);
            }
            object.loggedin = loggedin;
            object.user = user;
            response.render('homePage', object);
        });
    });
})


// Activities Page
app.get('/activities/', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        const queryString = 'SELECT * FROM activities';

        pool.query(queryString, (err, queryResult) => {
            let object = {};
            object.activities = [];
            for (let i = 0; i < queryResult.rows.length; i++){
                object.activities.push(queryResult.rows[i]);
            }
            object.loggedin = loggedin;
            object.user = user;
            response.render('activitiesPage', object);
        });
    });
})

// Activity Page
app.get('/activities/:id', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }

        const queryString = "SELECT * FROM activities WHERE id ='"+request.params.id+"'"
        pool.query(queryString, (err, queryResult) => {
            let object = {};
            object.activities = [];
            object.activities.push(queryResult.rows[0])
            object.loggedin = loggedin;
            object.user = user;
            console.log(object)
            response.render('activityPage', object);
        })
    })
})

// Login Route
app.post('/users/login', (request, response) => {
    console.log(request.body)
    let query = "SELECT * FROM users WHERE name ='"+request.body.name+"'";
    pool.query(query, (err, queryResponse) => {
        if (queryResponse.rows.length === 0) {
            console.log('user dont exist')
        }
        else {
            console.log('user exists');
            const user = queryResponse.rows[0];
            let password = user.password;

            if (password === request.body.password) {
                response.cookie('loggedin', 'true');
                response.cookie('id', user.id);
                response.redirect('/');
            } else {
                console.log('password incorrect');
            }
        }
    })
})


// Logout Route
app.get('/users/logout', (request, response) => {
    response.clearCookie('loggedin');
    response.clearCookie('id');
    response.redirect('/');
})

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);