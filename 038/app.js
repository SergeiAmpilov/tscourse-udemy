"use strict";
class User38 {
    constructor() {
        this.skills = [];
    }
    addSkill(skill) {
        if (typeof skill === 'string') {
            this.skills.push(skill);
        }
        else {
            // skill.map( cSkill => this.skills.push(cSkill))
            this.skills = this.skills.concat(skill);
        }
    }
}
const U_38 = new User38();
U_38.addSkill('PHP');
U_38.addSkill('Bitrix');
console.log(U_38);
U_38.addSkill(['PHP', 'Typescript']);
console.log(U_38);
