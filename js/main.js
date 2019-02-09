const config = {
    'greeting':{
        'slogan':'Las mejores guitarras',
        'image':'img/fender-telecaster.jpg',
        'text_button':'Comprar'
    },

    'description':{
        'title':'¿Quínes somos?',
        'content': '<p>La mejor tienda de guitarras</p>',
        'image':'img/telecaster.jpg',
    },
    'products':[
        {
        'title':'Telecaster',
        'subtitle':'La mejor telecaster',
        'image':'img/telecaster.jpg',
        },
        {
            'title':'Gibson',
            'subtitle':'La mejor Les Paul',
            'image':'img/gibson.jpg',
            },
    ]



}

const init = (config) => {
    const { greeting, description, products } = config // deconstrucción
    
    // Mensaje
    $("#slogan").html(greeting.slogan);
    $(".wrapper-greeting").css('background-image', 'url('+ greeting.image +')')
    $(".wrapper-greeting  button").html(greeting.text_button)
    
    // Quíenes somos
    $("#content-description > h2").html(description.title)
    $("#text-one p").html(description.content)
    // productos
    createProducts(products)

}

const createProducts = (products) => {
    let builtProducts = '';
    products.forEach(product => {        
        builtProducts += `
            <div class="producto">
                <img src="${product.image}" alt="guitar">
                <div class="producto-descripcion">
                <h3 class="titulo">
                    ${product.title}
                </h3>
                <div class="description">
                    ${product.subtitle}
                </div>
                </div>
            </div>
       `
   })
   $('#content-catalog').html(builtProducts)
}

$(() =>{
    init(config)
})


