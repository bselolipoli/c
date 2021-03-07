 const message = document.getElementById("message")

let messageWords = [];
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

{
const str = 'In my opinion, the most dangerous animal in the world is a human. No one else has done worse things to this world than a human.'

const getMode = arr => {
  const obj = arr.reduce((acc, e) => ({...acc, [e]: (acc[e] || 0) + 1}), {})
  const max = Math.max(...Object.values(obj))
  return arr.find(e => obj[e] === max)
}

const f = str => {
  const arr = str.match(/[a-zA-Z]+/gu)
  const numberOfElementsInTheArray = arr.length
  const mode = getMode(arr)

  return {numberOfElementsInTheArray, mode}
}}

console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
console.log(`The number of words in the message is "${numberOfElementsInTheArray}"`)

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

{document.getElementById("submit").innerHTML = `The most frequent word of the message is "${theMostFrequentWord} and The number of words in the message is ${numberOfElementsInTheArray} ${randomPhrasesAndPictures} `; 
}
