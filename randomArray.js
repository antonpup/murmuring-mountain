class RandomArray {
    constructor(array) {
        // Element contains {value, chance}
        // chance is [0.0, 100.0]
        this.internalArray = [];
        this.maxChance = 0.0;
        
        var currentChance = 0.0;
        var unchancedElements = [];
        
        for(var i = 0; i < array.length; i++) {
            var element = array[i];
            
            if (typeof element.chance === 'undefined') {
                unchancedElements.push(element);
            } else {
                currentChance += element.chance;
                
                this.internalArray.push({value: element.value, chance: currentChance});
            }
        }
        
        if (unchancedElements.length > 0) {
            var unchancedChances = (100.0 - currentChance) / unchancedElements.length;
            
            for(var i = 0; i < unchancedElements.length; i++) {
                var element = unchancedElements[i];
                currentChance += unchancedChances;
                
                this.internalArray.push({value: element.value, chance: currentChance});
            }
        }
        
        // Update the max chance
        this.maxChance = currentChance;
    }
    
    get()
    {
        var rolledValue = Math.random() * this.maxChance;
        //console.log("Rolled: " + rolledValue + " out of " + this.maxChance);
        
        var rolledItem = null;
        
        for(var i = 0; i < this.internalArray.length; i++) {
            var element = this.internalArray[i];
            
            if (rolledValue < element.chance) {
                rolledItem = element.value;
                break;
            }
        }
        
        return rolledItem;
    }
};

module.exports = RandomArray;
