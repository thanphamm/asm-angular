"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DangnhapComponent = void 0;
var core_1 = require("@angular/core");
var DangnhapComponent = /** @class */ (function () {
    function DangnhapComponent(router) {
        this.router = router;
    }
    DangnhapComponent.prototype.ngOnInit = function () {
    };
    DangnhapComponent.prototype.login = function () {
        if (this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(["main"]);
        }
        else {
            alert("Đăng nhập thất bại");
        }
    };
    DangnhapComponent = __decorate([
        core_1.Component({
            selector: 'app-dangnhap',
            templateUrl: './dangnhap.component.html',
            styleUrls: ['./dangnhap.component.css']
        })
    ], DangnhapComponent);
    return DangnhapComponent;
}());
exports.DangnhapComponent = DangnhapComponent;
