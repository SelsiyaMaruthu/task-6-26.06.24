//write a class to calculate the uber price


class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier || 1;
    }
  
    calculatePrice(distanceMiles, durationMinutes) {
      const fareBeforeSurge = 
        this.baseFare +
        distanceMiles * this.costPerMile +
        durationMinutes * this.costPerMinute;
      
      const finalFare = fareBeforeSurge * this.surgeMultiplier;
  
      return finalFare;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(2.5, 1.75, 0.25, 1.2); // Adjust these values based on your area and Uber's rates.
  
  const distanceMiles = 5;
  const durationMinutes = 15;
  const estimatedPrice = calculator.calculatePrice(distanceMiles, durationMinutes);
  
  console.log(`Estimated Uber price: $${estimatedPrice.toFixed(2)}`);