export class Demo {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    fire() {
        console.log('Bang!');
    }
    //to parse ${weapon} properly, use backtcks ``
    fireweapon(weapon) {
        console.log(`Fire the ${weapon}`);
    }
}
export var Weapons;
(function (Weapons) {
    Weapons[Weapons["Cannon"] = 0] = "Cannon";
    Weapons[Weapons["NerfGun"] = 1] = "NerfGun";
    Weapons[Weapons["Raygun"] = 2] = "Raygun";
    Weapons[Weapons["OrbitalSatellite"] = 3] = "OrbitalSatellite";
})(Weapons || (Weapons = {}));
let myFirstWeapon = new Demo(`Dob`);
console.log(`I'm a demo object named ${myFirstWeapon.name}`);
