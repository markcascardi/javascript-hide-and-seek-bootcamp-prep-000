function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelector('ul.ranked-list')
  debugger
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (lis[i].innerHTML + n)
  }
}

function deepestChild() {
  const deepest = document.getElementById('grand-node').querySelectorAll('div');
  return deepest[deepest.length - 1]
}

// - Define a function `increaseRankBy(n)` that increases the ranks in all of the
//   `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]
