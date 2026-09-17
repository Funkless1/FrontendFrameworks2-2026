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
    //lookup the name of the enumeration based on the value
    fireweaponToString(weapon) {
        return Weapons[weapon];
    }
}
//enumerations auto increment from previous value
//you can set canno to 10, then the nerfgun would be 11 and so on
export var Weapons;
(function (Weapons) {
    Weapons[Weapons["Cannon"] = 10] = "Cannon";
    Weapons[Weapons["NerfGun"] = 11] = "NerfGun";
    Weapons[Weapons["Raygun"] = 12] = "Raygun";
    Weapons[Weapons["OrbitalSatellite"] = 13] = "OrbitalSatellite";
})(Weapons || (Weapons = {}));
let myFirstWeapon = new Demo(`Dob`);
console.log(`I'm a demo object named ${myFirstWeapon.name}`);
myFirstWeapon.fire();
myFirstWeapon.fireweapon(Weapons.OrbitalSatellite);
let weaponUsed;
weaponUsed = myFirstWeapon.fireweaponToString(Weapons.OrbitalSatellite);
console.log(`The weapon with the number ${Weapons.OrbitalSatellite} is the ${weaponUsed}`);
