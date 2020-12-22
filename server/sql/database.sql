--
-- PostgreSQL database dump
--

-- Dumped from database version 11.10 (Debian 11.10-1.pgdg100+1)
-- Dumped by pg_dump version 11.10 (Debian 11.10-1.pgdg100+1)

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

SET default_with_oids = false;

--
-- Name: asigna; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.asigna (
    roles_id integer NOT NULL,
    users_id integer NOT NULL,
    createdat timestamp without time zone,
    updatedat timestamp without time zone
);


ALTER TABLE public.asigna OWNER TO postgres;

--
-- Name: bodegas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bodegas (
    id integer NOT NULL,
    n_bodega character varying(5),
    capacidad integer,
    cantidad_actual integer
);


ALTER TABLE public.bodegas OWNER TO postgres;

--
-- Name: bodegas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bodegas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bodegas_id_seq OWNER TO postgres;

--
-- Name: bodegas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bodegas_id_seq OWNED BY public.bodegas.id;


--
-- Name: correos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.correos (
    id integer NOT NULL,
    correo character varying(30),
    users_id integer
);


ALTER TABLE public.correos OWNER TO postgres;

--
-- Name: correos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.correos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.correos_id_seq OWNER TO postgres;

--
-- Name: correos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.correos_id_seq OWNED BY public.correos.id;


--
-- Name: cuentas_corrientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuentas_corrientes (
    id integer NOT NULL,
    deuda_total integer,
    abono integer,
    total_pago integer,
    n_cuenta integer,
    departamentos_id integer
);


ALTER TABLE public.cuentas_corrientes OWNER TO postgres;

--
-- Name: cuenta_corriente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cuenta_corriente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuenta_corriente_id_seq OWNER TO postgres;

--
-- Name: cuenta_corriente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cuenta_corriente_id_seq OWNED BY public.cuentas_corrientes.id;


--
-- Name: departamentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departamentos (
    id integer NOT NULL,
    n_depto character varying(30)
);


ALTER TABLE public.departamentos OWNER TO postgres;

--
-- Name: departamentos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departamentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departamentos_id_seq OWNER TO postgres;

--
-- Name: departamentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departamentos_id_seq OWNED BY public.departamentos.id;


--
-- Name: detalles_gastos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_gastos (
    id integer NOT NULL,
    pago_interes integer,
    monto_mes integer,
    gastos_comunes_id integer
);


ALTER TABLE public.detalles_gastos OWNER TO postgres;

--
-- Name: detalles_gastos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalles_gastos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalles_gastos_id_seq OWNER TO postgres;

--
-- Name: detalles_gastos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalles_gastos_id_seq OWNED BY public.detalles_gastos.id;


--
-- Name: gastos_comunes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gastos_comunes (
    id integer NOT NULL,
    fecha_ingreso date,
    fecha_vencimiento date,
    gasto_depto integer,
    gasto_bodega integer,
    gasto_estacionamiento integer,
    gasto_agua integer,
    porcentaje_interes double precision,
    estado boolean,
    departamentos_id integer
);


ALTER TABLE public.gastos_comunes OWNER TO postgres;

--
-- Name: gastos_comunes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gastos_comunes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gastos_comunes_id_seq OWNER TO postgres;

--
-- Name: gastos_comunes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gastos_comunes_id_seq OWNED BY public.gastos_comunes.id;


--
-- Name: involucra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.involucra (
    departamentos_id integer NOT NULL,
    users_id integer NOT NULL,
    createdat timestamp without time zone,
    updatedat timestamp without time zone
);


ALTER TABLE public.involucra OWNER TO postgres;

--
-- Name: movimientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimientos (
    id integer NOT NULL,
    nombre_movimiento character varying(30),
    monto integer,
    cuentas_corrientes_id integer
);


ALTER TABLE public.movimientos OWNER TO postgres;

--
-- Name: movimientos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movimientos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movimientos_id_seq OWNER TO postgres;

--
-- Name: movimientos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movimientos_id_seq OWNED BY public.movimientos.id;


--
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    cod_prod character varying(30),
    nombre character varying(30),
    cantidad integer,
    fecha_modificacion date,
    volumen character varying(30),
    bodegas_id integer
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- Name: productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.productos_id_seq OWNER TO postgres;

--
-- Name: productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;


--
-- Name: realizas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.realizas (
    users_id integer NOT NULL,
    reclamos_id integer NOT NULL
);


