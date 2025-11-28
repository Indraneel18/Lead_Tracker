let Myleads=[]
const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("Input-El")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const LeadsFromLocalStorage= JSON.parse(localStorage.getItem("Myleads"))
const deletebtn = document.getElementById("delete-btn")
if (LeadsFromLocalStorage)
{
    Myleads = LeadsFromLocalStorage
    render(Myleads)
}
inputbtn.addEventListener("click", function ()
{
    Myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("Myleads",JSON.stringify(Myleads))
    render(Myleads)
    })
    tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        Myleads.push(tabs[0].url)
        localStorage.setItem("Myleads", JSON.stringify(Myleads))
        render(Myleads)
    
    })
})
    function render(leads){

  let listitems=""
    for (let i =0 ; i<leads.length; i++)
{
    listitems+= `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
}
    ulEl.innerHTML=listitems
    }
deletebtn.addEventListener("dblclick", function(){
    localStorage.clear()
    Myleads = []
    render(Myleads)
})

 