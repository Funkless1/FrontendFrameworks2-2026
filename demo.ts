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
}

export enum Weapons {Cannon, NerfGun, Raygun, OrbitalSatellite}

let myFirstWeapon = new Demo(`Dob`);

console.log(`I'm a demo object named ${myFirstWeapon.name}`);