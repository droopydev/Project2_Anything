DROP TABLE users;
DROP TABLE activities;
DROP TABLE openingHours;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);


CREATE TABLE IF NOT EXISTS activities (
    id SERIAL PRIMARY KEY,
    title TEXT,
    openingHours_id INTEGER,
    address TEXT,
    imageURl TEXT,
    description TEXT,
    price INTEGER,
    category TEXT
);


CREATE TABLE IF NOT EXISTS openingHours (
	id SERIAL PRIMARY KEY,
	day_of_week INTEGER,
	time_open INTEGER,
	time_close INTEGER
);


-- CREATE TABLE IF NOT EXISTS pricing (

-- );


INSERT INTO activities (title, openingHours_id, address, imageURL, description, price, category)
VALUES ('Board Games @ Playnation', 1, 'Edgefield Plains', 'https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg', 'play with your firne', 10, 'Sit & Play');

INSERT INTO activities (title, openingHours_id, address, imageURL, description, price, category)
VALUES ('Console Gaming @ Playnation', 2, 'Edgefield Plains', 'https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Console-Room-1-1-e1500969248197.jpg', 'play with your firne', 13, 'Sit & Play');

INSERT INTO activities (title, openingHours_id, address, imageURL, description, price, category)
VALUES ('Play Fortnite @ Khakabo', 3, 'Edgefield Plains', 'https://cdn.discoversg.com/wp-content/2017/12/khakabo-1.jpg', 'play with your firne', 3, 'Sit & Play');
INSERT INTO activities (title, openingHours_id, address, imageURL, description, price, category)
VALUES ('Escape Room @ Trapped', 4, 'Edgefield Plains', 'http://www.asiaone.com/sites/default/files/styles/700x500/public/original_images/Feb2015/20150206-lostsg.jpg?itok=j3x0l-eR', 'play with your firne', 25, 'Move Around');

INSERT INTO users (name, password) VALUES ('sufyan', 'project2');