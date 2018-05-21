const readline = require('readline');
const filestream = require('fs');

class Knowledge {
    constructor() {
        this.verbs = [];
        this.nouns = [];
        this.names = [];
        this.adjectives = [];
        this.adverbs = [];
        this.prepositions = [];
        this.articles = [];
        this.nonNouns = [];
        
        // Populate the lists
        this.verbs = this.verbs.concat(filestream.readFileSync("./Knowledge/verbList.txt", 'utf-8').split("\n"));
        this.nouns = this.nouns.concat(filestream.readFileSync("./Knowledge/nounList.txt", 'utf-8').split("\n"));
        this.names = this.names.concat(filestream.readFileSync("./Knowledge/nameList.txt", 'utf-8').split("\n"));
        this.adverbs = this.adverbs.concat(filestream.readFileSync("./Knowledge/adverbList.txt", 'utf-8').split("\n"));
        this.adjectives = this.adjectives.concat(filestream.readFileSync("./Knowledge/adjectiveList.txt", 'utf-8').split("\n"));
        this.articles = this.articles.concat(filestream.readFileSync("./Knowledge/articleList.txt", 'utf-8').split("\n"));
        this.nouns = this.nouns.concat(filestream.readFileSync("./Knowledge/pronounList.txt", 'utf-8').split("\n"));
        this.prepositions = this.prepositions.concat(filestream.readFileSync("./Knowledge/prepositionList.txt", 'utf-8').split("\n"));
        this.nonNouns = this.nonNouns.concat(filestream.readFileSync("./Knowledge/nonNounList.txt", 'utf-8').split("\n"));
    }
    
    getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    upperCaseFirstLetter(word)
    {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    
    getVerbs()
    {
        return this.verbs;
    }
    
    getRandomVerb()
    {
        return this.verbs[getRandomInt(this.verbs.length)];
    }
    
    getNouns()
    {
        return this.nouns;
    }
    
    getRandomNoun()
    {
        return this.nouns[getRandomInt(this.nouns.length)];
    }
    
    getNames()
    {
        return this.names;
    }
    
    getRandomName()
    {
        return this.names[getRandomInt(this.names.length)];
    }
    
    getAdjectives()
    {
        return this.adjectives;
    }
    
    getRandomAdjective()
    {
        return this.adjectives[getRandomInt(this.adjectives.length)];
    }
    
    getAdverbs()
    {
        return this.adverbs;
    }
    
    getRandomAdverb()
    {
        return this.adverbs[getRandomInt(this.adverbs.length)];
    }
    
    getPrepositions()
    {
        return this.prepositions;
    }
    
    getRandomPreposition()
    {
        return this.prepositions[getRandomInt(this.prepositions.length)];
    }
    
    getArticles()
    {
        return this.articles;
    }
    
    getRandomArticle()
    {
        return this.articles[getRandomInt(this.articles.length)];
    }
    
    getNonNouns()
    {
        return this.nonNouns;
    }
};

module.exports = Knowledge;
