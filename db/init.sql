CREATE TABLE users(user_id SERIAL PRIMARY KEY,
                                          userName VARCHAR(500) UNIQUE NOT NULL,
                                                                       password VARCHAR(500) NOT NULL,
                                                                                             isAdmin BOOLEAN);


INSERT INTO users(userName, password, isAdmin)
VALUES('charlie',
       'rufus',
       false)