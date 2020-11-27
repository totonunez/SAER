import users from '../models/users';
import roles from '../models/roles';
import bodegas from '../models/bodegas';
import correos from '../models/correos';
import turnos from '../models/turnos';
import productos from '../models/productos';
import reclamos from '../models/reclamos';
import departamentos from '../models/departamentos';
import cuentas_corrientes from '../models/cuentasCorrientes';
import movimientos from '../models/movimientos';
import gastosComunes from '../models/gastosComunes';
import detallesGastos from '../models/detallesGastos';
import revisas from '../models/revisas';
import realizas from '../models/realizas';
import supervisas from '../models/supervisas';

//1:1

gastosComunes.hasOne(detallesGastos, {foreignKey: 'gastos_comunes_id', sourceKey: 'id'});
detallesGastos.belongsTo(gastosComunes, {foreignKey: 'gastos_comunes_id', sourceKey: 'id'});

departamentos.hasOne(cuentas_corrientes, {foreignKey: 'departamentos_id', sourceKey: 'id'});
cuentas_corrientes.belongsTo(departamentos, {foreignKey: 'departamentos_id', sourceKey: 'id'});

//1:N

users.hasMany(turnos, {foreignKey: 'users_id', sourceKey: 'id'});
turnos.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

bodegas.hasMany(productos, {foreignKey: 'bodegas_id', sourceKey: 'id'});
productos.belongsTo(bodegas, {foreignKey: 'bodegas_id', sourceKey: 'id'});

departamentos.hasMany(reclamos, {foreignKey: 'departamentos_id', sourceKey: 'id'});
reclamos.belongsTo(departamentos, {foreignKey: 'departamentos_id', sourceKey: 'id'});

departamentos.hasMany(gastosComunes, {foreignKey: 'departamentos_id', sourceKey: 'id'});
gastosComunes.belongsTo(departamentos, {foreignKey: 'departamentos_id', sourceKey: 'id'});

cuentas_corrientes.hasMany(movimientos, {foreignKey: 'cuentas_corrientes_id', sourceKey: 'id'});
movimientos.belongsTo(cuentas_corrientes, {foreignKey: 'cuentas_corrientes_id', sourceKey: 'id'});

users.hasMany(correos, {foreignKey: 'users_id', sourceKey: 'id'});
correos.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

//M:N

users.belongsToMany(roles, {through: "asigna", foreignKey: 'users_id'});
roles.belongsToMany(users, {through: "asigna", foreignKey: 'roles_id'});

departamentos.belongsToMany(users, {through: "involucra", foreignKey: 'departamentos_id'});
users.belongsToMany(departamentos, {through: "involucra", foreignKey: 'users_id'});

//parciales

productos.hasMany(revisas, {foreignKey: 'productos_id', sourceKey: 'id'});
revisas.belongsTo(productos, {foreignKey: 'productos_id', sourceKey: 'id'});

roles.hasMany(revisas, {foreignKey: 'roles_id', sourceKey: 'id'});
revisas.belongsTo(productos, {foreignKey: 'roles_id', sourceKey: 'id'});

users.hasMany(realizas, {foreignKey: 'users_id', sourceKey: 'id'});
realizas.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

reclamos.hasMany(realizas, {foreignKey: 'reclamos_id', sourceKey: 'id'});
realizas.belongsTo(reclamos, {foreignKey: 'reclamos_id', sourceKey: 'id'});

users.hasMany(supervisas, {foreignKey: 'users_id', sourceKey: 'id'});
supervisas.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

reclamos.hasMany(supervisas, {foreignKey: 'reclamos_id', sourceKey: 'id'});
supervisas.belongsTo(reclamos, {foreignKey: 'reclamos_id', sourceKey: 'id'});



