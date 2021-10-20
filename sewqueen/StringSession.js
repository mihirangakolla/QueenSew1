/*ᴳᵉⁿᵉʳᵃᵗᵉᵈ ᴮʸ ᴍɪʜͥɪʀͣᴀͫɴɢᴀ⁶⁴⁴¹ ⃟✦⃝̮̮👑🔨🕵🏻‍♂️₂₀₂₁*

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - ᴍɪʜͥɪʀͣᴀͫɴɢᴀ⁶⁴⁴¹ ⃟✦⃝̮̮👑🔨🕵🏻‍♂️
*/

const fs = require('fs');

class StringSession {
    constructor() {
    }

    deCrypt(string = undefined) {
        if ('MIHIRANGA_SESSION' in process.env && string === undefined) {
            string = process.env.STRING_SESSION;
        } else if (string !== undefined) {
            if (fs.existsSync(string)) {
                string = fs.readFileSync(string, {encoding:'utf8', flag:'r'});
            }
        }
        
        var split = string.split(';;;');
        if (split.length >= 2) {
            return JSON.parse(Buffer.from(split[split.length - 1], 'base64').toString('utf-8'));
        }
    }

    createStringSession(dict) {
        return 'MIHIRANGA;;;' + Buffer.from(JSON.stringify(dict)).toString('base64');
    }
}

module.exports = StringSession;
