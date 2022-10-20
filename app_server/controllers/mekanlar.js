var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
    res.render('anasayfa',
    { "baslik": 'Ana sayfa',
    "sayfaBaslik":{
        "siteAd":"Mekanbul",
        "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
    {
        "ad":"Starbucks",
        "adres":"Centrum Garden AVM",
        "puan":"4",
        "mesafe":"8 km",
        "imkanlar":["Kavhe","Çay","Pasta"] 
    },
    {
        "ad":"Gloria Kafe",
        "adres":"Sdü Doğu Kampüsü",
        "puan":"3",
        "mesafe":"4 km",
        "imkanlar":["Kavhe","Çay","Pasta"]  
    }]
});
}

const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi',
    { "baslik": 'Mekan bilgisi',
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "adres":"Centrum Garden",
        "puan":"4",
        "saatler":[{
                "gunler":"Pazartesi-Cuma",
                "acilis":"8.00",
                "kapanis":"23.00",
                "kapali": false 
            },
            {
                "gunler":"Cumartesi",
                "acilis":"9.00",
                "kapanis":"22.00",
                "kapali": false
            },
            {
                "gunler":"Pazar",
                "kapali": true
            }
            
        ],
        "imkanlar":["Kahve","Çay","Pasta"],
        "koordinatlar":{
            "enlem":"37.787",
            "boylam":"30.568"
        },
        "yorumlar":[
            {
                "yorumYapan":"Volkan",
                "puan":"3",
                "tarih":"20 Ekim 2022",
                "yorumMetni":"Ortalama bir mekan."
            }
        ]
    }
 });
}

const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' });
}


module.exports = {

    anaSayfa,
    mekanBilgisi,
    yorumEkle

}