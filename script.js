$(function(){
   //kártya adatok -> const tömb
    const kepObjektum = [
        {
            cim:"1. kép címe",
            eleresiut:"kepek/kep1.jpg",
            leiras:"1. kép leírás"
        },{
            cim:"2. kép címe",
            eleresiut:"kepek/kep2.jpg",
            leiras:"2. kép leírás"
        },{
            cim:"3. kép címe",
            eleresiut:"kepek/kep3.jpg",
            leiras:"3. kép leírás"
        }
    ];
    let aktIndex = 0;
    const galeriaSzulo = $("#galeria");
    const fokepSzulo = $("#fokep");
    let sablonElem = $(".kartya");
    
    //sablon elem -> klónozás -> hozzácsatoljuk a szülőelemhez
    /*let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
    const ujKartya = new Kartya(ujElem, kepObjektum[0]);*/
    
    //végig megyünk a tömbön -> a klónozott elemmel és tömb adataival példányosítjuk a kártyákat
    /*for (let index = 0; index < kepObjektum.length; index++) {
        let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya = new Kartya(ujElem, kepObjektum[index]);
    }*/
    kepObjektum.forEach(function(elem, index){
        let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya = new Kartya(ujElem, elem, index);
    });
    
    let ujElem = sablonElem.clone().appendTo(fokepSzulo);
    const nagyKartya = new Kartya(ujElem, kepObjektum[aktIndex], aktIndex);
    
    sablonElem.remove();
    
    $(window).on("kepKattint", (event)=>{
//        console.log(event.detail);
        /*$("#fokep img").attr("src", event.detail.eleresiut);
        $("#fokep h3").html(event.detail.cim);
        $("#fokep p").html(event.detail.leiras);*/
        nagyKartya.setAdatok(event.detail);
        aktIndex = event.detail.index;
        console.log(aktIndex);
    });
    
    $("#bal").on("click", ()=>{
        aktIndex --;
        if (aktIndex < 0) {
            aktIndex = kepObjektum.length - 1;
        }
        nagyKartya.setAdatok(kepObjektum[aktIndex]);
    });
    
    $("#jobb").on("click", ()=>{
        aktIndex ++;
        if (aktIndex > kepObjektum.length - 1) {
            aktIndex = 0;
        }
        nagyKartya.setAdatok(kepObjektum[aktIndex]);
    });
});