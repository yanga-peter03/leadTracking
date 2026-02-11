let buttonEl = document.getElementById("save-btn")
const myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

buttonEl.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    inputEl.value =""
    renderLead()
})


function renderLead(){
    let listItems = ""
    for (let i=0;i<myLeads.length;i++){
        listItems += `<li>
                        <a href="https://www.shelflife.co.za/?gad_source=1&gad_campaignid=22190056280&gbraid=0AAAAAoV9muh5g7Ab0IQ5n5pXEJKgpz-JX&gclid=Cj0KCQiA7rDMBhCjARIsAGDBuEBciGCqkl67OUo8OG_7sZ603IQrVuZxTWTIdNQmDkYv0fYYQbbC2QkaAnf2EALw_wcB" target ="_blank" rel= "noopener noreferrer">${myLeads[i]}
                        </a>
                    </li>`

        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems

}