// properties
interface Model<TData, TMethods>{
    data : TData;
    methods : TMethods;
}
interface IUser{
    firstName : string;
    lastName : string;
}
// method
interface IMethods{
   fullName() : string;
}
type model = Model<IUser, IMethods>;


class User implements model{
    data : IUser;
    methods : IMethods;
    constructor( firstName : string, lastName : string){
        this.data = {firstName, lastName}
        this.methods = {
            fullName:()=>`${firstName} ${lastName}`
        }
    }
}

const user1 = new User('Ahasan', 'Nahid');
console.log(user1.methods.fullName());