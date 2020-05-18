"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var Nokia = new Mobile_1.Mobile('Nokia', '3210', 'NK', 64, 'blue', false, 2, 180);
var iPhone = new Mobile_1.Mobile('iPhone', '3G', 'AAPL', 128, 'black', true, 3, 590);
var Samsung = new Mobile_1.Mobile('Samsung', 'Galaxy 10', 'Smsng', 64, 'withe', true, 1, 300);
console.log(Nokia);
console.log(iPhone);
console.log(Samsung);
Nokia.setIs5G(true);
Nokia.setCamNum(4);
console.log(Nokia, iPhone, Samsung);
// apartado 7
var moviles = [Nokia, iPhone, Samsung];
console.log(Nokia.print(), iPhone.print(), Samsung.print());
