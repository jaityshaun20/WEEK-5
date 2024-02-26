var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define an abstract class named Sport
var Sport = /** @class */ (function () {
    function Sport() {
    }
    return Sport;
}());
var Volleyball = /** @class */ (function (_super) {
    __extends(Volleyball, _super);
    function Volleyball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Volleyball.prototype.play = function () {
        console.log("Playing volleyball...");
    };
    Volleyball.prototype.score = function () {
        console.log("Scoring points in volleyball...");
    };
    Volleyball.prototype.getEquipment = function () {
        console.log("Volleyball requires a net and a ball.");
    };
    return Volleyball;
}(Sport));
var Basketball = /** @class */ (function (_super) {
    __extends(Basketball, _super);
    function Basketball() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Basketball.prototype.play = function () {
        console.log("Playing basketball...");
    };
    Basketball.prototype.score = function () {
        console.log("Scoring points in basketball...");
    };
    Basketball.prototype.getEquipment = function () {
        console.log("Basketball requires a hoop and a ball.");
    };
    return Basketball;
}(Sport));
// Create instances of Volleyball and Basketball
var volleyball = new Volleyball();
var basketball = new Basketball();
// Use functions from the abstract class and interface
console.log(volleyball.play());
volleyball.getEquipment();
basketball.score();
basketball.getEquipment();
