let buttonEl = document.getElementById("save-btn")
let myLeads = []
let myOldLeads =[]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromlocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const oldleadsFromlocalStorage = JSON.parse(localStorage.getItem("myOldLeads"))
const deleteEl = document.getElementById("delete-btn")
const restoreBtn = document.getElementById("restore-btn")
const saveBtn = document.getElementById("savetb-btn")

saveBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        myOldLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        localStorage.setItem('myOldLeads',JSON.stringify(myOldLeads))
        render(myLeads)
    })

})

restoreBtn.addEventListener("click",function (){
        const myOldLeads = JSON.parse(localStorage.getItem("myOldLeads")) || []
        render(myOldLeads)
})

if (leadsFromlocalStorage){
    myLeads = leadsFromlocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for (let i=0;i<leads.length;i++){
        listItems += `<li>
                        <a href="https://www.shelflife.co.za/?gad_source=1&gad_campaignid=22190056280&gbraid=0AAAAAoV9muh5g7Ab0IQ5n5pXEJKgpz-JX&gclid=Cj0KCQiA7rDMBhCjARIsAGDBuEBciGCqkl67OUo8OG_7sZ603IQrVuZxTWTIdNQmDkYv0fYYQbbC2QkaAnf2EALw_wcB" target ="_blank" rel= "noopener noreferrer">${leads[i]}
                        </a>
                    </li>`

    }
    ulEl.innerHTML = listItems

}

deleteEl.addEventListener("dblclick",function (){
    localStorage.removeItem('myLeads')
    myLeads = []
    render(myLeads)
})

buttonEl.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    myOldLeads.push(inputEl.value)  
    inputEl.value =""
    localStorage.setItem('myLeads',JSON.stringify(myLeads)) 
    localStorage.setItem('myOldLeads',JSON.stringify(myOldLeads))
    render(myLeads)
})