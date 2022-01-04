getTime = () => {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var ms = d.getMilliseconds();
	var nowtime = h*3600*1000 + m*60*1000 + s*1000 + ms
	
	return nowtime;
  
}

getBoffTimeFactor = (base, digits) => {
  let new_seconds = Math.pow(base, digits);
  let cpt_factor = new_seconds / 86400.0;
  return cpt_factor;
}

boffTime = (time, base, digits) => {
	let cpt_factor = getBoffTimeFactor(base, digits);
	let cpt_time_decimal = time * cpt_factor / 1000;
	return cpt_time_decimal.toString(base).split('.')[0];
}

timeToWords = (time) => {
    var words = [];
    // var word_list = ['blurb']; // To achieve blurb, you need the very specific time 32635665 ms.
    // Need to change this list out for a real word list from a file
    for (let i = 11; i < 37; i++) {
        for (let j = 1; j < 50; j++) {
            word = boffTime(time, i, j);
            if (!word.hasNumbers() && word != "Infinity") {
                for (let k = 0; k < wordlist.length; k++) {
                    if (word == wordlist[k]) {
                        words.push(word);
                    }
                }
            }
        }
    }

    return words;
}

function hasNumbers(str) {
	var regex = /\d/g;
    return regex.test(str);
}

/**
 * Convert Text to Title - Router
 * @param {string} str - String to Turn Into Title
*/
String.prototype.hasNumbers = function() {
	return hasNumbers(this);
}

/**
 * Ideas Done:
 * 
 * - (boffTime, function) Show time of day
 * - (TimeBlurb, app) Turn any alphanumeric into a list of times of day by increasing base
 * - Turn any time of day and provide a list of words that match
 * 
 * Ideas To Do:
 * 
 * 
 * 
 */