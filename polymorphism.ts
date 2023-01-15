//In abstract we only provide required methods or values//
//But in child we implement methods or property//
class Country{
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

    public greetings(): string{
        return "Hello"
    }
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
    public greetings(): string{
        return "Assalamo alaikum"
    }
}

let Pakistan = new OICCountry("Pakistan", "Urdu", 26000000, 2.5)
console.info(Pakistan)
console.info(Pakistan.greetings())

let China = new Country("China","Chinese", 100000000000, 0, "China's Private Data")

console.info(China)
console.info(China.greetings())


export{}