ALTER TABLE public.realizas OWNER TO postgres;

--
-- Name: reclamos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reclamos (
    id integer NOT NULL,
    n_reclamo integer,
    descripcion text,
    respuesta text,
    fecha_ingreso timestamp without time zone,
    fecha_modificacion timestamp without time zone,
    departamentos_id integer
);


ALTER TABLE public.reclamos OWNER TO postgres;

--
-- Name: reclamos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reclamos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reclamos_id_seq OWNER TO postgres;

--
-- Name: reclamos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reclamos_id_seq OWNED BY public.reclamos.id;


--
-- Name: revisas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.revisas (
    roles_id integer,
    productos_id integer
);


ALTER TABLE public.revisas OWNER TO postgres;

--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    cod_rol character varying(5),
    nombre character varying(30)
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: supervisas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supervisas (
    users_id integer NOT NULL,
    reclamos_id integer NOT NULL
);


ALTER TABLE public.supervisas OWNER TO postgres;

--
-- Name: turnos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.turnos (
    id integer NOT NULL,
    hora_inicio time without time zone,
    hora_termino time without time zone,
    fecha_inicio date,
    fecha_termino date,
    users_id integer
);


ALTER TABLE public.turnos OWNER TO postgres;

--
-- Name: turnos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.turnos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.turnos_id_seq OWNER TO postgres;

--
-- Name: turnos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.turnos_id_seq OWNED BY public.turnos.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    rut character varying(12),
    nombre character varying(30),
    apellido character varying(30),
    telefono_casa integer,
    telefono_celular integer,
    password text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: bodegas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bodegas ALTER COLUMN id SET DEFAULT nextval('public.bodegas_id_seq'::regclass);


--
-- Name: correos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.correos ALTER COLUMN id SET DEFAULT nextval('public.correos_id_seq'::regclass);


--
-- Name: cuentas_corrientes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_corrientes ALTER COLUMN id SET DEFAULT nextval('public.cuenta_corriente_id_seq'::regclass);


--
-- Name: departamentos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamentos ALTER COLUMN id SET DEFAULT nextval('public.departamentos_id_seq'::regclass);


--
-- Name: detalles_gastos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_gastos ALTER COLUMN id SET DEFAULT nextval('public.detalles_gastos_id_seq'::regclass);


--
-- Name: gastos_comunes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_comunes ALTER COLUMN id SET DEFAULT nextval('public.gastos_comunes_id_seq'::regclass);


--
-- Name: movimientos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimientos ALTER COLUMN id SET DEFAULT nextval('public.movimientos_id_seq'::regclass);


--
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- Name: reclamos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclamos ALTER COLUMN id SET DEFAULT nextval('public.reclamos_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: turnos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turnos ALTER COLUMN id SET DEFAULT nextval('public.turnos_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: asigna; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.asigna (roles_id, users_id, createdat, updatedat) FROM stdin;
1	33	2020-12-04 04:40:14.763	2020-12-04 04:40:14.763
3	34	2020-12-04 04:41:06.276	2020-12-04 04:41:06.276
2	35	2020-12-04 04:41:24.614	2020-12-04 04:41:24.614
3	37	2020-12-22 09:44:34.984	2020-12-22 09:44:34.984
\.


--
-- Data for Name: bodegas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bodegas (id, n_bodega, capacidad, cantidad_actual) FROM stdin;
1	1	100	16
\.


--
-- Data for Name: correos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.correos (id, correo, users_id) FROM stdin;
15	admin@mail.cl	33
16	user@mail.cl	34
17	mail@mail.cl	35
19	alex@mail.cl	37
\.


--
-- Data for Name: cuentas_corrientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentas_corrientes (id, deuda_total, abono, total_pago, n_cuenta, departamentos_id) FROM stdin;
1	3	3	3	1	1
2	0	0	0	2	2
\.


--
-- Data for Name: departamentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departamentos (id, n_depto) FROM stdin;
1	1A
2	1B
\.


--
-- Data for Name: detalles_gastos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_gastos (id, pago_interes, monto_mes, gastos_comunes_id) FROM stdin;
\.


--
-- Data for Name: gastos_comunes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gastos_comunes (id, fecha_ingreso, fecha_vencimiento, gasto_depto, gasto_bodega, gasto_estacionamiento, gasto_agua, porcentaje_interes, estado, departamentos_id) FROM stdin;
17	2020-12-11	2020-02-01	99999	99999	99999	99999	0.270000000000000018	t	1
18	2020-12-22	2021-01-22	1000000	1000000	1000000	1000000	0.270000000000000018	t	2
\.


--
-- Data for Name: involucra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.involucra (departamentos_id, users_id, createdat, updatedat) FROM stdin;
1	34	2020-12-22 06:32:22.985	2020-12-22 06:32:22.985
2	37	2020-12-22 11:22:02.472	2020-12-22 11:22:02.472
\.


--
-- Data for Name: movimientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimientos (id, nombre_movimiento, monto, cuentas_corrientes_id) FROM stdin;
2	test	1000	1
3	test1	10001	1
4	test3	12121212	2
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, cod_prod, nombre, cantidad, fecha_modificacion, volumen, bodegas_id) FROM stdin;
32	1A	Shampoo	15	2020-12-22	3	1
33	1B	Shampoo111	1	2020-12-22	3	1
\.


