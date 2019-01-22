/**w
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

// function getUser(request, data, callback, response) {
//     var loggedin = request.cookies['loggedin'];
//     var userid = request.cookies['id']
//     let query = "SELECT * FROM users WHERE id ='"+userid+"'"

//     data.loggedin = loggedin;
//     if (loggedin !== undefined) {
//         let userDetails;
//             pool.query(query, (err, queryResponse) => {
//                     userDetails = queryResponse.rows[0];
//                     data.userDetails = userDetails;
//                     console.log('this is from getuser() inside pool.query')
//                     console.log(data)
//                     callback(response);
//                 })
//     } else {
//         console.log('this is from getuser()')
//         console.log(data)
//         callback();
//         return data;
//     }
// };


/**
 * ===================================
 * Routes
 * ===================================
 */

// THE LONG METHOD

let object = {};

// Home Page
app.get('/', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    // Find user
    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        object.loggedin = loggedin;
        object.user = user;
        console.log(object)
        response.render('homePage', object);
     });
})


// Activities Page
app.get('/activities/', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    // Find User
    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        object.loggedin = loggedin;
        object.user = user;

        // Find data
        const queryString =
        `SELECT activity.id, activity.title, activity.description, activity.price, activity.category, activity.franchaise, activity.activitypicture1, activitypicture2,
        activitypicture3
        FROM activity
        `
        pool.query(queryString, (err, queryResult) => {
            object.activity = [];
            for (let i = 0; i < queryResult.rows.length; i++){
                object.activity.push(queryResult.rows[i]);
            }
            console.log(object)
            response.render('activitiesPage', object);
        });
    });
})


// Activity Page
app.get('/activities/:id', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    // Find user
    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        object.loggedin = loggedin;
        object.user = user;

        // Find activity
        const queryActOut =
        `SELECT
        activity_place.activity_id, activity.title, activity.description, activity.price, activity.category, activity.franchaise, activity_place.place_id, activity.activitypicture1, activitypicture2,
        activitypicture3, place.outletname, place.website, place.urltext, place.address
        FROM activity_place INNER JOIN activity
        ON ( activity.id = activity_place.activity_id )
        INNER JOIN place
        ON ( place.id = activity_place.place_id )
        WHERE activity_place.activity_id =`+request.params.id

        pool.query(queryActOut, (err, queryResult) => {
            object.activity = [];
            object.outlet = [];
            for (let i = 0; i < queryResult.rows.length; i++){
                object.activity.push(queryResult.rows[i])
            }
            console.log(object)
            response.render('activityPage', object);
        })
    })
});


// Activity & Branch Page
app.get('/activities/:id/:placeid', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    // Find user
    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        object.loggedin = loggedin;
        object.user = user;

        // Find activity
        const queryActOut =
        `SELECT
        activity_place.activity_id, activity.title, activity.description, activity.price, activity.category, activity_place.place_id, place.outletname, place.franchaise, place.website, place.urltext, place.address, place.placePicture1, place.placePicture2, place.placePicture3
        FROM activity_place INNER JOIN activity
        ON ( activity.id = activity_place.activity_id )
        INNER JOIN place
        ON ( place.id = activity_place.place_id )
        WHERE activity_place.activity_id =`+request.params.id+` AND activity_place.place_id =`+request.params.placeid;

        pool.query(queryActOut, (err, queryResult) => {
            object.activity = [];
            for (let i = 0; i < queryResult.rows.length; i++){
                object.activity.push(queryResult.rows[i]);
            }

                // Find Outlets
            const queryActOut2 =
            `SELECT
            place.outletname, activity_place.activity_id, activity_place.place_id
            FROM activity_place INNER JOIN activity
            ON ( activity.id = activity_place.activity_id )
            INNER JOIN place
            ON ( place.id = activity_place.place_id )
            WHERE activity_place.activity_id =`+request.params.id+` AND activity_place.place_id !=`+request.params.placeid;

            pool.query(queryActOut2, (err, queryResult) => {
                object.outlet = [];
                for (let i = 0; i < queryResult.rows.length; i++){
                    object.outlet.push(queryResult.rows[i]);
                }

                    // Find Opening Hours
                const queryActOut3 =
                `SELECT
                openingHours.day_of_week, openingHours.time_open, openingHours.time_close
                FROM openingHours
                INNER JOIN place
                ON (openingHours.place_id = place.id)
                WHERE openingHours.place_id =`+request.params.placeid;
                    pool.query(queryActOut3, (err, queryResult) => {
                        object.openingHours =[];
                        for (let i = 0; i < queryResult.rows.length; i++){
                            object.openingHours.push(queryResult.rows[i]);
                        }
                        console.log(object)
                        response.render('branchActPage', object);
                    })
            })
        })
    })
})


// Create new activity
app.get('/new', (request, response) => {
    var loggedin = request.cookies['loggedin'];
    var userid = request.cookies['id']
    let query = "SELECT * FROM users WHERE id ='"+userid+"'"

    // Find user
    pool.query(query, (err, queryResponse) => {
        let user;
        if (loggedin !== undefined) {
            user = queryResponse.rows[0];
        }
        object.loggedin = loggedin;
        object.user = user;
        response.render('createPage', object)
    })
})

// Post new activity to database
app.post('/new', (request,response) => {
    console.log(request.body.title)
    `INSER INTO activity
    (title, place_id, description, price, category, activityPicture1, activityPicture2, activityPicture3)
    VALUES
    (${request.body.title}, `
    response.redirect('/activities/id')
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