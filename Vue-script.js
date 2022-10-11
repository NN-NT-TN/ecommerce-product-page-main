let currentImageId;

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
const App   = Vue.createApp({
    data() {
        return {
            cart: [

               
            ],
            product: 'Fall Limited Edition Sneakers',
            description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
            image: './images/image-product-1.jpg',
            count:0,
            inStock: true,
            price:250,
            discount:50,
            variants: [
              { id: 0, active:true,  thumbnail: './images/image-product-1-thumbnail.jpg', image: './images/image-product-1.jpg' },
              { id: 1, active:false,  thumbnail: './images/image-product-2-thumbnail.jpg', image: './images/image-product-2.jpg' },
              { id: 2, active:false,  thumbnail: './images/image-product-3-thumbnail.jpg', image: './images/image-product-3.jpg' },
              { id: 3, active:false, thumbnail: './images/image-product-4-thumbnail.jpg', image: './images/image-product-4.jpg' },
            ],
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return '$'+val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        displayDisCountPrice(){
            let discount_price= this.price*this.discount/100;
            return this.formatPrice(discount_price);
        },
        ChangeActive(array, value) {
            for (let index = 0; index <  array.length; index++) 
                   {
                        if(array[index].image!==value)
                        array[index].active=false;
                   }
        },
        addToCart() {
           
            var item = this.cart.find(v=>v.name===this.product);
            if(!item){
                this.cart.push({ name:this.product, amount:this.count, price:this.price, image:this.image});
                return;
            }
            item.amount+=this.count;
            //console.log(this.cart.includes(v=>v.name===this.product));
            /*var item = this.variants.find(v=>v.active===true);
            console.log(item);
            if (this.cart.find(v=>v.id===item.id)) {4
                item.amount+=this.count;
                for (let index = 0; index < this.cart.length; index++) {
                    if (item.id===this.cart[index].id) {
                        this.cart[index].amount+=this.count;
                    }
                }
            }
            else if (this.count>0) {
                this.cart.push({id:item.id, name:item.name, amount:this.count, price:125, image:item.image});
            }*/
        },
        ShowCartAmount(){
            var sum=0;
           for (let index = 0; index < this.cart.length; index++) {
             sum += this.cart[index].amount;
           
           }
           //console.log(sum);
           return sum;
        },
        removeFromCart(id) {
            this.cart.pop(id)
        },
        updateImage(variantImage) {
            this.image = variantImage;
            this.variants.find(e=>e.image===variantImage).active=true;
            this.ChangeActive( this.variants, variantImage);
        },
        Test1(id)
        {
           return id;
        },
        Test2()
        {
            var item = this.variants.find(v=>v.active===true)
            console.log(item);
        },
        updateImage2(variantImage) {
            this.image2 = variantImage
        },
        nextImage() {
            
           currentImageId=this.variants.findIndex(e=>e.image===this.image); 
         
           if(this.variants.length-1>currentImageId)
           {
                this.image = this.variants[currentImageId+1].image;
                this.variants.find(e=>e.image===this.image).active=true
                this.ChangeActive( this.variants, this.image);
           }
           else{
            this.image = this.variants[0].image;
            this.variants.find(e=>e.image===this.image).active=true;
            this.ChangeActive( this.variants, this.image);
           }
           
        },
        prevImage() {
            
            currentImageId=this.variants.findIndex(e=>e.image===this.image); 
          
            if(currentImageId!==0)
            {
                 this.image = this.variants[currentImageId-1].image;
                 this.variants.find(e=>e.image===this.image).active=true
                 this.ChangeActive( this.variants, this.image);
            }
            else{
             this.image = this.variants[this.variants.length-1].image;
             this.variants.find(e=>e.image===this.image).active=true;
             this.ChangeActive( this.variants, this.image);
            }
            
         },
        addAmount(){
            this.count++;
         },
        subtractAmount(){
            if (this.count>=0) {
                this.count--;
            }
            
        }
    }
}).mount('#app')
