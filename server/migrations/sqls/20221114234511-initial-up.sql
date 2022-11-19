/* Replace with your SQL commands */

CREATE TABLE public.affirmations (
    id SERIAL PRIMARY KEY,
    text character varying,
    author character varying,
    category character varying
);

CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    firstname character varying,
    lastname character varying,
    email character varying,
    picture character varying
);

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

SELECT pg_catalog.setval('public.users_id_seq', 6, true);

