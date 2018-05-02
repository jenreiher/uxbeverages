
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
          new DrinkSize('canSm', 'Small can', 2, 'both', 12),
          new DrinkSize('canEu', 'European can', 2, 'mL', 440),
          new DrinkSize('canLg', 'Large can', 3, 'oz', 16),
          new DrinkSize('btlEu', 'European bottle', 2, 'mL', 330),
          new DrinkSize('btlSm', 'Small bottle', 2, 'both', 12, 341),
          new DrinkSize('btlLg', 'Bomber', 4, 'mL', 650),
        ],
        drinkOptions: [
          new DrinkSize('canSm', 'Small can', 2, 'both', 12),
          new DrinkSize('canEu', 'European can', 2, 'mL', 440),
          new DrinkSize('canLg', 'Large can', 3, 'oz', 16),
          new DrinkSize('btlEu', 'European bottle', 2, 'mL', 330),
          new DrinkSize('btlSm', 'Small bottle', 2, 'both', 12, 341),
          new DrinkSize('btlLg', 'Bomber', 4, 'mL', 650),
        ],
      },
      wine: {
        value: 'wine',
        name: 'Wine',
        class: 'type',
        icon: 'red-wine',
        buyOptions: [
          new DrinkSize('bottleSm', 'Half bottle', 4, 'mL', 375),
          new DrinkSize('bottleMd', 'Regular bottle', 10, 'mL', 750),
          new DrinkSize('bottleLg', 'Magnum bottle', 18, 'L', 1.5),
        ],
        drinkOptions: [
          new DrinkSize('glassSm', 'Small glass', 2, 'oz', 6),
          new DrinkSize('glassTl', 'Tall glass', 3, 'oz', 9),
        ],
      },
      cider: {
        value: 'cider',
        name: 'Cider',
        class: 'type',
        icon: 'lager-beer',
        buyOptions: [
          new DrinkSize('canSm', 'Small can', 2, 'both', 12),
          new DrinkSize('canEu', 'European can', 2, 'mL', 440),
          new DrinkSize('canLg', 'Large can', 3, 'oz', 16),
          new DrinkSize('btlEu', 'European bottle', 2, 'mL', 330),
          new DrinkSize('btlSm', 'Small bottle', 2, 'both', 12, 341),
          new DrinkSize('btlLg', 'Bomber', 4, 'mL', 650),
        ],
        drinkOptions: [
          new DrinkSize('canSm', 'Small can', 2, 'both', 12),
          new DrinkSize('canEu', 'European can', 2, 'mL', 440),
          new DrinkSize('canLg', 'Large can', 3, 'oz', 16),
          new DrinkSize('btlEu', 'European bottle', 2, 'mL', 330),
          new DrinkSize('btlSm', 'Small bottle', 2, 'both', 12, 341),
          new DrinkSize('btlLg', 'Bomber', 4, 'mL', 650),
        ],
      },
      spirit: {
        value: 'spirit',
        name: 'Spirit',
        class: 'type',
        icon: 'whyskey',
        buyOptions: [
          new DrinkSize('btlSm', 'Mickey', 13, 'both', 13, 375),
          new DrinkSize('btlMd', 'Twenty-Sixer', 26, 'both', 26, 750),
          new DrinkSize('btlMd', 'Fourty Ouncer', 40, 'both', 40, 1150),
        ],
        drinkOptions: [
          new DrinkSize('shotSm', '1 oz shot', 2, 'oz', 1),
          new DrinkSize('shotLg', '2 oz shot', 4, 'oz', 2),
        ],
      },
      highball: {
        value: 'highball',
        name: 'Highball',
        class: 'type',
        icon: 'white-russian',
        buyOptions: {},
        drinkOptions: [
          new DrinkSize('glassSgl', 'Single', 3, 'oz', 4),
          new DrinkSize('glassDbl', 'Double', 5, 'oz', 8),
        ],
      },
      nonalcoholic: {
        value: 'nonalcoholic',
        name: 'Non-alcoholic',
        class: 'type',
        icon: 'mojito',
        buyOptions: [
          new DrinkSize('canSm', 'Small can', 1, 'both', 12),
          new DrinkSize('canMd', 'Medium can', 1, 'both', 16),
          new DrinkSize('canLg', 'Large can', 2, 'both', 24),
          new DrinkSize('btlSm', 'Small bottle', 1, 'mL', 500),
          new DrinkSize('btlMd', 'Medium bottle', 2, 'L', 1),
          new DrinkSize('btlLg', 'Large bottle', 4, 'L', 2),
        ],
        drinkOptions: [
          new DrinkSize('canSm', 'Small can', 1, 'both', 12),
          new DrinkSize('canMd', 'Medium can', 1, 'both', 16),
          new DrinkSize('canLg', 'Large can', 2, 'both', 24),
          new DrinkSize('glassSm', 'Small glass', 1, 'oz', 8),
          new DrinkSize('glassMd', 'Medium glass', 1, 'oz', 12),
          new DrinkSize('glassLg', 'Large', 2, 'oz', 16),
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
            emphasis: 'Take',
            plain: 'worth from the token stash.'
          }
          this.tokens.class = 'tokens remove';
        }

        if(worth < 0) {
          this.tokenMsg = {
            emphasis: 'Add',
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

// This constructor returns a drink size object, optionally allowing you to
// override the mL calculation.
// unit can be one of 'oz', 'mL', 'L', or 'both'. If 'both' is specified, and
// a second size parameter (the mL parameter, size is assumed to be oz) isn't
// given, it will be calculated.
// The oz unit is assumed to be US fluid ounces.
function DrinkSize(name, desc, value, unit, size, mL) {
  this.name = name;
  this.description = desc;
  this.value = value;
  var fmtmL = function (mL) {
    if (mL >= 1000) {
      // Ensure up to 2 decimal places.
      return (Math.round(mL / 10) / 100) + ' L';
    }
    return mL + ' mL';
  }
  switch(unit) {
    case 'oz':
      this.size = size + ' oz';
      return;
    case 'mL':
      this.size = size + ' mL';
      return;
    case 'L':
      this.size = size + ' L';
      return;
    case 'both':
      if (!mL) {
        // Unit conversion for US fluid ounce.
        mL = Math.round(size * 29.57353);
      }
      this.size = size + ' oz/' + fmtmL(mL);
      return;
    default:
      throw "'" + unit + "' is not a valid unit preference in drink size.";
  }
}

