//In abstract we only provide required methods or values//
//But in child we implement methods or property//
abstract class Country{
    public name: string
    public language: string
    public population: number
    public populationGrowthRate: number
    private _statePrivacy: string
    private _leader: string

    constructor(
        name:string,
        language: string,
        population: number,
        populationGrowthRate: number,
        _statePrivacy: string,
        _leader: string
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate
        this._statePrivacy = _statePrivacy
        this._leader = _leader
    }

    public abstract populationGrowth(): any
    public get privateData(): string{
        return this._statePrivacy
    }
    public set leader(newLeader: string){
        this._leader = newLeader
    }
}

class OICCountry extends Country{
    constructor(
        name:string,
        language: string,
        population: number,
        populationGrowthRate: number,
        _statePrivacy: string,
        _leader: string
    ) {
        super(name, language,population,populationGrowthRate, _statePrivacy, _leader)
    }

    public populationGrowth(): any {
        this.population = Math.ceil(this.population * (1 + this.populationGrowthRate /100))
        return this.population        
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 26000000, 2.5, "Pakistan Private Data", "Leaders")
console.info(Pakistan)

Pakistan.name = "Islamic Republic"
console.info(Pakistan)

//Error because it's a private property//
//Pakistan._statePrivacy

//Pakistan.privateData = "New data"

Pakistan.leader = "New leader is set"
console.info(Pakistan)