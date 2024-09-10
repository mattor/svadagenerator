const generate = (inText, { level = 4, length = 500 }) => {
    // Check inText length
    if (inText.length < level) {
        throw new Error("Too few input characters.")
    }

    const nChars = inText.length + 1

    // Allow for wrapping to the beginning by making the string contain two copies of the text
    const source = `${inText} ${inText} `

    // Pick a random uppercase starting character
    let char, charIndex
    for (let i = 0; i < 999; i++) {
        charIndex = Math.floor(nChars * Math.random())
        char = source.charAt(charIndex)
        if (char >= "A" && char <= "Z") break
    }

    if (!char) {
        throw new Error("No uppercase starting characters found.")
    }

    // Write starting characters
    let outText = source.substring(charIndex, charIndex + level)

    // Set target string
    let target = source.substring(charIndex + 1, charIndex + level)

    // Letter-based Markov text generator
    let nMatches, j, matchIndex
    for (let i = 0; i < length; i++) {
        if (level === 1) {
            // Pick a random character
            char = source.charAt(Math.floor(nChars * Math.random()))
        } else {
            // Find all sets of matching target characters
            nMatches = 0
            j = -1
            for (;;) {
                j = source.indexOf(target, j + 1)
                if (j < 0 || j >= nChars) {
                    break
                } else {
                    nMatches++
                }
            }

            // Pick a random match
            matchIndex = Math.floor(nMatches * Math.random())

            // Find the character following the matching characters
            nMatches = 0
            j = -1
            for (;;) {
                j = source.indexOf(target, j + 1)
                if (j < 0 || j >= nChars) {
                    break
                } else if (matchIndex === nMatches) {
                    char = source.charAt(j + level - 1)
                    break
                } else {
                    nMatches++
                }
            }
        }

        // Append the character
        outText = outText + char

        // Update the target
        if (level > 1) {
            target = target.substring(1, level - 1) + char
        }
    }

    return outText
}

export default generate
