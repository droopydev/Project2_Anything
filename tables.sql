DROP TABLE users;
DROP TABLE activity;
DROP TABLE place;
DROP TABLE openingHours;
DROP TABLE activity_place;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);


CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    price INTEGER,
    category TEXT,
    franchaise TEXT,
    activityPicture1 TEXT,
    activityPicture2 TEXT,
    activityPicture3 TEXT
);

CREATE TABLE IF NOT EXISTS place (
	id SERIAL PRIMARY KEY,
	outletName TEXT,
	franchaise TEXT,
	website TEXT,
	urlText TEXT,
	openingHours_id INTEGER,
	address TEXT,
	placePicture1 TEXT,
	placePicture2 TEXT,
	placePicture3 TEXT
);

CREATE TABLE IF NOT EXISTS openingHours (
	id SERIAL PRIMARY KEY,
	day_of_week INTEGER,
	time_open TEXT,
	time_close TEXT,
	place_id INTEGER
);

CREATE TABLE IF NOT EXISTS activity_place (
	id SERIAL PRIMARY KEY,
	activity_id INTEGER,
	place_id INTEGER
);


INSERT INTO activity_place
(activity_id, place_id)
VALUES
(1, 1);

INSERT INTO activity_place
(activity_id, place_id)
VALUES
(1, 2);

INSERT INTO activity_place
(activity_id, place_id)
VALUES
(1, 3);

INSERT INTO activity_place
(activity_id, place_id)
VALUES
(2, 1);

INSERT INTO activity_place
(activity_id, place_id)
VALUES
(2, 2);


INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Board Games', 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 10, 'Sit & Play', 'Playnation',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image13.jpg',
	'https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');

INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Console Gaming', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 10, 'Sit & Play', 'Playnation', 'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image19.png', 'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png', 'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');

INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Play Fortnite', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 2.50, 'Sit & Play', 'Khakabo',
	'https://cdn.discoversg.com/wp-content/2017/12/khakabo-1.jpg',
	'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');

INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Escape Room', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 25, 'Move Around', 'Trapped',
	'http://www.asiaone.com/sites/default/files/styles/700x500/public/original_images/Feb2015/20150206-lostsg.jpg?itok=j3x0l-eR',
	'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');


INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Karaoke', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 15, 'Sit & Chill', 'Manekineko',
	'https://goodyfeed.com/wp-content/uploads/2016/08/Manekineko.jpg',
	'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');


INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Bowling', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 15, 'Work It Out', 'Planet Bowl',
	'https://thesmartlocal.com/images/easyblog_articles/5821/b2ap3_large_best-bowling-alleys-singapore-2.png',
	'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');


INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Rage', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 38, 'Work It Out', 'The Fragment Room',
	'https://www.theurbanwire.com/wp-content/uploads/2017/08/smash2.jpg',
	'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');


INSERT INTO activity
(title, description, price, category, franchaise, activityPicture1, activityPicture2, activityPicture3)
VALUES
('Video Arcade', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 8, 'Move Around', 'Cow Play Cow Moo',
	'https://s3-ap-southeast-1.amazonaws.com/suntecproject/web/suntec/suntec_front/wp-content/uploads/2018/08/1536x882-_-cpcm.jpg',
	'https://www.littledayout.com/wp-content/uploads/articles/2017/06-June/20170621-PlayNation/e-boardgames.png',
	'https://thesmartlocal.com/images/easyblog_articles/1847/b2ap3_medium_image09.jpg');









INSERT INTO place
(outletName, franchaise, website, urlText, openingHours_id, address, placePicture1, placePicture2, placePicture3)
VALUES
('Tampines Branch', 'Playnation', 'https://playnation.com.sg/', 'playnation.com.sg', 1, '1 Tampines Walk, #B1-17/18/19, Singapore 528523', 'https://playnation.com.sg/wp-content/uploads/2017/12/3c-e1500970400824.jpg', 'https://playnation.com.sg/wp-content/uploads/2017/12/4c-e1500970468975.jpg', 'https://playnation.com.sg/wp-content/uploads/2017/12/4b-e1500970418907.jpg');

INSERT INTO place
(outletName, franchaise, website, urlText, openingHours_id, address, placePicture1, placePicture2, placePicture3)
VALUES
('Scape Branch', 'Playnation', 'https://playnation.com.sg/', 'playnation.com.sg', 1, '2 Orchard Link, Singapore 237978', 'https://playnation.com.sg/wp-content/uploads/2017/12/Large-Room-Scape-1-e1500969925378.jpg', 'https://playnation.com.sg/wp-content/uploads/2017/12/Console-Bean-Bag-Stations-2-e1500969591526.jpg', 'https://playnation.com.sg/wp-content/uploads/2017/12/Console-Bean-Bag-Stations.jpg');

INSERT INTO place
(outletName, franchaise, website, urlText, openingHours_id, address, placePicture1, placePicture2, placePicture3)
VALUES
('Prinsep HQ', 'Playnation', 'https://playnation.com.sg/', 'playnation.com.sg', 1, '58 Prinsep St, Singapore 188686', 'https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-1-Prinsep-e1500968913967.jpg', 'https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-3.jpg', 'https://playnation.com.sg/wp-content/uploads/2017/12/Level-2-Console-Game-Area-2-2-e1500969260936.jpg');

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(1, null, null, 1);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(2, '09:00', '17:00', 1);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(3, '09:00', '1700', 1);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(4, '09:00', '17:00', 1);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(5, '09:00', '17:00', 1);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(6, '09:00', '17:00', 1);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(7, '09:00', '17:00', 1);




INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(1, '14:00', '23:00', 2);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(2, '14:00', '23:00', 2);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(3, '14:00', '23:00', 2);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(4, '14:00', '23:00', 2);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(5, '12:00', '01:00', 2);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(6, '12:00', '01:00', 2);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(7, '12:00', '22:00', 2);





INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(1, '12:00', '23:00', 3);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(2, '12:00', '23:00', 3);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(3, '12:00', '23:00', 3);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(4, '12:00', '23:00', 3);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(5, '12:00', '02:00', 3);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(6, '14:00', '03:00', 3);

INSERT INTO openingHours
(day_of_week, time_open, time_close, place_id)
VALUES
(7, '14:00', '23:00', 3);


INSERT INTO users (name, password) VALUES ('sufyan', 'project2');