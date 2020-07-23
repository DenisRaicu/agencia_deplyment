const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    // Hacemos la peticion a la BD:
    const testimoniales = await Testimonial.findAll();
    
    // Renderizamos la vista pasandole los datos obtenidos:
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.insertarTestimonial = async (req, res) => {
    // Validar que todos los campos esten llenos:
    let { nombre, correo, mensaje } = req.body;

    let errores = [];

    if (!nombre) { errores.push({ 'mensaje': 'Agrega tu Nombre' }); }
    if (!correo) { errores.push({ 'mensaje': 'Agrega tu Correo' }); }
    if (!mensaje) { errores.push({ 'mensaje': 'Agrega tu Mensaje' }); }

    // Revisar por errores:
    if (errores.length > 0) {
        // Hacemos la peticion a la BD:
        const testimoniales = await Testimonial.findAll();

        // Muestra a la vista con errores:
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testiomoniales',
            testimoniales
        });
    } 
    
    else {
        // Almacena en la BD:
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        });

        res.redirect('/testimoniales');
    }
}