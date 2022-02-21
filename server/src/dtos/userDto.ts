
interface IData {
    _id: string,
    phoneNumber: string
}


export default class UserDto {
    id;
    phoneNumber;

    constructor(data: IData) {
        this.id = data._id;
        this.phoneNumber = data.phoneNumber
    }
}