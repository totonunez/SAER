import productos from '../models/productos';
import bodegas from '../models/bodegas';
import sequelize from 'sequelize';

export async function getAllProductos(req, res) {
    const allProductos = await productos.findAll({
        attributes: ['id', 'cantidad', 'cod_prod', 'fecha_modificacion', 'nombre', 'volumen', 'bodegas_id'],
        order: [
            ['id', 'DESC']
        ],
        include: [
            bodegas
        ]
    });
    res.json({allProductos});
};

export async function createProductos(req, res) {
    try{
        const {cantidad, volumen, nombre, cod_prod, n_bodega} = req.body;
        const bodega = await bodegas.findOne({
            where: {
                n_bodega
            },
            attributes: ['id', 'capacidad', 'cantidad_actual']
        });
        const aux = await productos.findOne({
            where: {
                cod_prod
            },
            attributes: ['id']
        });
        if(aux){
            res.json({message: "El código del articulo ingresado ya existe", result: false})
        }else{
            if(bodega){
                if(parseInt(bodega.dataValues.cantidad_actual) + parseInt(cantidad) <= parseInt(bodega.dataValues.capacidad)){
                    const id = bodega.dataValues.id
                    const producto = await productos.create(
                        {
                            cantidad,
                            cod_prod,
                            fecha_modificacion: sequelize.literal('CURRENT_TIMESTAMP'),
                            nombre,
                            volumen,
                            bodegas_id: id,
                        },{
                            fields: ['cantidad', 'cod_prod', 'fecha_modificacion', 'nombre', 'volumen', 'bodegas_id']
                        }
                    );
                    const x = parseInt(bodega.dataValues.cantidad_actual) + parseInt(cantidad)
                    console.log(x);
                    const bod = await bodegas.update({
                        cantidad_actual: x
                    },{
                        where: {
                            id: id
                        }
                    });
                    res.json({message: "Articulo agregado correctamente", result: true});
                }else{
                    res.json({message: "La cantidad ingresada supera la capacidad actual de la bodega", result: false})
                }    
            }else{
                res.json({message: "Bodega no encontrada", result: false});
            }
        }
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un problema al agregar el articulo", result: false});
    }
};

export async function deleteProductos(req, res) {
    try{
        const {cod_prod} = req.params;
        const aux = await productos.findOne({
            where: {
                cod_prod
            },
            attributes: ['id', 'cantidad'],
            include: [
                bodegas
            ]
        });
        console.log(aux.dataValues.bodega.dataValues);
        const newCant = parseInt(aux.dataValues.bodega.dataValues.cantidad_actual) - parseInt(aux.dataValues.cantidad) 
        await productos.destroy({
            where: {
                cod_prod
            }
        });
        await bodegas.update({
            cantidad_actual: newCant
        },{
            where: {
                n_bodega: aux.dataValues.bodega.dataValues.n_bodega
            }
        });
        res.json({message: "Articulo eliminado exitosamente", result: true});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al eliminar el articulo", result: false});
    }
};

export async function updateProductos(req, res) {
    try{
        const {cod_prod, cantidad} = req.body;
        const auxProd = await productos.findOne({
            where: {
                cod_prod
            },
            attributes: ['id','cantidad'],
            include: [
                bodegas
            ]
        })
        if(parseInt(auxProd.dataValues.bodega.dataValues.cantidad_actual,10)+parseInt(cantidad,10) <= 100){
            const newCant = parseInt(auxProd.dataValues.bodega.dataValues.cantidad_actual,10) - parseInt(auxProd.dataValues.cantidad,10) + parseInt(cantidad,10)
            console.log(parseInt(auxProd.dataValues.bodega.dataValues.cantidad_actual), parseInt(auxProd.dataValues.cantidad), cantidad, newCant);
            const bodega = await bodegas.update({
                cantidad_actual: newCant,
            },{
                where: {
                    n_bodega: auxProd.dataValues.bodega.dataValues.n_bodega
                }
            });
            const updateProducto = await productos.update({
                cantidad,
                fecha_modificacion: sequelize.literal('CURRENT_TIMESTAMP')
            },{
                where: {
                    cod_prod
                } 
            });
            const prod = await productos.findOne({
                where: {
                    cod_prod
                },
                attributes: ['fecha_modificacion']
            })
            res.json({message: "Articulo actualizado correctamente", result: true, productoFecha: prod, cant: parseInt(newCant)});
        }else{
            res.json({message: "La cantidad supera el límite del abodega", result: false});
        }    
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un problema al actualizar el articulo", result: false});
    }
};