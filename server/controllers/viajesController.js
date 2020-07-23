const Viaje = require('../models/Viajes');

// Muestra todos los viajes disponibles:
exports.mostrarViajes = async (req, res) => {
    // Hacemos la peticion a la BD:
    const viajes = await Viaje.findAll();

    // Renderizamos la vista pasandole los datos obtenidos:
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });
}

// Muestra un viaje con un id concreto: 
exports.mostrarViaje = async (req, res) => {
    // Hacemos la peticion a la BD:
    const viaje = await Viaje.findByPk(req.params.id);
    
    // Renderizamos la vista pasandole los datos obtenidos:
    res.render('viaje', {
        viaje
    });
}