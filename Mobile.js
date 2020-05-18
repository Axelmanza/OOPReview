"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.print = function () {
        var text = 'The characteristics of the mobile ' + this.name + ' are:\nName: ' + this.name + '\nModel: ' + this.model + '\nTrademark: ' + this.trademark +
            '\nSD Size (GB): ' + this.sdSize + '\nColor: ' + this.color + '\nIs 5g?: ' + this.is5G + '\nNumber of Cameras: ' + this.cameraNumber;
        console.log(text);
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSDsize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCamNum = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTrademark = function (mark) {
        this.trademark = mark;
    };
    Mobile.prototype.setSDsize = function (sd) {
        this.sdSize = sd;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5G = function (val) {
        this.is5G = val;
    };
    Mobile.prototype.setCamNum = function (num) {
        this.cameraNumber = num;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
