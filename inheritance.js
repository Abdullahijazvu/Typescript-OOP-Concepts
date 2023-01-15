"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//In abstract we only provide required methods or values//
//But in child we implement methods or property//
class Country {
    constructor(name, language, population, populationGrowthRate, religion) {
        this.planet = "Earth";
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this.religion = religion;
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate, religion = "Islam") {
        super(name, language, population, populationGrowthRate, religion);
    }
    populationGrowth() {
        this.population = Math.ceil(this.population * (1 + this.populationGrowthRate / 100));
        return this.population;
    }
}
let Pakistan = new OICCountry("Pakistan", "Urdu", 26000000, 2.5);
console.info(Pakistan);
