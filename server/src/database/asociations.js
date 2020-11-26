import {users} from '../models/users';
import {roles} from '../models/roles';
import {bodegas} from '../models/bodegas';
import {correos} from '../models/correos';
import {turnos} from '../models/turnos';
import {productos} from '../models/productos';
import {reclamos} from '../models/reclamos';
import {departamentos} from '../models/departamentos';
import {cuentas_corrientes} from '../models/cuentasCorrientes';
import {movimientos} from '../models/movimientos';
import {gastosComunes} from '../models/gastosComunes';
import {detallesGastos} from '../models/detallesGastos';
import {revisa} from '../models/revisa';
import {realiza} from '../models/realiza';
import {supervisa} from '../models/supervisa';

//1:1

gastosComunes.hasOne(detallesGastos, {foreignKey: 'gastos_comunes_id', sourceKey: 'id'});
detallesGastos.belongsTo(gastosComunes, {foreignKey: 'gastos_comunes_id', sourceKey: 'id'});

departamentos.hasOne(cuentas_corrientes, {foreignKey: 'departamentos_id', sourceKey: 'id'});
cuentas_corrientes.belongsTo(departamentos, {foreignKey: 'departamentos_id', sourceKey: 'id'});

//1:N

roles.hasMany(turnos, {foreignKey: 'roles_id', sourceKey: 'id'});
turnos.belongsTo(roles, {foreignKey: 'roles_id', sourceKey: 'id'});

bodegas.hasMany(productos, {foreignKey: 'bodegas_id', sourceKey: 'id'});
productos.belongsTo(bodegas, {foreignKey: 'bodegas_id', sourceKey: 'id'});

departamentos.hasMany(reclamos, {foreignKey: 'departamentos_id', sourceKey: 'id'});
reclamos.belongsTo(departamentos, {foreignKey: 'departamentos_id', sourceKey: 'id'});

departamentos.hasMany(gastosComunes, {foreignKey: 'departamentos_id', sourceKey: 'id'});
gastosComunes.belongsTo(departamentos, {foreignKey: 'departamentos_id', sourceKey: 'id'});

cuentas_corrientes.hasMany(movimientos, {foreignKey: 'cuentas_corrientes_id', sourceKey: 'id'});
movimientos.belongsTo(cuentas_corrientes, {foreignKey: 'cuentas_corrientes_id', sourceKey: 'id'});

roles.hasMany(correos, {foreignKey: 'roles_id', sourceKey: 'id'});
correos.belongsTo(roles, {foreignKey: 'roles_id', sourceKey: 'id'});

//M:N

users.belongsToMany(roles, {through: "asigna"});
roles.belongsToMany(users, {through: "asigna"});

departamentos.belongsToMany(users, {through: "involucra"});
users.belongsToMany(departamentos, {through: "involucra"});

//parciales

productos.hasMany(revisa, {foreignKey: 'productos_id', sourceKey: 'id'});
revisa.belongsTo(productos, {foreignKey: 'productos_id', sourceKey: 'id'});

roles.hasMany(revisa, {foreignKey: 'roles_id', sourceKey: 'id'});
revisa.belongsTo(productos, {foreignKey: 'roles_id', sourceKey: 'id'});

users.hasMany(realiza, {foreignKey: 'users_id', sourceKey: 'id'});
realiza.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

reclamos.hasMany(realiza, {foreignKey: 'reclamos_id', sourceKey: 'id'});
realiza.belongsTo(reclamos, {foreignKey: 'reclamos_id', sourceKey: 'id'});

users.hasMany(supervisa, {foreignKey: 'users_id', sourceKey: 'id'});
supervisa.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

reclamos.hasMany(supervisa, {foreignKey: 'reclamos_id', sourceKey: 'id'});
supervisa.belongsTo(reclamos, {foreignKey: 'reclamos_id', sourceKey: 'id'});



