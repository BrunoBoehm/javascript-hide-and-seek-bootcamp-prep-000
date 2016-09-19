function getFirstSelector(selector) {
  var first = document.querySelector(selector)
  return first
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = list.length; i<l; i++) {
    // parses .innerHTML which is a string and returns and integer with radix 10
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild() {
  var prospects = document.querySelector('#grand-node').querySelectorAll('div')
  return prospects[prospects.length - 1]
}
