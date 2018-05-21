var http = require('http');

class Researcher {
    constructor(topic) {
        this.data = "";
        this.words = [];
        this.topicNouns = [];
        this.topicNames = [];
        
        getData(topic);
    }
    
    getData(topic)
    {
        var http = require('http');
        var str = '';

        var options = {
            host: 'en.wikipedia.org',
            path: 'w/api.php?format=xml&continue=&action=query&prop=extracts&exsectionformat=plain&exintro=&explaintext=&titles=' + encodeURIComponent(topic.replace(/ /g, '_'))
        };

        callback = function(response) {

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                console.log(req.data);
                console.log(str);
                // your code here if you want to use the results !
                
                let read = false;
                for(var i = 0; i < str.length; i++)
                {
                    //code here using lines[i] which will give you each line
                    let inputLine = str[i];
                    
                    if (inputLine.contains("<extract"))
                    {
                        read = true;
                        continue;
                    }
                    if (inputLine.contains("</extract>"))
                    {
                        read = false;
                        continue;
                    }

                    if (inputLine.startsWith("^ "))
                    {
                        continue;
                    }

                    if (read)
                    {
                        this.data += inputLine.replace(/[extract] => /g, '') + "\r\n";
                    }
                }
                
                genBreakDown();
            });
        }

        var req = http.request(options, callback).end();
    }
    
    genBreakDown()
    {
        let sentences = this.data.replace(/,/g, '').replace(/;/g, '').split("\\. ");

        sentences.forEach(function(s) {
            console.log(s);
            
            let sent_words = s.replace(/[^a-zA-Z ]/g, "").split("\\s");
            sent_words[0] = sent_words[0].toLowerCase();
            
            sent_words.forEach(function(word) {
                this.words.push(word);
            });
        });
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
            if( word == null || word.length === 0 )
            {
                continue;
            }
            
            if (isUpperCase(word))
            {
                this.topicNames.push(word);
                continue;
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
        return this.topicNouns[getRandomInt(this.topicNouns.length)];
    }
    
    getTopicNames()
    {
        return this.topicNames;
    }
    
    getRandomTopicName()
    {
        return this.topicNames[getRandomInt(this.topicNames.length)];
    }
};

module.exports = Researcher;
