new Vue({
  el: '#app',
  data: {
    quantity: 1,
    drinkValue: 0,
    buyValue: 0,
    type: "beer",
    tokenMsg: {
      emphasis: '',
      plain: 'Select a type of beverage, and either what you are drinking, what you are buying, or both!'
    },
    total: 0,
    tokens: {
      class: 'tokens',
      white: 0,
      red: 0,
      blue: 0
    },
    beverages: {
      beer: {
        value: 'beer',
        name: 'Beer',
        class: 'type selected',
        icon: 'dark-beer',
        buyOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355,
            value: 2
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440,
            value: 2
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473,
            value: 3
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330,
            value: 2
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341,
            value: 2
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 22.9,
            mL: 650,
            value: 4
          },
        ],
        drinkOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355,
            value: 2
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440,
            value: 2
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473,
            value: 3
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330,
            value: 2
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341,
            value: 2
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 22.9,
            mL: 650,
            value: 4
          },
        ],
      },
      wine: {
        value: 'wine',
        name: 'Wine',
        class: 'type',
        icon: 'red-wine',
        buyOptions: [
          {
            name: 'bottleSm',
            description: 'Half Bottle',
            oz: 12.7,
            mL: 375,
            value: 4
          },
          {
            name: 'bottleMd',
            description: 'Regular Bottle',
            oz: 32,
            mL: 750,
            value: 10
          },
          {
            name: 'bottleLg',
            description: 'Magnum Bottle',
            oz: 50.7,
            mL: 1500,
            value: 15
          },
        ],
        drinkOptions: [
          {
            name: 'glassSm',
            description: 'Small Glass',
            oz: 6,
            mL: 177,
            value: 2
          },
          {
            name: 'glassLg',
            description: 'Large Glass',
            oz: 9,
            mL: 266,
            value: 3
          },
        ],
      },
      cider: {
        value: 'cider',
        name: 'Cider & Coolers',
        class: 'type',
        icon: 'lager-beer',
        buyOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355,
            value: 2
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440,
            value: 2
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473,
            value: 3
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330,
            value: 2
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341,
            value: 2
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 22.9,
            mL: 650,
            value: 4
          },
        ],
        drinkOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355,
            value: 2
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440,
            value: 2
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473,
            value: 3
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330,
            value: 2
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341,
            value: 2
          },
        ],
      },
      spirit: {
        value: 'spirit',
        name: 'Spirit',
        class: 'type',
        icon: 'whyskey',
        buyOptions: [
          {
            name: 'btlSm',
            description: 'Mickey',
            oz: 12,
            mL: 355,
            value: 12
          },
          {
            name: 'btlMd',
            description: 'Twenty-Sixer',
            oz: 25,
            mL: 739,
            value: 25
          },
          {
            name: 'btlLg',
            description: 'Fourty Ouncer',
            oz: 40,
            mL: 1140,
            value: 40
          },
        ],
        drinkOptions: [
          {
            name: 'shotSm',
            description: '1oz shot',
            oz: 1,
            mL: 30,
            value: 2
          },
          {
            name: 'shotLg',
            description: '2oz shot',
            oz: 2,
            mL: 60,
            value: 4
          },
        ],
      },
      highball: {
        value: 'highball',
        name: 'Highball',
        class: 'type',
        icon: 'white-russian',
        buyOptions: {

        },
        drinkOptions: [
         {
            name: 'glassShort',
            description: '2oz spirit, short glass',
            oz: 8,
            mL: 235,
            value: 5
          },
        ],
      },
      nonalcoholic: {
        value: 'nonalcoholic',
        name: 'Non-alcoholic',
        class: 'type',
        icon: 'mojito',
        buyOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12,
            mL: 355,
            value: 1
          },
          {
            name: 'canMd',
            description: 'Medium Can',
            oz: 16,
            mL: 473,
            value: 1
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 24,
            mL: 710,
            value: 2
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 355,
            value: 1
          },
          {
            name: 'btlMd',
            description: 'Medium Bottle',
            oz: 34,
            mL: 1000,
            value: 3
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 68,
            mL: 2000,
            value: 6
          },
        ],
        drinkOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12,
            mL: 355,
            value: 1
          },
          {
            name: 'canMd',
            description: 'Medium Can',
            oz: 16,
            mL: 473,
            value: 1
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 24,
            mL: 710,
            value: 1
          },
          {
            name: 'glassSm',
            description: 'Small Glass',
            oz: 8,
            mL: 236,
            value: 1
          },
          {
            name: 'glassMd',
            description: 'Medium Glass',
            oz: 12,
            mL: 355,
            value: 1
          },
          {
            name: 'glassLg',
            description: 'Large Glass',
            oz: 16,
            mL: 473,
            value: 1
          },
        ],
      },
    }
  },
  methods: {
    resetData: function(){
      let defaultData = {
        quantity: 1,
        drinkValue: 0,
        buyValue: 0,
        total: 0,
        tokenMsg: {
          emphasis: '',
          plain: 'Select a type of beverage, and either what you are drinking, what you are buying, or both!',
        },
        tokens: {
          class: 'tokens',
          white: 0,
          red: 0,
          blue: 0
        },
      }

      // Loop over all the values and reset them to their default
      for (data in defaultData) {
        Object.assign(this.$data[data] = defaultData[data])
      }
    },
    setType: function(type, index) {
      this.type = type;

      // Reset set classes
      for (let type in this.beverages) {
        this.beverages[type].class = 'type';
      }

      this.beverages[type].class = 'type selected';

      if( screen.width <= 600 ) {
        // Jump down the page to the selection for ease of mobile scrolling
        document.getElementById("amount-selection").scrollIntoView({behaviour:"smooth"});
        // This adjust for our sticky header
        window.scrollBy(0, -200);
      }


      this.resetData();
    },
    getBeverageValue(drinkValue, transactionType) {
      let total = 0;
      // If we're buying, get the quantity, otherwise we can assume it's a one drink transaction.
      let quantityBuying = (transactionType === 'buy') ? parseInt(this.quantity, 10) : 1;

      total = drinkValue * quantityBuying;
      return total;
    },
  },
  computed: {
    calculateTokens: function () {
      let worth = false;
      let standardizeAmtBuying = this.getBeverageValue(this.buyValue, 'buy');
      let standardizeAmtDrinking = this.getBeverageValue(this.drinkValue, 'drink');

      if(standardizeAmtBuying > 0 || standardizeAmtDrinking > 0) {
        // Worth is a function of a beverages value multipled by its standardized amount
        worth = standardizeAmtBuying - standardizeAmtDrinking;

        // Set the token msg
        if(worth === 0) {
          this.tokenMsg = {
            emphasis: 'So you\'re just buying for yourself then?!',
            plain: ''
          }
        }

        if(worth > 0) {
          this.tokenMsg = {
            emphasis: 'take',
            plain: 'worth from the token stash.'
          }
          this.tokens.class = 'tokens remove';
        }

        if(worth < 0) {
          this.tokenMsg = {
            emphasis: 'add',
            plain: 'worth to the token stash.'
          }
          this.tokens.class = 'tokens add'
        }

        // Get the absolute value of the token count for the rest of the calculations
        worth = Math.abs(worth);
        this.total = worth;
      }
      
      return worth;
    },
    tokenBreakdown: function() {
      let remainder = this.total;
      let white = 1;
      let red = 2;
      let blue = 5;

      // Reset set existing tokens, because we've started again
      this.tokens.white = 0;
      this.tokens.red = 0;
      this.tokens.blue = 0;

      function calcRemainder(remainder, tokenValue) {
        return remainder % tokenValue;
      }

      // This would be a fabulous recursive function, future Jen
      if(remainder/blue >= 1) {
        this.tokens.blue = Math.floor(remainder/blue);
        remainder = calcRemainder(remainder, blue);
      } 
      if (remainder/red >= 1) {
        this.tokens.red = Math.floor(remainder/red);
        remainder = calcRemainder(remainder, red);
      }
      if (remainder/white >= 1) {
        this.tokens.white = Math.floor(remainder/white);
      }
    },
  },
});
