

let high_scores_kept = 5
let high_scores = (localStorage.getItem("our_quiz_high_scores") === null) ? Array() : JSON.parse(localStorage.getItem("our_quiz_high_scores"))
console.log(high_scores)

let current_score = localStorage.getItem("our_quiz_score_current")

function sort_by_index(start, list){
  let length =  list.length
  while(--length > start){
    if(list[length - 1][0] > list[length][0]){
      let current_item = list[length]
      list[length] = list[length - 1]
      list[length - 1] = current_item
    }
  }
  if(list.length - start + 1)
    sort_by_index(start + 1)
  return list
}


let scores_container = document.getElementById("scores-container")

for(let score of high_scores){
  //console.log(score)
  scores_container.innerHTML = scores_container.innerHTML + score[1] + ":" + score[0] + ", "
}

document.getElementById("save_score").addEventListener("click", function(event){
  if(high_scores.length < high_scores_kept || current_score > high_scores[0][0]){
    let user_name = document.getElementById("user_name").value
    high_scores.push([current_score, user_name])
    let new_scores = sort_by_index(high_scores, 0)
    console.log("new scores: " + new_scores)
    if(new_scores.length > high_scores_kept)
      new_scores.shift()
    localStorage.setItem("our_quiz_high_scores", JSON.stringify(new_scores))
  }
  event.target.remove()
})