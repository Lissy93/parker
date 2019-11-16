

module.exports = async function (context, req) {
    if (req.body && req.body.phrases) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            headers: {
                'Content-Type': 'application/json'
            },
            body: mapPhrases(req.body.phrases)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass phrases in the request body"
        };
    }
};

function mapPhrases(phrases) {
    var red = ["microphone", "bank", "call", "photos", "media", "files", "photo", "camera", "messages"]
    var amber = ["contacts", "location", "ip", "address", "bluetooth", "marketing", "advertising", "name", "address", "gender"]
    var otherKwords = red.concat(amber)
    var words = separateIntoWords(phrases)
    
    var redInPolicy = []
    var amberInPolicy = []
    
    words.forEach(word => {
        let redIndex = red.indexOf(word)
        if (redIndex > -1) {
            redInPolicy.push(word)
            otherKwords.splice(otherKwords.indexOf(word, 0), 1)
        }

        let amberIndex = amber.indexOf(word)
        if (amberIndex > -1) {
            amberInPolicy.push(word)
            otherKwords.splice(otherKwords.indexOf(word, 0), 1)
        }
    });

    return JSON.stringify({"red" : redInPolicy, "amber" : amberInPolicy, "other" : otherKwords})
}

function separateIntoWords(phrases) {
    var words = []

    phrases.forEach(phrase => { 
        let phraseWords = splitStr(phrase)
        phraseWords.forEach(phraseWord => {
            var fourOrMore = phraseWord.length >= 4
            if (phraseWord !== undefined && fourOrMore == true) {
                words.push(phraseWord.toLowerCase())
            }
        });
    });
    
    return words
}

function splitStr(str) {
    var separated = str.split(" ")
    return separated
}