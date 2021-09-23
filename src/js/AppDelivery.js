export default class AppDelivery
{
    constructor(User, Items, instructions, concessionName, airport, total)
    {
        if(User == null || Items == null)
        {
            throw 'AppUser or AppItems is undefined';
        }

        this.user = User;
        this.items = Items;
        this.instructions = instructions;
        this.concessionName = concessionName;
        this.airport = airport;
        this.total = total;
    }
}