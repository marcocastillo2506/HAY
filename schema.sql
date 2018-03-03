DROP DATABASE IF EXISTS yearbook;

CREATE DATABASE yearbook;

USE yearbook;

CREATE TABLE quotes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  source varchar(55),
  quote text
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/


INSERT INTO quotes (quote, source) VALUES ("'It became more than just learning code, when you work through the night with you peer beside you, that's when you realize you really are a family'", "Alex(smoky the bear)");
INSERT INTO quotes (quote, source) VALUES ("'...doing what I love, hacking obstacles by coding a happy future... OneLove!'", "Edgar");
INSERT INTO quotes (quote, source) VALUES ("'The present is theirs, the future for which I really work is mine.'", "Luis Nava(Jesse)");
INSERT INTO quotes (quote, source) VALUES ("'I want to help create a Mexico, I wish it would have received me when I came back.'", "Leni");
INSERT INTO quotes (quote, source) VALUES ("'Love to break my head when hacking!!!!'", "Cesar");
INSERT INTO quotes (quote, source) VALUES ("'I like sports, ... and be able to help people in so many different ways.'", "Richie");
INSERT INTO quotes (quote, source) VALUES ("'I cannot stress this enough, you need to console log all the time ...'", "Garima");
INSERT INTO quotes (quote, source) VALUES ("'This is great opportunity for dreamers who have issue with paper work to continue studying'", "Eduardo Barranon");
INSERT INTO quotes (quote, source) VALUES ("'Blururudul'", "the unicorn club");
INSERT INTO quotes (quote, source) VALUES ("'Always keep your head held high'", "Jack");
INSERT INTO quotes (quote, source) VALUES ("'I´m really glad I found HolaCode, I can´t imagine doing anything else'", "Bruno");
INSERT INTO quotes (quote, source) VALUES ("'Vicepresident rised from the valley of coding unicorns to bring them to the food amusement of our new city now called home.'", "Len");
INSERT INTO quotes (quote, source) VALUES ("'If you are more fortunate than others, build a longer table not a taller fence'", "Aida");
INSERT INTO quotes (quote, source) VALUES ("'Ceviche!!!!!!!!!!!!!'", "Marco");
INSERT INTO quotes (quote, source) VALUES ("'Putting in more hours, will never not help you'", "Javier");


