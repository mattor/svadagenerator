module.exports = (intext, { level = 4, length = 500 }) => {
    // Check intext length
    if (intext.length < level) {
        throw new Error("Too few input characters.")
    }

    const nchars = intext.length + 1

    // Make the string contain two copies of the input text.
    // This allows for wrapping to the beginning when the end is reached.
    const source = `${intext} ${intext} `

    // Pick a random starting character, preferably an uppercase letter
    let ichar, chr
    for (let i = 0; i < 1000; i++) {
        ichar = Math.floor(nchars * Math.random())
        chr = source.charAt(ichar)
        if ((chr >= "A") && (chr <= "Z")) break
    }

    // Write starting characters
    let outtext = source.substring(ichar, ichar + level)

    // Set target string
    let target = source.substring(ichar + 1, ichar + level)

    // Generate characters
    // Algorithm: Letter-based Markov text generator
    let nmatches, j, imatch
    for (let i = 0; i < length; i++) {
        if (level == 1) {
            // Pick a random character.
            chr = source.charAt(Math.floor(nchars * Math.random()))
        } else {
            // Find all sets of matching target characters
            nmatches = 0
            j = -1
            for (; ;) {
                j = source.indexOf(target, j + 1)
                if ((j < 0) || (j >= nchars)) {
                    break
                } else {
                    nmatches++
                }
            }

            // Pick a match at random
            imatch = Math.floor(nmatches * Math.random())

            // Find the character following the matching characters
            nmatches = 0
            j = -1
            for (; ;) {
                j = source.indexOf(target, j + 1)
                if ((j < 0) || (j >= nchars)) {
                    break
                } else if (imatch == nmatches) {
                    chr = source.charAt(j + level - 1)
                    break
                } else {
                    nmatches++
                }
            }
        }

        // Append the character
        outtext = outtext + chr

        // Update the target
        if (level > 1) {
            target = target.substring(1, level - 1) + chr
        }
    }

    return outtext
}
