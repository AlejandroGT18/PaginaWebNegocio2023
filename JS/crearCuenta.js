// PARTE DEL MODAL
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


function clickEst() {
    
    let opcionSel = document.getElementById('queEs').value
    const laCol = document.getElementById('colAux')

    if (opcionSel == 'Estudiante') {

        laCol.className = `mt-3`

        let newSel = document.createElement("select")
        newSel.className = `form-select`    
        
        let opcionesNuevas = ["Curso:","1er año", "2do año","3er año","4to año","5to año"]

        for (let i = 0; i < opcionesNuevas.length; i++) {
            
            let opts = document.createElement("option")
            opts.innerHTML = `<option value=''>${opcionesNuevas[i]}</option>`
            newSel.appendChild(opts)
            
        }

        laCol.appendChild(newSel)
    } else {

        laCol.className = `d-none`
    } 
}    