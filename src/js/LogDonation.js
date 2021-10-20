export default class LogDonation
{
    constructor(DonationInfo)
    {
        this._donationInfo = DonationInfo;
    }

    async submitData()
    {
        console.log('[DEBUG]: Sending Donation info...');

        var response = fetch('https://treedonationapi.azurewebsites.net/api/Donation', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin":"*",
                "Content-type": "application/json"
            },
            body: JSON.stringify(this._donationInfo)
        })
        .then(response => {
            if(response.status === 201){
                console.log("SUCCESS WITH DONATION DATA");
            }
        })
        .catch(function(err){
            console.log('ERROR sending donation data...' + err);
        });
    }
}