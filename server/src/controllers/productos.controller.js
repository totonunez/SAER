import productos from '../models/productos';

export async function getAllProductos(req, res) {
    const allProductos = await productos.findAll({
        attributes: ['id', 'cantidad', 'cod_prod', 'fecha_modificacion', 'nombre', 'volumen'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allProductos});
};