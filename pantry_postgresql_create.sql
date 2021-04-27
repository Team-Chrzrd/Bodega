SET statement_timeout
= 0;
SET lock_timeout
= 0;
SET idle_in_transaction_session_timeout
= 0;
SET client_encoding
= 'UTF8';
SET standard_conforming_strings
= on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies
= false;
SET xmloption
= content;
SET client_min_messages
= warning;
SET row_security
= off;

CREATE TABLE public.pantry
(
	_id serial NOT NULL,
	user_id varchar NOT NULL,
	item_name varchar NOT NULL,
	note varchar,
	unit varchar,
	qty integer,
	category varchar,
	par integer,
	CONSTRAINT pantry_pk PRIMARY KEY (_id)
);

CREATE TABLE public.shopping
(
	_id serial NOT NULL,
	user_id varchar NOT NULL,
	pantry_id integer,
	item_name varchar NOT NULL,
	note varchar,
	unit varchar,
	list_qty integer,
	buy_qty integer,
	category varchar,
	CONSTRAINT shopping_pk PRIMARY KEY (_id)
);

CREATE TABLE public.auth
(
	_id serial NOT NULL,
	user_name varchar NOT NULL,
	passkey varchar NOT NULL,
	UNIQUE (user_name)
	--CONSTRAINT auth_pk PRIMARY KEY (_id) 
);

-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Eggs', 'Brown', 'Dozen', '1', 'Fridge', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Milk', 'Whole', 'Gallon', '1', 'Dairy', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Bread', 'White', 'Loaf', '1', 'Bakery', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Mac & Cheese', 'Whole Grain', '8oz Box', '0', 'Dry Goods', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Green Beans', 'French Style', '14oz Can', '1', 'Canned Goods', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Penne Pasta', 'Whole Grain', '16oz Box', '1', 'Dry Goods', '1');
-- INSERT INTO public.pantry (user_id, item_name, note, unit, qty, category, par) VALUES (1, 'Oatmeal', '', '16oz Box', '1', 'Dry Goods', '1');

-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Sam Adams', 'Boston Lager', '12-pack', '1', 'Alcohol');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Chicken', 'Rotissarie', 'Whole', '1', 'Deli');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Roast Beef', 'Sandwich Cut', '16oz Pkg', '1', 'Deli');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Cheddar', 'Extra Sharp', '16oz Block', '1', 'Deli');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Deoderant', 'Old Spice', 'Dual-Pack', '1', 'Misc.');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'T-Shirts', 'Medium', '3-Pack', '1', 'Clothes');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Coffee', 'Whole Bean', '2lb', '1', 'Dry Goods');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Ranch Dressing', 'Buttermilk', '12oz Bottle', '1', 'Fridge');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Cheerios', 'Honey-Nut', '28oz Box', '1', 'Dry Goods');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Apple', 'Fiji', 'Each', '5', 'Produce');
-- INSERT INTO public.shopping (user_id, item_name, note, unit, list_qty, category) VALUES (1, 'Roast Beef', 'Sandwich Cut', '16oz pkg', '1', 'Deli');

-- psql -d postgres://xvzpelsn:FR_araMqHVuQNjR1SK2lJdaztmjC77Gd@suleiman.db.elephantsql.com:5432/xvzpelsn -f pantry_postgresql_create.sql