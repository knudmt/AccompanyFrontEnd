<template>
    <div class="container max-w-full">
        <VendorList @view-menu="fetchMenu" v-if="show" :locationName="locationName" :vendors="vendors" />
        <div v-else>
            
            <ProductList :locationName="locationName" :selectedVendor="selectedVendor" :menu="menu"/>

        </div>
        
    </div>
</template>


<script>

import VendorList from '../components/orderpage/VendorList';
import ProductList from '../components/orderpage/ProductList';

export default {
  name: 'LocationPickerView',
  components: { 
    VendorList,
    ProductList,
  },
  data() {
        return {
            vendors: [],
            menu: [],
            show: true,
            selectedVendor: '',
        }
    }, 
    props: {
        locationName: String
    },
    methods: {

        getLocation: function(){
            console.log("Getting Location...");
            console.log("Location Name: " + this.locationName);
            window.localStorage.setItem("Airport", this.locationName);

            if(this.locationName.includes('Atlanta')){
                return 'Atlanta';
            }
            else if(this.locationName.includes('Orleans')){
                return 'New Orleans';
            }
            else {
                return 'Nashville';
            }
        },

        buildData: function(concessions){
            var i;
            var objArr = {      // object mapping (base object)
                vendors: []
            };
            
            

            for(i = 0; i < concessions.conessions.length; i++){                // iterate
                // build object on the fly; assumptions made... MK
                // future changes to the back end services will be required.
                var name = concessions.conessions[i];
                var json = {};
                var id = this.getID(name);                  // get the correpsonding ID (barf, hard-coded for now. will need to return object with ID on server)
                json["id"] = id;
                json["title"] = name;
                json["image"] = "Rectangle2.png";
                json["fee"] = "$5.99";
                json["deliveryTime"] = "25-35";

              objArr.vendors.push(json);                    // like salt & pepper said, PUSH IT
            }

            return objArr.vendors;
        },

        /*
        cough, cough... This method will set the correct ID 
        needed to retrieve menu from the server. API will need to change with future release.
        We don't have a lot of data at the moment so this is "ok" for now. MK
        */
        getID: function(name){
            switch(name)
            {
                case "Chick-fil-A":
                    return "11";
                case "Pei Wei Asian Kitchen":
                    return "6";
                case "PDQ Chicken":
                    return "7";
                case "Starbucks":
                    return "8";
                case "Qdoba Mexican":
                    return "9";
                case "Wendy's":
                    return "10";
                case "Auntie Annes":
                    return "12";

            }
        },        

        async fetchVendors(){
            const locale = this.getLocation();
            console.log("Fetching vendors with locale of: " + locale);

            const res = await fetch('https://accompanyconcessions.azurewebsites.net/api/restaurants?city=' + locale);
            const data = await res.json();
            
            var concessions = JSON.parse(data);

            return this.buildData(concessions);
        },
        async fetchMenu(vendor){
            // assumptions were made... backend changes will be required in the near future MK
            // add .then() for success and failure processing MK
            window.localStorage.setItem("vendorId", vendor.id);

            const res = await fetch(`https://accompanyconcessions.azurewebsites.net/api/concessions?id=${vendor.id}`);
            const data = await res.json();
            
            var parsed = JSON.parse(data);
            var concessionName = parsed.menus.menu.concessionName;
            var items = parsed.menus.menu.categories[0].menuItems;
            
            var i;
            const arr = [];
            const regex = /[^0-9.-]+/g;
            // id, title, short, long
            for(i = 0; i < items.length; i++){
                var json = {};

                json["id"] = i + 1;
                json["title"] = items[i].name;
                json["short"] = "short";
                json["long"] = "longer description";
        
                var currency = items[i].subItems[0].price;
                var price = Number(currency.replace(regex, ""));
                json["price"] = price; 
                json["image"] = "Square2.png";

                arr.push(json);
            }
    
            this.menu = arr;
            this.show = !this.show
            this.selectedVendor = concessionName;

            return arr;
        }
    },
    async created() {
        this.vendors = await this.fetchVendors()
    },
}

</script>