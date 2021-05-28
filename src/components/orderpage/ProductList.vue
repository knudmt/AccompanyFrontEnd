<template>
    <div class="lg:px-40 pt-4 max-w-screen-2xl mb-16 m-auto">
        <div class="breadcrumbs flex mb-6">
            <a href="/OrderResturantPicker" class="bg-arrowRight breadcrumb bg-no-repeat bg-right bg-8px pr-6">Choose Restaurant</a>
            <a @click="viewCart = false" class="cursor-pointer mx-3 bg-arrowRight breadcrumb bg-no-repeat bg-right bg-8px pr-6" >Choose Meal</a>
            <a v-if="viewCart" class="breadcrumb">View Cart</a>
        </div>
        <div class="flex flex-wrap section-wrapper">
            <div v-for="product in menu" :key="product" v-show="!viewCart" :class="{ sectionTitle: product.section }" class="flex flex-col w-1/3">
                <div v-if="product.section" class="text-left w-full text-darkBlueText lg:text-xl font-bold">{{ product.section }}</div>
                <ProductCard @add-cart="addToCart(product)" :product="product" class="locationOption w-full flex py-2 px-6 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer" />
            </div>
            <CartList :cart="cart" v-if="viewCart" />
            <CartWidget :cart="cart" v-if="!viewCart && showCartWidget" :itemCount="itemCount" @view-cart="viewCart = !viewCart" :totalPrice="totalPrice"/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard'
import CartList from './CartList'
import CartWidget from './CartWidget'

export default {
    name: 'ProductList',
    components: {
        ProductCard,
        CartList,
        CartWidget,
        
    },
    props: {
        menu: Array,
    },
    data() {
        return {
            cart: [],
            showCartWidget: false,
            itemCount: 0,
            totalPrice: 0,
            viewCart: false
        }
    },
    methods: {
        
        calculateTotal(item) {
            //item.forEach(x => {
            //    this.totalPrice += x.price
            //    console.log(this.totalPrice)
           // })
            this.totalPrice += item
        },
        addToCart(product) {
            this.cart.push(product)
            this.itemCount++
            this.calculateTotal(product.price)
            this.showCartWidget = true
        }, 
    },
}
</script>