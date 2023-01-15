//In abstract we only provide required methods or values//
//But in child we implement methods or property//
abstract class Country{
    public name: string
    public language: string
    public population: number
    public populationGrowthRate: number
    public planet = "Earth"
    public religion: string

    constructor(
        name:string,
        language: string,
        population: number,
        populationGrowthRate: number,
        religion: string
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate
        this.religion = religion
    }

    public abstract populationGrowth(): any
}

class OICCountry extends Country{
    constructor(
        name:string,
        language: string,
        population: number,
        populationGrowthRate: number,
        religion = "Islam"
    ) {
        super(name, language,population,populationGrowthRate, religion)
    }

    public populationGrowth(): any {
        this.population = Math.ceil(this.population * (1 + this.populationGrowthRate /100))
        return this.population        
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 26000000, 2.5)
console.info(Pakistan)

export{}