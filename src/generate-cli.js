const fs = require("fs")
const generate = require("./generate")

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log("Usage: node " + process.argv[1] + " FILENAME [LEVEL] [LENGTH]") // eslint-disable-line no-console
    process.exit(1)
}

const filename = process.argv[2]
const level = process.argv[3] ? parseInt(process.argv[3]) : 4
const length = process.argv[4] ? parseInt(process.argv[4]) : 500

// Read the file and print its contents
fs.readFile(filename, "utf8", function (err, data) {
    if (err) throw err

    const gibberish = generate(data, { level, length })

    console.log(gibberish) // eslint-disable-line no-console
})
