var app = new Vue({
  el: "#app",
  data: {
    parentNumber: 0,
    empty: "",
    buttons: "Add to Cart",
    instruments: [
      {
        name: "Fender Guitar",
                img: "https://www.adorama.com/images/Large/fe0144570002.jpg",
        color: "red",
        show: false
      },
      {
        name: "Yamaha Piano",
                img:
          "https://portland.classicpianos.net/wp-content/uploads/2019/12/Yamaha-SU7-1200x1200-c-default.jpg",
        color: "green",
        show: false
      },
      {
        name: "Yamaha Drums",
               img:
    "https://cdn.shopify.com/s/files/1/1422/9358/products/YAMAHA-8000-POWER-TOUR-6-PIECE-DRUM-KIT-COBALT-BLUE-DRUMAZON_01_1000x.jpg?v=1571439383",
        color: "green",
        show: false
      },
      {
        name: "Maton Guitar",
                img:
          "https://cdn3.volusion.com/lqpzc.dkrfy/v/vspfiles/photos/19994-2T.jpg?v-cache=1614605793",
        color: "blue",
        show: false
      },
      {
        name: "Yamaha Flute",
                img: "https://d1aeri3ty3izns.cloudfront.net/media/12/123310/600/preview.jpg",
        color: "green",
        show: false
      },
      {
        name: "Fender Violin",
                img:
          "https://c1.zzounds.com/media/productmedia/fit,600by600/quality,85/095-0010-7af98ed1effe86c384525138b45d5ba0.jpg",
        color: "red",
        show: false
      },
     
    ],
    showPopUp: false,
    popUpItem: {},
    instrumentName: "",
   
  },
  methods: {
         increaseNumber: function(index) {
      this.parentNumber = this.parentNumber + 1;
      this.instruments.splice(index, 1);
          if (this.parentNumber >= 9) {
        this.empty = "Store is empty!";
      }
    },
    
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      this.popUpItem=item;
    },
    
    resetNumber: function(index, data) {
      this.parentNumber = 0;
      this.empty = "";
      this.instruments.length = 0;
      this.instruments.push({
         name: "Fender Guitar",
               img: "https://www.adorama.com/images/Large/fe0144570002.jpg",
	type:"Percussion",
	price:"100",
	brand:"Fender",
        color: "red",
        show: false
      });
      this.instruments.push({
        name: "Yamaha Piano",
        type: "Keyboard",
        price: "200",
        brand: "Yamaha",
        img:
          "https://portland.classicpianos.net/wp-content/uploads/2019/12/Yamaha-SU7-1200x1200-c-default.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Yamaha Drums",
        type: "Percussion",
        price: "300",
        brand: "Yamaha",
        img:
          "https://cdn.shopify.com/s/files/1/1422/9358/products/YAMAHA-8000-POWER-TOUR-6-PIECE-DRUM-KIT-COBALT-BLUE-DRUMAZON_01_1000x.jpg?v=1571439383",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Maton Guitar",
        type: "Percussion",
        price: "400",
        brand: "Maton",
        img:
          "https://cdn3.volusion.com/lqpzc.dkrfy/v/vspfiles/photos/19994-2T.jpg?v-cache=1614605793",
        color: "blue",
        show: false
      });
      this.instruments.push({
        name: "Yamaha Flute",
	type: "Brass",
	price: "500",
	brand: "Yamaha",
        
        img: "https://d1aeri3ty3izns.cloudfront.net/media/12/123310/600/preview.jpg",
        color: "green",
        show: false
      });
      this.instruments.push({
        name: "Fender Violin",
	type: "Strings",
	price:"600",
	brand:"Fender",
               img:
          "https://c1.zzounds.com/media/productmedia/fit,600by600/quality,85/095-0010-7af98ed1effe86c384525138b45d5ba0.jpg",
        color: "red",
        show: true
      });
      
    
    },
    newInstrument: function() {
      this.instruments.push({
        name: this.instrumentName,
        type: this.instrumentType,
        brand: this.brandInput,
        price: this.priceInput,
        show: false,
        
      });

      this.instrumentName = "";
    }
  }
});