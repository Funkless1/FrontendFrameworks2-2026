export class Demo {

    constructor(public name: string) {
        this.name = name;
    }

    fire(): void {
        console.log('Bang!');
    }

    //to parse ${weapon} properly, use backtcks ``
    fireweapon(weapon: Weapons): void {
        console.log(`Fire the ${weapon}`);
    }

    //lookup the name of the enumeration based on the value
    fireweaponToString(weapon: Weapons): string {
        return Weapons[weapon];
    }
}

//enumerations auto increment from previous value
//you can set canno to 10, then the nerfgun would be 11 and so on
export enum Weapons {Cannon = 10, NerfGun, Raygun, OrbitalSatellite}

let myFirstWeapon = new Demo(`Dob`);

console.log(`I'm a demo object named ${myFirstWeapon.name}`);

myFirstWeapon.fire();
myFirstWeapon.fireweapon(Weapons.OrbitalSatellite);

let weaponUsed: string;
weaponUsed = myFirstWeapon.fireweaponToString(Weapons.OrbitalSatellite);
console.log(`The weapon with the number ${Weapons.OrbitalSatellite} is the ${weaponUsed}`);