CREATE TABLE profiles (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name varchar(32) NOT NULL,
  last_name varchar(32) NOT NULL,
  role varchar(32) NOT NULL,
  cohort int NOT NULL,
  github_link varchar(64),
  linkedin_link varchar(64),
  picture_path varchar(64),
  about_me text
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Abimael ", "Hernandez ", "student ", 1, " abimaelhernandez ", "A6ppJ5z", "Hidalgo was the second-born child of Don Cristóbal Hidalgo y Costilla and Doña Ana María Gallaga Mandarte Villaseñor.[7] Hidalgo was born a criollo");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Alejandro ", "Rodriguez ", "student ", 1, "AlejandroRodriguezP", "XcvzwAI", "It became more than just learning code, when you work through at night with a peer beside you, that's when I realize we really are a family.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Armando ", "Cano ", "student ", 1, "armandocano91 ", "puks3Pr", "I knew always deep inside of me, that I was going to get the power to create something thanks to technology. Now, thanks to HolaCode I know how I'd like to grow as a professional, a software engineer, but most important of all, grow as a human being.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Beatriz ", "Garcia ", "student ", 1, "Beagbarreto ", "25RYcRD ", "Bicepresident");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Bruno ", "Torres ", "student ", 1, "BrunoTorresF ", "02nq7tM ", "There are three things I love in this world: Mexico City, programming, and beer (not necessarily in that order). I’ve always loved technology so getting into programming was only a matter of time. Though, I only know JavaScript at the moment, I hope to learn a few other up-and-coming languages (Go, Rust, Dart).In my spare time, I like watching TV shows (British dramas and American sitcoms are the best), reading good sci-fi, and occasionally cooking.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Cesar", "Tapia", "student", 1, "Cesar88Tapia", "5p4K9F9", "Love to break my head when hacking!!!!");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Edgar", "Muñoz", "student", 1, "edgarmunoz1", "mSse5Eh", "Student at <holaCode/> a software engineering school in CDMX, 'doing what I love' by Hacking obstacles and coding a happy future … OneLove!");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Eduardo", "Barranon", "student", 1, "Edward060290", "8BKlJgt", "Donald John Trump (born June 14, 1946) is the 45th and current President of the United States, in office since January 20, 2017. Before entering politics, he was a businessman and television personality.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Eduardo", "Urrutia", "student", 1, "Eduardo091", "jVwRTYJ", "I like food");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Heber", "Gutierrez", "student", 1, "HeberGutierrez", "jxaNFiX", "Don't stop dreaming just because you had a nigthmare. Almost every successful person begins with two beliefs: the future can be better than the present, and i have the power to make it so.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Jaqueline", "Lopez", "student", 1, "Jacqueline930", "1UTAvaD", "I Heart HolaCode. It gave me the opportunity of becoming a software engineer  by being someone I have identified since I have knowledge, a woman. HolaCode gave opened doors to be freely, ME, and to break all stereotypes, cliches for trans women.  I want to thank all staff and peers for being such open-minded, respectful, and lovely.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Javier", "Solis", "student", 1, "ElizaldeJE", "swc5HyP", "Adolf Hitler, 20 April 1889 – 30 April 1945, was a German politician who was the leader of the Nazi Party (Nationalsozialistische Deutsche Arbeiterpartei; NSDAP), Chancellor of Germany from 1933 to 1945 and Führer ('Leader') of Nazi Germany from 1934 to 1945.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Jorge", "Cervantes", "student", 1, "JorgeC0218", "pUJlMvr", "Always keep your head held high");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Jorge", "Lerma", "student", 1, "jorgelerma", "blah", "Fidel Alejandro Castro Ruz August 13, 1926 – November 25, 2016) was a Cuban communist revolutionary and politician who governed the Republic of Cuba as Prime Minister.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Joseph", "Fernandez", "student", 1, "JosephFernandez2689", "GjA2Drj", "Born in Mexico, raised in the States, New Yorker at heart. If I can help someone I will. I am relaxed and crazy. Sometimes I go out and drink with friends, really laid back, and  the New Yorker comes out hahah . I live life ... live it good we are not suppose to give it back in-tact. There is always something to learn.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Juan", "Tejada", "student", 1, "Johntejeda", "arqm7oP", "Santa Anna was a member of the same tribe of the Comanche as the more famous Buffalo Hump.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Luis", "Avila", "student", 1, "Lalolalo85", "mYEVQv1", "I´m outgoing, like to try out new things, funny, laid back, if you know me then u know me.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Luis Gerardo", "Nava", "student", 1, "luisgnava", "rvaeR5F", "'The present is theirs, the future for which I really worked is mine'");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Luis", "Ortiz", "student", 1, "Luisortizlopez", "LK9uEa2", "Enrique Peña Nieto born 20 July 1966),[1] sometimes referred to by his initials EPN,[2] is a Mexican politician serving as the 57th and current President of Mexico.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Marco", "Castillo", "student", 1, "marcocastillo2506", "PSyVaYL", "If you want to destroy any nation without a war , coding is your sword");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Miriam", "Alvarez", "student", 1, "miriam30", "YMqvYSw", "uhmm something about me, well I like to eat and also going to expos, conventions and finding cool places to go eat since I tend to get lose easily, it helps to find cool spots to see and eat.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Ricardo", "Varona", "student", 1, "Varonss", "yUfGNbd", "My name is Richie from CDMX, I'm a father of 2 kiddos and a husband. I´ve done high school back in Manchester, TN. I like sports, movies, listening to music, playing chess, and be able to help out people in so many different ways.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Scott", "Yoon", "mentor", 1, "scottyoon221", "ivnYqOj", "Scott moved to HolaCode from San Francisco, California. He studied Statistics at University of California, Berkeley and has worked in various software companies including Adobe System and Cisco System as a software test development engineer. He is also a recent graduate of Hack Reactor and is currently mentoring students in the same school to help them realize their dreams. In his spare time, he likes to travel and make new friends.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Cornellius", "Ngondo", "mentor", 1, "cngondo", "AWpvT8m", "Cornellius is a software engineer and a mentor. He received his BA in Mathematics and Computer Science from Multimedia University of Kenya. He worked at Moringa School, a coding boot camp based in Kenya where he trained over 100 graduates in both web and mobile applications development and made relevant contributions to the curriculum that the school was using. In addition, he represented his organization at Africa Women in Tech 2015 and Google Developer Group Meetups.");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Garima", "Batra", "mentor", 1, "gbatra17", "G15GtFa", "I love coding, rock-climbing, exploring new countries and languages. HolaCode has been a one of a kind experience and I can't wait to see where all the students take this adventure!");
INSERT INTO profiles (first_name, last_name, role, cohort, github_link, picture_path, about_me)
VALUES ("Jason", "Stieber", "mentor", 1, "theenderweggin", "rV0kWU9", "Jason Stieber has been working in education for over 10 years working with students from diverse backgrounds. As a Hack Reactor graduate, he knows what is needed to transform motivated students into software engineers. He has managed small to mid-sized teams and is experienced in training many students from zero to proficiency. Before becoming an engineer, Jason worked for two major American Fortune 500 companies in the medical device space and is well versed in the soft skills of the corporate world.");
