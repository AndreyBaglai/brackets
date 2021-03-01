module.exports = function check(str, bracketsConfig) {
    let chars = str.split("");

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                chars[i] === bracketsConfig[j][0] &&
                chars[i + 1] === bracketsConfig[j][1]
            ) {
                chars.splice(i, 2);
                i = -1;
                j = 0;
            }
        }
    }

    if (chars.length === 0) {
        return true;
    } else {
        return false;
    }
};
