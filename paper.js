const Writer = require('./writer.js');
const Researcher = require('./researcher.js');

class Paper {
    constructor(paragraphs, wordcount, vocabulary, topic) {
        this.paragraphs = paragraphs;
        this.wordcount = wordcount;
        this.vocabulary = vocabulary;
        this.topic = topic;
    }

    async researchPaper()
    {
        this.research = new Researcher();
        await this.research.researchTopic(this.topic);
        this.research.sortWiki(this.vocabulary);
        this.writer = new Writer(this.research, this.vocabulary);
    }
    
    writePaper()
    {
        let composition = "";

        if(this.paragraphs === 0)
        {
            //just write one paragraph
            composition += this.writer.write(this.wordcount);
        }
        else
        {
            for(let para = 0; para < this.paragraphs; para++)
            {
                composition += this.writer.write(this.wordcount / this.paragraphs) + "\n";
            }
        }

        return composition;
    }
};

module.exports = Paper;
