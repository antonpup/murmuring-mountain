class Writer {
    constructor(research, vocabulary) {
        this.research = research;
        this.vocabulary = vocabulary;
    }
    
    getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    write(wordCount)
    {
        var composition = "";
        var sentence = "";
        
        for(var i = 0; i < wordCount;)
        {
            switch(this.getRandomInt(2))
            {
                case 0:
                    sentence = this.simple();
                    break;
                case 1:
                    sentence = this.simpleplusplus();
                    break;
                case 2:
                    //Compound Sentence
                    break;
                case 3:
                    //Quote
                    break;
                default:
                    sentence = this.simple();
                    break;
            }
            
            composition += sentence + " ";
            
            i += sentence.split(" ").length;
        }
        
        return composition;
    }
    
    writeType(wordCount, type)
    {
        if(null == type || type.length === 0)
        {
            return this.write(wordCount);
        }
        
        var composition = "";
        
        switch(type.toLowerCase())
        {
        case "introduction":
            //Append a cheezy introduction to the composition. Probably should randomly come from WDB.
            break;
        case "conclusion":
            //Append a cheezy conclusion to the composition. Probably should randomly come from WDB.
            break;
        default:
            //It's a body paragraph, leave it alone.
            break;
        }
        
        composition += this.write(wordCount);
        
        return composition;
    }
    
    pluralize(word)
    {
        return word + (word.endsWith("s") || word.endsWith("sh") || word.endsWith("ch") || word.endsWith("x") || word.endsWith("z") ? "es" : "s");
    }
    
    simple()
    {
        var ret_sentence = "";
        ret_sentence += this.vocabulary.getRandomArticle() + " ";
        
        if (ret_sentence.startsWith("A") || ret_sentence.startsWith("One"))
        {
            ret_sentence += ( (this.research.getRandomTopicNoun() == null) ? this.vocabulary.getRandomNoun() : this.research.getRandomTopicNoun() ) + " ";
            ret_sentence += this.pluralize(this.vocabulary.getRandomVerb());
        }
        else
        {
            ret_sentence += this.pluralize( (this.research.getRandomTopicNoun() == null) ? this.vocabulary.getRandomNoun() : this.research.getRandomTopicNoun() ) + " ";
            ret_sentence += this.vocabulary.getRandomVerb();
        }

        return ret_sentence.substring(0, 1).toUpperCase() + ret_sentence.substring(1) + '.';
    }
    
    simpleplusplus()
    {
        var ret_sentence = "";

        if (this.getRandomInt(10) > 3)
        {
            ret_sentence += this.vocabulary.getRandomArticle() + " ";
        }

        if (ret_sentence.startsWith("A") || ret_sentence.startsWith("One"))
        {
            if (this.getRandomInt(10) > 5)
            {
                ret_sentence += this.vocabulary.getRandomAdjective() + " ";
            }

            if(this.getRandomInt(10) > 8)
            {
                ret_sentence += ( (this.research.getRandomTopicName() == null) ? this.vocabulary.getRandomName() : this.research.getRandomTopicName() ) + " ";
            }
            else
            {
                ret_sentence += ( (this.research.getRandomTopicNoun() == null) ? this.vocabulary.getRandomNoun() : this.research.getRandomTopicNoun() ) + " ";
                ret_sentence += this.pluralize(this.vocabulary.getRandomVerb());
            }

            if (this.getRandomInt(10) > 5)
            {
                ret_sentence += " " + this.vocabulary.getRandomAdverb();
            }
        }
        else
        {
            if (this.getRandomInt(10) > 3)
            {
                ret_sentence += this.vocabulary.getRandomAdjective() + " ";
            }

            ret_sentence += this.pluralize( (this.research.getRandomTopicName() == null) ? this.vocabulary.getRandomNoun() : this.research.getRandomTopicName() ) + " ";
            ret_sentence += this.vocabulary.getRandomVerb();

            if (this.getRandomInt(10) > 5)
            {
                ret_sentence += " " + this.vocabulary.getRandomAdverb();
            }
        }

        return ret_sentence.substring(0, 1).toUpperCase() + ret_sentence.substring(1) + '.';
    }
};

module.exports = Writer;
