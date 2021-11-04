class Kartya{
    constructor(elem, adat, index){
        this.elem = elem;
        this.cim = this.elem.children("h3");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("p");
        this.adat = adat;
        this.adat.index = index;
        
        /*this.cim.html(this.adat.cim);
        this.kep.attr("src", this.adat.eleresiut);
        this.leiras.html(this.adat.leiras);*/
        this.setAdatok(this.adat);
        
        this.elem.on("click", ()=>{
            this.KattintTrigger();
        });
    }
    
    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src", ertekek.eleresiut);
        this.leiras.html(ertekek.leiras);
    }
    
    KattintTrigger(){
//        let esemeny = new Event("kartyaKattint");
        let esemeny = new CustomEvent("kepKattint", {detail:this.adat});
        window.dispatchEvent(esemeny);
    }
}