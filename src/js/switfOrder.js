export default class SwiftOrder 
{
    constructor(AppDelivery){
        if(AppDelivery == null){
            throw 'AppDelivery is null or undefined';
        }

        this._appDelivery = AppDelivery;
    }

    async submitOrder(){
        // https://localhost:44365/
        // https://accompanyweborder.azurewebsites.net/
        console.log("[DEBUG]: attempting fetch...");
        var response = await fetch('https://accompanyweborder.azurewebsites.net/api/Delivery', {
            method: 'POST', 
            headers:{
                "Accept":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Content-type": "application/json"
            },
            body: JSON.stringify(this._appDelivery)
        })
        .then(function(res){
            console.log("[DEBUG]: " + res);
            return res;
        })
        .then(function(data){
            console.log("[DEBUG]: data: " + data);
            if(data.statusText === "OK"){
                alert("Order Placed!");
            } else{
                alert("OOPS! Something went wrong...");
            }
        });
    }
}