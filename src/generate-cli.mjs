/* eslint-disable no-console */
import fs from "node:fs"
import process from "node:process"
import generate from "./generate.js"

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log(`Usage: node ${process.argv[1]} FILENAME [LEVEL] [LENGTH]`)
    process.exit(1)
}

const filename = process.argv[2]
const level = process.argv[3] ? Number.parseInt(process.argv[3]) : 4
const length = process.argv[4] ? Number.parseInt(process.argv[4]) : 500

// Read the file and print its contents
fs.readFile(filename, "utf8", (err, data) => {
    if (err)
        throw err

    const gibberish = generate(data, { level, length })

    console.log(gibberish)
})
