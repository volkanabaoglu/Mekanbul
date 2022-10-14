var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res) {
    res.render('anasayfa', { "title": "AnaSayfa" })
}
const mekanBilgisi = function (req, res) {
    res.render('mekanbilgisi', { "title": "Mekan Bilgisi" })
}
const yorumEkle = function (req, res) {
    res.render('yorumekle', { "title": "Yorum Sayfasi" })
}
module.exports = {

    anaSayfa,
    mekanBilgisi,
    yorumEkle


}
