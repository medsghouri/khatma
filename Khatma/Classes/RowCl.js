
export class RowCl {
    static TbodyEl = document.getElementById('userTbody')
    static searchEl = document.getElementById("search");
    static statusEl = document.getElementById("status")
    
    static clearUserTbodyEl(){
        this.TbodyEl.innerHTML = ""
    }
    
    constructor(user) {
        this.user = user; // Array to hold the user objects

        this.tRowEl = document.createElement('tr')
        this.tBtnEl = document.createElement('button') /////
        this.tdRowEl = document.createElement('td')
        this.iLeftEl = document.createElement('i')
        this.divRightEl = document.createElement('div')
    }
    
    join(user){
        console.log(user)
        console.log()
    }

    addToTable(user) {
        // --- Add User infos and Row to Table 
        this.divRightEl.innerHTML = ` الحزب ` + user.hizbId + ` - ` + user.name;
        this.divRightEl.style.cssFloat = "right"

        this.tdRowEl.appendChild(this.iLeftEl)
        this.tdRowEl.appendChild(this.divRightEl)

        this.tRowEl.appendChild(this.tdRowEl);
        this.tRowEl.appendChild(this.tBtnEl) /////////////

        RowCl.TbodyEl.appendChild(this.tRowEl);

        this.tBtnEl.addEventListener("click", function () { /////
            location.href = "./hizb.html?no=" + this.hizbId   ////////
        })/////////
        //--------------------- Click on Name in Table --------------
        this.tdRowEl.addEventListener("click", function () {
            user.updateStatusInDB(user)
        })

    }

    changeColor(user) {
    this.iLeftEl.style.cssFloat = "left"

    if (user.status == 'X') { // Green
        // -- Change color of row --
        this.tdRowEl.style.backgroundColor = '#c7e5c9' //Lightgreen
        this.tdRowEl.style.borderColor = '#224823' //Darkgreen

        // -- change icon of row
        this.iLeftEl.className = "fa fa-check"
        this.iLeftEl.style.fontSize = "30px"
        this.iLeftEl.style.color = '#224823'

    }
    else { // Red
        // -- Change color of row --
        this.tdRowEl.style.backgroundColor = 'lightred'
        this.tdRowEl.style.borderColor = '#73000c' //Darkgreen

        // -- change icon of row
        this.iLeftEl.className = "fa fa-times"
        this.iLeftEl.style.fontSize = "30px"
        this.iLeftEl.style.color = '#73000c'
    }

}













    // ---------------------------------------------------------------------------------------------
    //      PAI
    // ---------------------------------------------------------------------------------------------

    // --- on Searching ----------------------------------------------------------------------------
    search(user) {
        var lo_Row = this

        RowCl.searchEl.addEventListener("keyup", function () {
            // console.log(user)    
            lo_Row.filter()
        })
    }

    // --- Filter users based on the search --------------------------------------------------------
    filter() {
        var filter, txtValue;
        filter = RowCl.searchEl.value.toUpperCase();

        txtValue = this.tdRowEl.textContent || this.tdRowEl.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            this.tRowEl.style.display = "";
        } else {
            this.tRowEl.style.display = "none";
        }


    }


}


