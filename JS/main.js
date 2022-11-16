const colleagues = [
    { 
        nameSurname:"Wayne Barnett",
        occupation:"Founder & CEO",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },
    { 
        nameSurname:"Angela Caroll",
        occupation:"Chief Editor",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },
    { 
        nameSurname:"Walter Gordon",
        occupation:"Office Manager",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },
    { 
        nameSurname:"Angela Lopez",
        occupation:"Social Media Manager",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },
    { 
        nameSurname:"Scott Estrada",
        occupation:"Developer",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },
    { 
        nameSurname:"Barbara Ramos",
        occupation:"Graphic Designer",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },

]

const rowContainerElement = document.querySelector("row")
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */
//***creo una funzione che mi stampi larray di oggetti**************************************************************************************************************************************************** */
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */


function htmlPrintCard (container,arrayObjects){
    
    for(i=0;i<arrayObjects;i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("col");
        createDiv.classList.add("d-flex");
        createDiv.classList.add("justify-content-center");
        createDiv.classList.add("p-2");
        createDiv.classList.add("bg-success");
        const createH3 = document.createElement("h3");
        createH3.innerText=`nome cognome:${arrayObjects[i].nameSurname}`
        const createH2 = document.createElement("h2");
        createH2.innerText=`occupazione:${arrayObjects[i].occupation}`
        const createImg = document.createElement("img");
        createImg.src=arrayObjects[i].imgSrc;
        container.append(createDiv);
        createDiv.append(createH3);
        createDiv.append(createH2);
        createDiv.append(createImg);
        

        
        
        
    }


}
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* *///******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */

htmlPrintCard(rowContainerElement,colleagues);






