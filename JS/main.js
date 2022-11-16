const rowContainerElement = document.getElementById("riga")
const colleagues = [
    { 
        nameSurname:"Wayne Barnett",
        occupation:"Founder & CEO",
        imgSrc:"wayne-barnett-founder-ceo.jpg"
    },
    { 
        nameSurname:"Angela Caroll",
        occupation:"Chief Editor",
        imgSrc:"angela-caroll-chief-editor.jpg"
    },
    { 
        nameSurname:"Walter Gordon",
        occupation:"Office Manager",
        imgSrc:" walter-gordon-office-manager.jpg"
    },
    { 
        nameSurname:"Angela Lopez",
        occupation:"Social Media Manager",
        imgSrc:"angela-lopez-social-media-manager.jpg"
    },
    { 
        nameSurname:"Scott Estrada",
        occupation:"Developer",
        imgSrc:"scott-estrada-developer.jpg"
    },
    { 
        nameSurname:"Barbara Ramos",
        occupation:"Graphic Designer",
        imgSrc:"barbara-ramos-graphic-designer.jpg"
    },

]

//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */
//***creo una funzione che mi stampi larray di oggetti**************************************************************************************************************************************************** */
//******************************************************************************************************************************************************* */
//******************************************************************************************************************************************************* */


function htmlPrintCard (container,arrayObjects){
    
    for(let i=0;i<arrayObjects.length;i++){
        const createDiv = document.createElement("div");
        createDiv.classList.add("col");
        createDiv.classList.add("d-flex");
        createDiv.classList.add("rounded-5");
        createDiv.classList.add("flex-wrap");
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






