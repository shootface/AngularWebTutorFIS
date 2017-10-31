"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var logincomponent = (function () {
    function logincomponent() {
    }
    return logincomponent;
}());
logincomponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html'
    })
], logincomponent);
exports.logincomponent = logincomponent;
var usuarioBasic = (function () {
    function usuarioBasic(us, pas) {
        this.usu = us;
        this.pas = pas;
    }
    return usuarioBasic;
}());
var usuarioEstudiante = (function (_super) {
    __extends(usuarioEstudiante, _super);
    function usuarioEstudiante(us, pas) {
        return _super.call(this, us, pas) || this;
    }
    usuarioEstudiante.prototype.tipo = function () {
        return 1;
    };
    return usuarioEstudiante;
}(usuarioBasic));
var usuarioTutor = (function (_super) {
    __extends(usuarioTutor, _super);
    function usuarioTutor(us, pas) {
        return _super.call(this, us, pas) || this;
    }
    usuarioTutor.prototype.tipo = function () {
        return 2;
    };
    return usuarioTutor;
}(usuarioBasic));
var factoryUsuario = (function () {
    function factoryUsuario() {
    }
    factoryUsuario.prototype.crearUsuario = function (us, pas, tipe) {
        if (tipe == 1) {
            return new usuarioEstudiante(us, pas);
        }
        else if (tipe == 2) {
            return new usuarioTutor(us, pas);
        }
    };
    return factoryUsuario;
}());
//# sourceMappingURL=login.component.js.map