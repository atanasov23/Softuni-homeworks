function cityTaxes(name, population, treasury){

    return {

        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function(){
            return Math.floor(this.treasury += population * this.taxRate);
        },
        applyGrowth: function(percent){
            return this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession: function(percent){
            return this.treasury -= Math.floor(this.treasury * (percent / 100));
        }

    }
  
}

