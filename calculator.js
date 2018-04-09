new Vue({
  el: '#app',
  data: {
    quantity: "1",
    volumeDrinking: "na",
    volumeBuying: "na",
    type: "beer",
    tokenMsg: {
      emphasis: '',
      plain: '(You haven\'t done anything yet!)',
    },
    total: 0,
    tokens: {
      net: 'tokens',
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
            mL: 355
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 22.9,
            mL: 650
          },
        ],
        drinkOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 22.9,
            mL: 650
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
            mL: 375
          },
          {
            name: 'bottleMd',
            description: 'Regular Bottle',
            oz: 32,
            mL: 750
          },
          {
            name: 'bottleLg',
            description: 'Magnum Bottle',
            oz: 50.7,
            mL: 1500
          },
        ],
        drinkOptions: [
          {
            name: 'glassSm',
            description: 'Small Glass',
            oz: 6,
            mL: 177
          },
          {
            name: 'glassLg',
            description: 'Large Glass',
            oz: 9,
            mL: 255
          },
        ],
      },
      cider: {
        value: 'cider',
        name: 'Cider',
        class: 'type',
        icon: 'lager-beer',
        buyOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 22.9,
            mL: 650
          },
        ],
        drinkOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12.5,
            mL: 355
          },
          {
            name: 'canEu',
            description: 'European Can',
            oz: 15.5,
            mL: 440
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 16,
            mL: 473
          },
          {
            name: 'btlEu',
            description: 'European Bottle',
            oz: 11.6,
            mL: 330
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 341
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
            mL: 355
          },
          {
            name: 'btlMd',
            description: 'Twenty-Sixer',
            oz: 25,
            mL: 750
          },
          {
            name: 'btlLg',
            description: 'Fourty Ouncer',
            oz: 40,
            mL: 1140
          },
        ],
        drinkOptions: [
          {
            name: 'shot',
            description: '2oz shot',
            oz: 2,
            mL: 60
          }
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
            description: 'Short Glass',
            oz: 8,
            mL: 235
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
            mL: 355
          },
          {
            name: 'canMd',
            description: 'Medium Can',
            oz: 16,
            mL: 473
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 24,
            mL: 710
          },
          {
            name: 'btlSm',
            description: 'Small Bottle',
            oz: 12,
            mL: 355
          },
          {
            name: 'btlMd',
            description: 'Medium Bottle',
            oz: 34,
            mL: 1000
          },
          {
            name: 'btlLg',
            description: 'Large Bottle',
            oz: 68,
            mL: 2000
          },
        ],
        drinkOptions: [
          {
            name: 'canSm',
            description: 'Small Can',
            oz: 12,
            mL: 355
          },
          {
            name: 'canMd',
            description: 'Medium Can',
            oz: 16,
            mL: 473
          },
          {
            name: 'canLg',
            description: 'Large Can',
            oz: 24,
            mL: 710
          },
          {
            name: 'glassSm',
            description: 'Small Glass',
            oz: 8,
            mL: 236
          },
          {
            name: 'glassMd',
            description: 'Medium Glass',
            oz: 12,
            mL: 355
          },
          {
            name: 'glassLg',
            description: 'Large Glass',
            oz: 16,
            mL: 473
          },
        ],
      },
    }
  },
  methods: {
    resetData: function(){
      let defaultData = {
        quantity: "1",
        volumeDrinking: "na",
        volumeBuying: "na",
        total: 0,
        tokenMsg: {
          emphasis: '',
          plain: '(You haven\'t done anything yet!)',
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
    calcValue: function(type) {
      // 1 is the default. Only adjust if its value is not this.
      let value = 1;

      // If you're just buying one non-alcoholic beverage then you're not sharing anyhow...
      if (type === 'non-alcholic') {
        value = 0.5;
      }

      // Wine is worth twice as much as beer as it gets you drunk faster
      if (type === 'wine') {
        value = 2;
      }

      // A highball is worth a combination of spirit and non-alcoholic
      if (type === 'highball') {
        value = 2.5;
      }

      // High value here because the drunk factor is like whoa but the volume is like nothing
      if (type === 'spirit') {
        value = 10;
      }

      return value;
    },
    setType: function(type, index) {
      this.type = type;

      // Reset set classes
      for (let type in this.beverages) {
        this.beverages[type].class = 'type';
      }

      this.beverages[type].class = 'type selected';

      this.resetData();
    }
  },
  computed: {
    calculateTokens: function () {
      let value = 1;
      let quantityBuying = 0;
      let standardizeAmtBuying = 0;
      let standardizeAmtDrinking = 0;
      let worth = false;

      // Get the value of a beverage type
      value = this.calcValue(this.type);

      // Translate the string values to integers
      quantityBuying = parseInt(this.quantity, 10);

      if (this.volumeBuying != "na") {
        // Since the minimum can of beer you can buy is 355, let the be the standard
        // More volume = higher standardize amount
        standardizeAmtBuying = (quantityBuying * this.volumeBuying)/355;
      }

      if (this.volumeDrinking != "na") {
        // Since the minimum can of beer you can buy is 355, let the be the standard
        // More volume = higher standardize amount
        standardizeAmtDrinking = this.volumeDrinking/355;
      }

      if(standardizeAmtBuying || standardizeAmtDrinking) {
        // Worth is a function of a beverages value multipled by its standardized amount
        worth = Math.round(value * standardizeAmtBuying) - Math.round(value * standardizeAmtDrinking);

        // Set the token msg
        if(worth === 0) {
          this.tokenMsg = {
            emphasis: 'So you\'re just buying for yourself then?!',
            plain: ''
          }
        }

        if(worth > 0) {
          this.tokenMsg = {
            emphasis: 'Take',
            plain: 'from the token stash.'
          }
          this.tokens.class = 'tokens remove';
        }

        if(worth < 0) {
          this.tokenMsg = {
            emphasis: 'Add',
            plain: 'to the token stash.'
          }
          this.tokens.class = 'tokens add'
        }

        worth = Math.abs(worth);
        this.total = worth;
      }
      
      return worth;
    },
    tokenBreakdown: function() {
      let remainder = this.total;
      let white = 1;
      let red = 5;
      let blue = 10;

      function calcRemainder(remainder, tokenValue) {
        return remainder % tokenValue;
      }

      if(remainder/blue > 1) {
        this.tokens.blue = Math.floor(remainder/blue);
        remainder = calcRemainder(remainder, blue);
      } 
      if (remainder/red > 1) {
        this.tokens.red = Math.floor(remainder/red);
        remainder = calcRemainder(remainder, red);
      }
      if (remainder/white >= 1) {
        this.tokens.white = Math.floor(remainder/white);
      }
    },
  },
});