//In abstract we only provide required methods or values//
//But in child we implement methods or property//
abstract class Country{
    public name: string
    public language: string
    public population: number
    public populationGrowthRate: number

    constructor(
        name:string,
        language: string,
        population: number,
        populationGrowthRate: number
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate
    }

    public abstract populationGrowth(): any
}

class OICCountry extends Country{
    constructor(
        name:string,
        language: string,
        population: number,
        populationGrowthRate: number
    ) {
        super(name, language,population,populationGrowthRate)
    }

    public populationGrowth(): any {
        this.population = Math.ceil(this.population * (1 + this.populationGrowthRate /100))
        return this.population        
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 26000000, 2.5)
console.info(Pakistan)


Pakistan.populationGrowth()
console.log(Pakistan)

export{}