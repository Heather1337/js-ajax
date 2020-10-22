"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (resp)=> {
        $('#fortune-text').html(resp);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, (resp) => {
        const forecast = resp.forecast;
        $('#weather-info').html(forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!) #melon-type-field
    //qty-field
    console.log(evt)
    const melon = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    };
    console.log(melon)

    $.post('/order-melons.json', melon, (resp)=> {
        if(resp.code === 'ERROR') {
            $('#order-status').html(`<text class="order-error">${resp.msg}</text>`);
        } else {
            $('#order-status').html(`<text>${resp.msg}</text>`);
        }
    });
}

//#order-status
$("#order-form").on('submit', orderMelons);



