import generate from "./generate"
import samples from "./samples.json"

const { form } = document

form.samples.selectedIndex = 1

function generateGibberish(e) {
    e && e.preventDefault()

    form.outtext.value = generate(form.intext.value, {
        level: Number.parseInt(
            document.querySelector("input[name='level']:checked").value,
            10,
        ),
    })
}

function generateInput(sampleName, e) {
    e && e.preventDefault()

    const sample = samples.find(s => s.name === sampleName)

    if (sample) {
        form.intext.value = sample.text
        form.outtext.value = ""
    }
    else {
        clearAll()
    }
}

function clearAll(e) {
    e && e.preventDefault()

    form.samples.value = "-"
    form.intext.value = ""
    form.outtext.value = ""
}

generateInput(form.samples.options[form.samples.selectedIndex].text)
generateGibberish()

window.generateGibberish = generateGibberish
window.generateInput = generateInput
window.clearAll = clearAll
