"use strict";
//In abstract we only provide required methods or values//
//But in child we implement methods or property//
class Country {
    constructor(name, language, population, populationGrowthRate, _statePrivacy, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
    }
    get privateData() {
        return this._statePrivacy;
    }
    set leader(newLeader) {
        this._leader = newLeader;
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate, _statePrivacy, _leader) {
        super(name, language, population, populationGrowthRate, _statePrivacy, _leader);
    }
    populationGrowth() {
        this.population = Math.ceil(this.population * (1 + this.populationGrowthRate / 100));
        return this.population;
    }
}
let Pakistan = new OICCountry("Pakistan", "Urdu", 26000000, 2.5, "Pakistan Private Data", "Leaders");
console.info(Pakistan);
Pakistan.name = "Islamic Republic";
console.info(Pakistan);
//Error because it's a private property//
//Pakistan._statePrivacy
//Pakistan.privateData = "New data"
Pakistan.leader = "New leader is set";
console.info(Pakistan);
