var request = require("request")

class Researcher {
    constructor(topic) {
        this.data = "";
        this.words = [];
        this.topicNouns = [];
        this.topicNames = [];

        var url = "https://en.wikipedia.org/w/api.php?format=json&continue=&action=query&prop=extracts&exsectionformat=plain&exintro=&explaintext=&titles=" + encodeURIComponent(topic.replace(/ /g, '_'));
        
        /*
        var self = this;
        
        this.isInited = false;
        
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                var wikiSample = Object.entries(body.query.pages)[0][1].extract;
                var sentences = wikiSample.replace(/,|;|\n|'/g, '').split(". ");

                sentences.forEach(function(s) {
                    console.log(s);
                    
                    var sent_words = s.replace(/[^a-zA-Z ]/g, "").split(" ");
                    sent_words[0] = sent_words[0].toLowerCase();
                    
                    sent_words.forEach(function(word) {
                        self.words.push(word);
                    });
                });
                
                self.isInited = true;
            }
        });
        */
    }
    
    upperCaseFirstLetter(word)
    {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    
    getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    isUpperCase(str)
    {
        return str[0] != str[0].toLowerCase();
    }
    
    sortWiki(knowledge)
    {
        this.topicNouns = [];
        this.topicNames = [];
        
        let verbs = knowledge.getVerbs();
        let nouns = knowledge.getNouns();
        let names = knowledge.getNames();
        let adjectives = knowledge.getAdjectives();
        let adverbs = knowledge.getAdverbs();
        let prepositions = knowledge.getPrepositions();
        let articles = knowledge.getArticles();
        let nonNouns = knowledge.getNonNouns();
        
        this.words.forEach(function(word) {
            if( word == null || word.length === 0)
            {
                return;
            }
            
            if (this.isUpperCase(word))
            {
                this.topicNames.push(word);
                return;
            }

            if (word.endsWith("s")) // remove plurals
            {
                this.topicNouns.push(word.substring(0, word.length - 1));
            }
            else
            {
                this.topicNouns.push(word.toLowerCase());
            }
        });
    }
    
    getData()
    {
        return this.data;
    }
    
    getWords()
    {
        return this.words;
    }
    
    getTopicNouns()
    {
        return this.topicNouns;
    }
    
    getRandomTopicNoun()
    {
        var noun = this.topicNouns[this.getRandomInt(this.topicNouns.length)];
        
        console.log('random topic noun: ' + noun);
        
        return noun;
    }
    
    getTopicNames()
    {
        return this.topicNames;
    }
    
    getRandomTopicName()
    {
        var name = this.topicNames[this.getRandomInt(this.topicNames.length)];
        
        console.log('random topic name: ' + name);
        
        return name;
    }
};

module.exports = Researcher;
