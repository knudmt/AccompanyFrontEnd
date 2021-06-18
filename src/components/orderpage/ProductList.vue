<template>
    <div>
        <span v-if="!hideMenu">
            <MenuHero v-if="!viewCart" :locationName="locationName" :selectedVendor="selectedVendor" />
        </span>
        <CartHero v-if="viewCart" />
        <CheckoutHero v-if="showCheckout" />
        <div class="lg:px-40 pt-4 pb-16 m-auto max-w-" :class="{ 'bg-bgBlue': showCheckout, 'max-w-screen-2xl': !showCheckout }">
            <div v-if="!hideBreadcrumb" class="breadcrumbs flex mb-6 ml-6">
                <a href="/OrderResturantPicker" class="text-left mt-6 mb-12 lg:pl-0 text-sm lg:text-base bg-arrowRight font-bold text-darkBlueText bg-no-repeat bg-right bg-5px lg:bg-8px pr-3 lg:pr-6">Choose Restaurant</a>
                <a @click="viewCart = false" class="text-left mt-6 mb-12 text-sm lg:text-base bg-arrowRight font-bold text-darkBlueText bg-no-repeat bg-right bg-5px lg:bg-8px pr-3 lg:pr-6 pl-1 lg:pl-4" >Choose Meal</a>
                <a v-if="viewCart" class="breadcrumb text-left mt-6 mb-12 text-sm lg:text-base font-bold text-darkBlueText bg-no-repeat bg-right bg-5px lg:bg-8px pr-3 lg:pr-6 pl-1 lg:pl-4">View Cart</a>
            </div>
            <div class="flex flex-wrap section-wrapper">
                <div v-if="!hideMenu" class="flex flex-wrap section-wrapper">
                    <div v-for="product in menu" :key="product.id" v-show="!viewCart" :class="{ sectionTitle: product.section }" class="flex flex-col w-full lg:mb-0 mb-6 lg:w-1/3">
                        <div v-if="product.section" class="text-left w-full text-darkBlueText lg:text-xl font-bold">{{ product.section }}</div>
                        <ProductCard @add-cart="addToCart(product)" :product="product" class="locationOption w-full flex py-2 px-6 lg:py-2 rounded-sm rounded-b-none text-gray-600 lg:text-lg md:text-base text-13px text-center cursor-pointer" />
                    </div>
                </div>
                <CartList :cart="cart" v-if="viewCart" @show-checkout="showCheckoutScreen()" :totalPrice="totalPrice" :product="product"/>
                <CartWidget :cart="cart" v-if="!viewCart && showCartWidget" :itemCount="itemCount" @view-cart="viewCart = !viewCart" :totalPrice="totalPrice"/>
                <Checkout v-if="showCheckout" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard'
import CartList from './TheCartList'
import CartWidget from './CartWidget'
import Checkout from './Checkout'
import MenuHero from '../heros/MenuHero'
import CartHero from '../heros/CartHero'
import CheckoutHero from '../heros/CheckoutHero'

export default {
    name: 'ProductList',
    components: {
        MenuHero,
        CartHero,
        CheckoutHero,
        ProductCard,
        CartList,
        CartWidget,
        Checkout,
        
    },
    props: {
        menu: Array,
        locationName: String,
        selectedVendor: String,

    },
    data() {
        return {
            cart: [],
            showCartWidget: false,
            itemCount: 0,
            totalPrice: 0,
            viewCart: false, 
            showCheckout: false,
            hideMenu: false,
            hideBreadcrumb: false,
        }
    },
    methods: {
        
        calculateTotal(item) {
            this.totalPrice += item.price
        },
        addToCart(product) {
            if(this.cart.includes(product)){
                product.quantity++
                
                this.itemCount++
                this.calculateTotal(product)
            } else {
                this.cart.push(product)
                this.itemCount++
                this.calculateTotal(product)
                this.showCartWidget = true
            }
        }, 
        showCheckoutScreen() {
            this.showCheckout = true
            this.viewCart = false
            this.showCartWidget = false
            this.hideMenu = true
            this.hideBreadcrumb = true
        }
    },
}
</script>