const showText = (target, message, interval) => {
  const l = message.length
  let i = 0
  const int = setInterval(function () {
    target.innerHTML += message.charAt(i)
    i++
    if (i > l) {
      clearInterval(int)
    }
  }, interval)
}

export default showText
