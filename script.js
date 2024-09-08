searchInput = document.querySelector('.searchInput')
task = document.querySelector('.list-items')

function addItem(){
    if(searchInput.value === ""){
        alert("Enter task to add in your list")
    }

    else{
        li = document.createElement('li')
        li.textContent = searchInput.value
        task.appendChild(li)

        span = document.createElement('span')
        span.textContent = "\u00d7"
        li.appendChild(span)
    }

    searchInput.value =""
    save()
}


task.addEventListener("click", (e)=>{
         if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked")
            save()
         }
         else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove()
            save()
         }
})


function save(){
    localStorage.setItem("data" , task.innerHTML)
}

function show(){
     task.innerHTML = localStorage.getItem("data")
}


show()