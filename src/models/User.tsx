// export default interface User {
export default class User {
    // name: string;
    // nickname: string;
    // age: number;
    constructor(public name: string = '',
                public nickname: string = '',
                public age: number = 0) {
        this.name = name;
        this.nickname = nickname;
        this.age = age;
    }
}