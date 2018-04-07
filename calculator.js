new Vue({
  el: '#app',
  data: {
    quantity: "1",
    volume: 355,
    type: "beer",
    total: 1,
  },
   methods: {
    calculate: function () {
      if (!this.quantity && !this.volume && !this.type) {
        alert("Quantity, Volume and Type are required");
      } else {
        // Translate the string values to integers
        let quantity = parseInt(this.quantity, 10);

        // Get the value of a beverage type
        let value = this.calcValue(this.type);

        // Since the minimum can of beer you can buy is 355, let the be the standard
        // More volume = higher standardize amount
        let standardizeAmt = (quantity * this.volume)/355;

        // Worth is a function of a beverages value multipled by its standardized amount
        let worth = Math.round(value * standardizeAmt);

        return this.total = worth;
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

      // High value here because the drunk factor is like whoa
      if (type === 'spirit') {
        value = 5;
      }

      return value;
    }
  },
})