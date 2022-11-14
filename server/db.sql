--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: affirmations; Type: TABLE; Schema: public; Owner: ruthieirvin
--

CREATE TABLE public.affirmations (
    id integer NOT NULL,
    text character varying,
    author character varying,
    category character varying
);


ALTER TABLE public.affirmations OWNER TO ruthieirvin;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: ruthieirvin
--

ALTER TABLE public.affirmations ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: ruthieirvin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying,
    lastname character varying,
    email character varying,
    picture character varying
);


ALTER TABLE public.users OWNER TO ruthieirvin;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ruthieirvin
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: affirmations; Type: TABLE DATA; Schema: public; Owner: ruthieirvin
--

INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (13, 'Release any false sense of control. Ready yourself to face whatever comes beacuse you can - and you will. ', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (20, 'Self-massage. Stretch more. Dedicate 5 minutes to showing yourself compassion.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (10, 'Drink water right now if your mouth or throat feel dry.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (11, 'Trust your sinking feelings. We sense things in our physical responses.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (12, 'Recognizing and continuing to heal around your feelings requires feeling them. You will be okay.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (1, 'Even on your worst day, you are still a whole human being worthy of love.', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (3, 'Self-awareness is a key component of self-care.', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (5, 'Your feelings are valid. Don''t let people discredit them.', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (7, 'You have gotten yourself to this moment. Don''t fear ease or effortlessness brought forth by your thoughtful design. ', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (9, 'Your uniqueness is your superpower. There''s only one you. ', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (14, 'Honor your feelings by talking gently to yourself. Self-soothe.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (15, 'Consider if this really can''t afford a night''s sleep.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (16, 'You are capable of healthy interdependence. Study working examples as a model and bring your authentic self to every close relationship.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (17, 'Practice casually cleaning messes in passing and see what happens. You might free up enough time to compromise on perfection. ', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (2, 'Life moves in cycles. We bloom, and die, and start again.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (4, 'There''s no one right way to journal. Doodling and keywords during an intentional break and a date scrawled will trigger memories to unpack later.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (6, 'Take a deep breath, get ready, then surrender to the process.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (8, 'One Sufi teaching explains that confusion is like a fog hiding what we aren''t yet ready to see. Have gratitude. ', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (18, 'Pay attention to the early warning signals to avoid the sirens.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (19, 'Everyone is entitled to change their mind, including you. Be open to new facts and information.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (21, 'Implement healthy changes 1-2 at a time to avoid burnout.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (22, 'You deserve safety and reciprocity. Find common ground with people.', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (23, 'Not all art gets made to last. We break apart and eat boiled easter eggs, but that never stops us from dyeing them.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (24, 'You deserve fruit and vegetables every single day. And water.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (25, 'Reflect on things that were different after new information came to light. Curate compassion by understanding there is always more to be revealed.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (26, 'Everyone deserves first dibs on their own energy.', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (27, 'There is probably a process that could reduce the stress of any stressor.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (28, 'The universe has a box big enough to fit your wish!', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (29, 'Take time to marvel at and learn from the child-like spirits in your life.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (30, 'You are the main character. Every person serves as the main character of their own story.', 'internal', 'self-esteem');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (31, 'When stumped for the answer, try to consider a different question.', 'internal', 'advice');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (32, 'There''s always another wave. You''ll catch the right one.', 'internal', 'theraputic');
INSERT INTO public.affirmations (id, text, author, category) OVERRIDING SYSTEM VALUE VALUES (33, 'Ride the wheel. Don''t force it to trample you.', 'internal', 'advice');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ruthieirvin
--

INSERT INTO public.users (id, firstname, lastname, email, picture) OVERRIDING SYSTEM VALUE VALUES (1, NULL, NULL, 'scott@scott.com', 'https://s.gravatar.com/avatar/a6c9f2ddfbc1f1949952ec28f1b77ff7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsc.png');
INSERT INTO public.users (id, firstname, lastname, email, picture) OVERRIDING SYSTEM VALUE VALUES (2, 'Ruth', 'Irvin', 'ruth.diane.irvin@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu1ydnPbco9h4qQ8k1LP9CIS5-P6a7U3_z2AS77-zQ=s96-c');
INSERT INTO public.users (id, firstname, lastname, email, picture) OVERRIDING SYSTEM VALUE VALUES (3, NULL, NULL, 'ruth@gmail.com', 'https://s.gravatar.com/avatar/93c53ce21582507d7cb97a308feab5c3?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fru.png');
INSERT INTO public.users (id, firstname, lastname, email, picture) OVERRIDING SYSTEM VALUE VALUES (4, NULL, NULL, 'natalia@natalia.com', 'https://s.gravatar.com/avatar/e02341d261cd2c93e5f53f93d43471e4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fna.png');
INSERT INTO public.users (id, firstname, lastname, email, picture) OVERRIDING SYSTEM VALUE VALUES (5, NULL, NULL, 'sarah@sarah.com', 'https://s.gravatar.com/avatar/abbacc01341c095113f802ee56f2b1a4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fsa.png');
INSERT INTO public.users (id, firstname, lastname, email, picture) OVERRIDING SYSTEM VALUE VALUES (6, NULL, NULL, 'zachy@zachy.com', 'https://s.gravatar.com/avatar/bd27f8ad7dd2d33a30bcb6d0ad0a0e67?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fza.png');


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ruthieirvin
--

SELECT pg_catalog.setval('public.favorites_id_seq', 33, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ruthieirvin
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: affirmations favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: ruthieirvin
--

ALTER TABLE ONLY public.affirmations
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ruthieirvin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