--
-- Data for Name: realizas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.realizas (users_id, reclamos_id) FROM stdin;
34	5
34	8
34	9
37	12
\.


--
-- Data for Name: reclamos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reclamos (id, n_reclamo, descripcion, respuesta, fecha_ingreso, fecha_modificacion, departamentos_id) FROM stdin;
5	1	Problemas con el baño, el water exploto	Se cambiará su water pronto	2020-12-18 21:40:22.533993	2020-12-19 09:54:52.770355	1
9	0	FFFFFFF	aaaaaa	2020-12-22 07:29:48.002008	2020-12-22 08:54:36.693272	1
8	0	slkdlskd	TEST01	2020-12-22 07:14:47.849715	2020-12-22 09:46:25.402438	1
12	0	La puerta esta mala	Se cambiara el proximo mes	2020-12-22 09:45:35.779668	2020-12-22 09:46:34.519504	2
\.


--
-- Data for Name: revisas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.revisas (roles_id, productos_id) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, cod_rol, nombre) FROM stdin;
2	sup	Conserje
3	usr	Residente
1	adm	Administrador
\.


--
-- Data for Name: supervisas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supervisas (users_id, reclamos_id) FROM stdin;
33	5
33	9
33	8
33	12
\.


--
-- Data for Name: turnos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.turnos (id, hora_inicio, hora_termino, fecha_inicio, fecha_termino, users_id) FROM stdin;
5	13:30:30	14:30:30	2020-01-01	2020-01-01	35
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, rut, nombre, apellido, telefono_casa, telefono_celular, password) FROM stdin;
33	123456781	Admin	01	22182378	932443568	$2a$10$uBYNlsQAkDP4uqp.iLreRuG5lQQfuXn7xc32S5YH5Mfre9hJ5xYha
34	123456782	User	01	22182371	932443561	$2a$10$vxUJIIwgwJNO0I10OVWxzuylqTHtNXMgJqgtasBC8shTSlD7lBKjC
35	123456783	Conserje	01	22184289	932334456	$2a$10$toSB7AGpuqNcQRQhbQ9ij.Hx.QA8yU39jojdYuhGo4IGIrWuLy/gO
37	123456785	alex	sanchez	262184289	962184289	$2a$10$fTkby743laBrv0bZ7tSsj.EtYG8GO5L6gubQQGdgHLbniefGMGSmi
\.


--
-- Name: bodegas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bodegas_id_seq', 1, true);


--
-- Name: correos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.correos_id_seq', 19, true);


--
-- Name: cuenta_corriente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuenta_corriente_id_seq', 2, true);


--
-- Name: departamentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departamentos_id_seq', 2, true);


--
-- Name: detalles_gastos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_gastos_id_seq', 1, true);


--
-- Name: gastos_comunes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_comunes_id_seq', 18, true);


--
-- Name: movimientos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimientos_id_seq', 4, true);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 33, true);


--
-- Name: reclamos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reclamos_id_seq', 12, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- Name: turnos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.turnos_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 37, true);


--
-- Name: asigna asigna_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asigna
    ADD CONSTRAINT asigna_pkey PRIMARY KEY (roles_id, users_id);


--
-- Name: bodegas bodegas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bodegas
    ADD CONSTRAINT bodegas_pkey PRIMARY KEY (id);


--
-- Name: correos correos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.correos
    ADD CONSTRAINT correos_pkey PRIMARY KEY (id);


--
-- Name: cuentas_corrientes cuenta_corriente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_corrientes
    ADD CONSTRAINT cuenta_corriente_pkey PRIMARY KEY (id);


