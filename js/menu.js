function menumegnyit() {
    let nav = document.getElementById("menu")
    nav.classList.toggle("aktiv")
}

document.getElementById("menu_gomb").addEventListener("click", menumegnyit)

function onerepmax(){
    if (document.getElementById("suly").value==""){
        alert("Nem töltötted ki a mezőket!")
        return}
    let suly = document.getElementById("suly").value
    
    if (document.getElementById("ism").value==""){
        alert("Nem töltötted ki a mezőket!")
        return}
    let rep = document.getElementById("ism").value
    let max = parseFloat(suly) * (1+parseFloat(rep)/30)

    let mertegyseg = document.getElementById("mertekegyseg").value

    if (mertegyseg === "kg"){
        let max_lbs = parseFloat(max)*2.2
        document.getElementById("rekord_kg").value = max.toFixed(1)
        document.getElementById("rekord_lbs").value = max_lbs.toFixed(1)
    }
    else {
        let max_kg = parseFloat(max)/2.2
        document.getElementById("rekord_kg").value = max_kg.toFixed(1)
        document.getElementById("rekord_lbs").value = max.toFixed(1)
    }
}

document.getElementById("kalk_one").addEventListener("click", onerepmax)

function bmi(){
    if (document.getElementById("ferfi").checked){
        nem = "f"
    } else if(document.getElementById("no").checked){
        nem = "n"
    } else{
        alert("Nem töltötted ki a mezőket!")
        return
    }
    if (document.getElementById("bw").value==""){
        alert("Nem töltötted ki a mezőket!")
        return
    } else if(Number(document.getElementById("bw").value)<0){
        alert("Nem valid adatot adtál meg!") 
        return
    }else {
            bw = Number(document.getElementById("bw").value)
        }
    if (document.getElementById("magas").value==""){
            alert("Nem töltötted ki a mezőket!")
            return
        } else if(document.getElementById("magas").value<0){
            alert("Nem valid adatot adtál meg!")
        return
    }else {
            magassag = Number(document.getElementById("magas").value)/100
            }
    if (document.getElementById("age").value==""){
        alert("Nem töltötted ki a mezőket!")
        return
        } else if(document.getElementById("age").value<0){
        alert("Nem valid adatot adtál meg!")
        return
    }else {eletkor = Number(document.getElementById("age").value)
    }

    if (document.getElementById("mertekegyseg_bmi").value=="lbs"){
        bw = bw/2.2}
    
    bmi = bw/(magassag*magassag)
    bmi = bmi.toFixed(2)
    
    if (bmi >= 30){
        ertekeles = "Elhízott"
        ajanlott = "brokkoli, spenót (sok zöldség), csirkemell, hal, burgonya"
    } else if (bmi>=25 && bmi<30){
        ertekeles = "Túlsúlyos"
         ajanlott = "csirkemell, pulykamell, tonhal, burgonya, rizs"
    } else if (bmi <= 15){
        ertekeles = "Alultáplált"
         ajanlott = "zsírosabb húsok, halak, kókusz és oliva olaj, sok gyömülcs"
    } else if (bmi > 15 && bmi < 18.5){
        ertekeles = "Sovány"
         ajanlott = "zsírosabb húsok, csirke, kenyér, gyümölcsök"
    } else {
        ertekeles = "Normális"
         ajanlott = "A mostani táplálkozási szokásaid tökéletesek, próbáld meg ezt továbbra is tartni."
    }
    
    document.getElementById("bmi").value = bmi
    document.getElementById("ertekeles").value = ertekeles
    document.getElementById("etel").value = ajanlott
    if (nem == "f"){
        bmr = 10*bw+6.25*magassag*100-5*eletkor+5
    } else {
        bmr = 10*bw+6.25*magassag*100-5*eletkor-161
    }

    szorzo = Number(document.getElementById("aktivitas").value)
    document.getElementById("bmr").value = bmr
    document.getElementById("tdee").value = szorzo*bmr
}

    document.getElementById("kalk_bmi").addEventListener('click', bmi)

