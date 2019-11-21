window.onload = function() {
  loginOnClick()
  const gmail = document.getElementsByClassName('gmail').item(0)
  const image = document.getElementsByClassName('image').item(0)
  underlineOnHover(gmail)
  underlineOnHover(image)
  feelingLuckyOnClick()
}

function loginOnClick() {
  const login = document.getElementsByClassName('login').item(0)

  login.addEventListener('click', function() {
    login.style.background = 'red'
    login.style.border = '1px solid red'
  })
}

function underlineOnHover(obj) {
  obj.addEventListener('mouseover', function() {
    obj.style.textDecoration = 'underline'
    obj.style.cursor = 'pointer'
  })
  obj.addEventListener('mouseout', function() {
    obj.style.textDecoration = 'none'
  })
}

function feelingLuckyOnClick() {
  const obj = document.getElementsByClassName('feeling-lucky').item(0)
  obj.addEventListener('click', function() {
    console.log(obj.innerHTML)
    if (obj.innerHTML === "I'm Feeling Lucky") {
      obj.innerHTML = "I'm Feeling Sad"
    } else {
      obj.innerHTML = "I'm Feeling Lucky"
    }
    feelingLucky = !feelingLucky
  })
}
