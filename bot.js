const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya testing bot. siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhh ${data?.usia}, hobi kamu apa ya?`,
    `wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `ohhh ${data?.pacar}, film favorit kamu apa?`,
    `wihh sama dong ${data?.film}, target kamu ke depan nya apa nih?`,
    `semoga tercapai ya ${data?.target}, kamu suka coding gak?`,
    `aku juga ${data?.coding}, kamu suka bermain game gak?`,
    `ohh ${data?.game}, kamu suka lagu 90an gak?`,
    `aku juga ${data?.lagu}, sekian dulu ya bot hari ini.`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
  init++
  if (init === 1) {
    botDelay({ nama: jawaban.value })
  } else if (init === 2) {
    botDelay({ usia: jawaban.value })
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init === 5) {
    botDelay({ film: jawaban.value })
  } else if (init === 6) {
  botDelay({ target: jawaban.value })
  } else if (init === 7) {
  botDelay({ coding: jawaban.value })
  } else if (init === 8) {
  botDelay({ game: jawaban.value })
  } else if (init === 9) {
  botDelay({ lagu: jawaban.value })
  } else if (init === 10) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1000])
  usersData.push(jawaban.value)
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke testing bot 😉, kali-kali kita main ${usersData[2]} bareng ya!`
  jawaban.value = "siap thanks juga!"
}

function botEnd() {
  alert(
    `Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`
  )
  window.location.reload()
}
