new Vue({
  el: '#app',
  data: {
    quantity: "1",
    volumeDrinking: "na",
    volumeBuying: "na",
    type: "beer",
    drinkOptions: {
      beer: [
        {
          name: 'canSm',
          description: 'Small Can',
          oz: 12,
          mL: 355
        },
        {
          name: 'canLg',
          description: 'Large Can',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlSm',
          description: 'Small Bottle',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlLg',
          description: 'Large Bottle',
          oz: 21,
          mL: 650
        },
      ],
      cider: [
        {
          name: 'canSm',
          description: 'Small Can',
          oz: 12,
          mL: 355
        },
        {
          name: 'canLg',
          description: 'Large Can',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlSm',
          description: 'Small Bottle',
          oz: 16,
          mL: 473
        }
      ],
      wine: [
        {
          name: 'glass',
          description: 'Large Glass',
          oz: 9,
          mL: 255
        }
      ],
      spirit: [
        {
          name: 'shot',
          description: '2oz shot',
          oz: 2,
          mL: 60
        }
      ],
      highball: [
       {
          name: 'glassShort',
          description: 'Short Glass',
          oz: 8,
          mL: 235
        },
      ],
      nonalcoholic: [
        {
          name: 'canSm',
          description: 'Small Can',
          oz: 12,
          mL: 355
        },
        {
          name: 'canLg',
          description: 'Large Can',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlSm',
          description: 'Small Bottle',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlLg',
          description: 'Large Bottle',
          oz: 21,
          mL: 650
        },
      ],
    },
    buyOptions: {
      beer: [
        {
          name: 'canSm',
          description: 'Small Can',
          oz: 12,
          mL: 355
        },
        {
          name: 'canLg',
          description: 'Large Can',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlSm',
          description: 'Small Bottle',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlLg',
          description: 'Large Bottle',
          oz: 21,
          mL: 650
        },
      ],
      cider: [
        {
          name: 'canSm',
          description: 'Small Can',
          oz: 12,
          mL: 355
        },
        {
          name: 'canLg',
          description: 'Large Can',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlSm',
          description: 'Small Bottle',
          oz: 16,
          mL: 473
        },
        {
          name: 'btlMd',
          description: 'Medium Bottle',
          oz: 21,
          mL: 650
        },
        {
          name: 'btlLg',
          description: 'Large Bottle',
          oz: 32,
          mL: 750
        },
      ],
      wine: [
        {
          name: 'bottleLg',
          description: 'Large Bottle',
          oz: 32,
          mL: 750
        },
      ],
      spirit: [
        {
          name: 'btlMd',
          description: 'Medium Bottle',
          oz: 21,
          mL: 650
        }
      ],
      nonalcoholic: [
        {
          name: 'canSm',
          description: 'Small Can',
          oz: 12,
          mL: 355
        },
        {
          name: 'canLg',
          description: 'Large Can',
          oz: 16,
          mL: 473
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
          oz: 16,
          mL: 473
        },
        {
          name: 'btlLg',
          description: 'Large Bottle',
          oz: 21,
          mL: 650
        },
      ],
    },
  },
  methods: {
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
  },
  computed: {
    calculate: function () {
      let value = 1;
      let quantityBuying = 0;
      let standardizeAmtBuying = 0;
      let standardizeAmtDrinking = 0;
      let worth = 1;

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

      // Worth is a function of a beverages value multipled by its standardized amount
      worth = Math.round((value * standardizeAmtBuying) - (value * standardizeAmtDrinking));

console.log("value:", value);
console.log("buying:", quantityBuying);
console.log("std buying:", standardizeAmtBuying);
console.log("std drinking:", standardizeAmtDrinking);
console.log("worth:", worth)
      return worth;
    }
  },
});