--
-- Name: departamentos departamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT departamentos_pkey PRIMARY KEY (id);


--
-- Name: detalles_gastos detalles_gastos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_gastos
    ADD CONSTRAINT detalles_gastos_pkey PRIMARY KEY (id);


--
-- Name: gastos_comunes gastos_comunes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_comunes
    ADD CONSTRAINT gastos_comunes_pkey PRIMARY KEY (id);


--
-- Name: involucra involucra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.involucra
    ADD CONSTRAINT involucra_pkey PRIMARY KEY (departamentos_id, users_id);


--
-- Name: movimientos movimientos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimientos
    ADD CONSTRAINT movimientos_pkey PRIMARY KEY (id);


--
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- Name: realizas realiza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realizas
    ADD CONSTRAINT realiza_pkey PRIMARY KEY (users_id, reclamos_id);


--
-- Name: reclamos reclamos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclamos
    ADD CONSTRAINT reclamos_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: supervisas supervisa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supervisas
    ADD CONSTRAINT supervisa_pkey PRIMARY KEY (users_id, reclamos_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: asigna asigna_roles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asigna
    ADD CONSTRAINT asigna_roles_id_fkey FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- Name: asigna asigna_roles_id_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asigna
    ADD CONSTRAINT asigna_roles_id_fkey1 FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- Name: asigna asigna_roles_id_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asigna
    ADD CONSTRAINT asigna_roles_id_fkey2 FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- Name: asigna asigna_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asigna
    ADD CONSTRAINT asigna_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: asigna asigna_users_id_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.asigna
    ADD CONSTRAINT asigna_users_id_fkey1 FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: correos correos_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.correos
    ADD CONSTRAINT correos_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: cuentas_corrientes cuentas_corrientes_departamentos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentas_corrientes
    ADD CONSTRAINT cuentas_corrientes_departamentos_id_fkey FOREIGN KEY (departamentos_id) REFERENCES public.departamentos(id);


--
-- Name: detalles_gastos detalles_gastos_gastos_comunes_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_gastos
    ADD CONSTRAINT detalles_gastos_gastos_comunes_id_fkey FOREIGN KEY (gastos_comunes_id) REFERENCES public.gastos_comunes(id);


--
-- Name: gastos_comunes gastos_comunes_departamentos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gastos_comunes
    ADD CONSTRAINT gastos_comunes_departamentos_id_fkey FOREIGN KEY (departamentos_id) REFERENCES public.departamentos(id);


--
-- Name: involucra involucra_departamentos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.involucra
    ADD CONSTRAINT involucra_departamentos_id_fkey FOREIGN KEY (departamentos_id) REFERENCES public.departamentos(id);


--
-- Name: involucra involucra_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.involucra
    ADD CONSTRAINT involucra_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: movimientos movimientos_cuentas_corrientes_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimientos
    ADD CONSTRAINT movimientos_cuentas_corrientes_id_fkey FOREIGN KEY (cuentas_corrientes_id) REFERENCES public.cuentas_corrientes(id);


--
-- Name: productos productos_bodegas_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_bodegas_id_fkey FOREIGN KEY (bodegas_id) REFERENCES public.bodegas(id);


--
-- Name: realizas realiza_reclamos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realizas
    ADD CONSTRAINT realiza_reclamos_id_fkey FOREIGN KEY (reclamos_id) REFERENCES public.reclamos(id);


--
-- Name: realizas realiza_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realizas
    ADD CONSTRAINT realiza_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: reclamos reclamos_departamentos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclamos
    ADD CONSTRAINT reclamos_departamentos_id_fkey FOREIGN KEY (departamentos_id) REFERENCES public.departamentos(id);


--
-- Name: revisas revisa_productos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revisas
    ADD CONSTRAINT revisa_productos_id_fkey FOREIGN KEY (productos_id) REFERENCES public.productos(id);


--
-- Name: revisas revisa_roles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revisas
    ADD CONSTRAINT revisa_roles_id_fkey FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- Name: supervisas supervisa_reclamos_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supervisas
    ADD CONSTRAINT supervisa_reclamos_id_fkey FOREIGN KEY (reclamos_id) REFERENCES public.reclamos(id);


--
-- Name: supervisas supervisa_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supervisas
    ADD CONSTRAINT supervisa_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: turnos turnos_users_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turnos
    ADD CONSTRAINT turnos_users_id_fkey FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

