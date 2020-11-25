--
-- PostgreSQL database dump
--

-- Dumped from database version 11.9 (Debian 11.9-0+deb10u1)
-- Dumped by pg_dump version 11.9 (Debian 11.9-0+deb10u1)

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
    users_id integer NOT NULL
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
    roles_id integer
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
    porcentaje_interes integer,
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
-- Name: gestiona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gestiona (
    users_id integer NOT NULL,
    productos_id integer NOT NULL
);


ALTER TABLE public.gestiona OWNER TO postgres;

--
-- Name: involucra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.involucra (
    departamentos_id integer NOT NULL,
    users_id integer NOT NULL
);


ALTER TABLE public.involucra OWNER TO postgres;

--
-- Name: movimientos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimientos (
    id integer NOT NULL,
    nombre_movimiento character varying(30),
    monto integer,
    cuenta_corriente_id integer
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
-- Name: realiza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.realiza (
    users_id integer NOT NULL,
    reclamos_id integer NOT NULL
);


ALTER TABLE public.realiza OWNER TO postgres;

--
-- Name: reclamos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reclamos (
    id integer NOT NULL,
    n_reclamo integer,
    descripcion text,
    respuesta text,
    fecha_ingreso date,
    fecha_modificacion date,
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
-- Name: revisa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.revisa (
    users_id integer NOT NULL,
    productos_id integer NOT NULL
);


ALTER TABLE public.revisa OWNER TO postgres;

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
-- Name: supervisa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supervisa (
    users_id integer NOT NULL,
    reclamos_id integer NOT NULL
);


ALTER TABLE public.supervisa OWNER TO postgres;

--
-- Name: turnos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.turnos (
    id integer NOT NULL,
    hora_inicio time without time zone,
    hora_termino time without time zone,
    fecha_inicio date,
    fecha_termino date,
    roles_id integer
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
    password text,
    roled_id integer
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

COPY public.asigna (roles_id, users_id) FROM stdin;
\.


--
-- Data for Name: bodegas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bodegas (id, n_bodega, capacidad, cantidad_actual) FROM stdin;
\.


--
-- Data for Name: correos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.correos (id, correo, roles_id) FROM stdin;
\.


--
-- Data for Name: cuentas_corrientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentas_corrientes (id, deuda_total, abono, total_pago, n_cuenta, departamentos_id) FROM stdin;
\.


--
-- Data for Name: departamentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departamentos (id, n_depto) FROM stdin;
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
\.


--
-- Data for Name: gestiona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gestiona (users_id, productos_id) FROM stdin;
\.


--
-- Data for Name: involucra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.involucra (departamentos_id, users_id) FROM stdin;
\.


--
-- Data for Name: movimientos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimientos (id, nombre_movimiento, monto, cuenta_corriente_id) FROM stdin;
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, cod_prod, nombre, cantidad, fecha_modificacion, volumen, bodegas_id) FROM stdin;
\.


--
-- Data for Name: realiza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.realiza (users_id, reclamos_id) FROM stdin;
\.


--
-- Data for Name: reclamos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reclamos (id, n_reclamo, descripcion, respuesta, fecha_ingreso, fecha_modificacion, departamentos_id) FROM stdin;
\.


--
-- Data for Name: revisa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.revisa (users_id, productos_id) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, cod_rol, nombre) FROM stdin;
\.


--
-- Data for Name: supervisa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supervisa (users_id, reclamos_id) FROM stdin;
\.


--
-- Data for Name: turnos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.turnos (id, hora_inicio, hora_termino, fecha_inicio, fecha_termino, roles_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, rut, nombre, apellido, telefono_casa, telefono_celular, password, roled_id) FROM stdin;
\.


--
-- Name: bodegas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bodegas_id_seq', 1, false);


--
-- Name: correos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.correos_id_seq', 1, false);


--
-- Name: cuenta_corriente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuenta_corriente_id_seq', 1, false);


--
-- Name: departamentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departamentos_id_seq', 1, false);


--
-- Name: detalles_gastos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_gastos_id_seq', 1, false);


--
-- Name: gastos_comunes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gastos_comunes_id_seq', 1, false);


--
-- Name: movimientos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimientos_id_seq', 1, false);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 1, false);


--
-- Name: reclamos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reclamos_id_seq', 1, false);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- Name: turnos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.turnos_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


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
-- Name: gestiona gestiona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gestiona
    ADD CONSTRAINT gestiona_pkey PRIMARY KEY (users_id, productos_id);


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
-- Name: realiza realiza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.realiza
    ADD CONSTRAINT realiza_pkey PRIMARY KEY (users_id, reclamos_id);


--
-- Name: reclamos reclamos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reclamos
    ADD CONSTRAINT reclamos_pkey PRIMARY KEY (id);


--
-- Name: revisa revisa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.revisa
    ADD CONSTRAINT revisa_pkey PRIMARY KEY (users_id, productos_id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: supervisa supervisa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supervisa
    ADD CONSTRAINT supervisa_pkey PRIMARY KEY (users_id, reclamos_id);


--
-- Name: turnos turnos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turnos
    ADD CONSTRAINT turnos_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: turnos turnos_roles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.turnos
    ADD CONSTRAINT turnos_roles_id_fkey FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- PostgreSQL database dump complete
--

