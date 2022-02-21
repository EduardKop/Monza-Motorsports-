    const filterBtn = document.querySelector('.sorting-btn');//sort button above cars element
    const carCards = document.querySelectorAll('.items-cards__elem');//car card
    let sortBtnTextValue = document.querySelector('.sorting-btn-text')
    let yearValue,makeValue,modelValue,trimValue,mileageValue; //values ​​of all car cards
    const availableCarBtn = document.querySelector('.second-filters-checkbox-input')//availableCar
    
//information of individual elements of the car card
    const years = document.querySelectorAll('.car_year');//car-Card years span text
    const make = document.querySelectorAll('.car_name-Make')//car-Card  make span text
    const model = document.querySelectorAll('.car_name-Make-Model')//car-Card  model span text
    const trim = document.querySelectorAll('.car_fuel')//car-Card  trim span text
    const mileage = document.querySelectorAll('.car_km')//car-Card  mileage span text

//reverse arrow img
    const dropdownSortArrowBtn = document.querySelector('.dropdown-toggle'); //sort car-Card btn (Sort by)
    const dropdownSortArrowImg = document.querySelector('.second-filter-sort img');//img car-Card btn (Sort by)
    const dropdowtMenu = document.querySelector('.show');//dropdown-menu

    const all = document.querySelector('.items-cards__line')
//object with carts text info
    let counter = { 
    numYears:0,numMake:0,numModel:0,numTrim:0,numMileage:0,
    years:[],make:[],model:[],trim:[],mileage:[]
    }

  
function changeFilterBtnValue(){
 
    // sortBtnTextValue.innerHTML = `${((counter.numYears)+(counter.numMake)+(counter.numModel)+(counter.numTrim)+(counter.numMileage))} cars`

}
dropdownSortArrowBtn.addEventListener('click', ()=>{ //rotate img if click
        if (dropdownSortArrowBtn.ariaExpanded === "true"){
        dropdownSortArrowImg.style.transform = 'rotate(360deg)';
        }
        else if (dropdownSortArrowBtn.ariaExpanded === "false") {
        dropdownSortArrowImg.style.transform = 'rotate(180deg)'
        }
})

//Instantly available vehicles
availableCarBtn.addEventListener('click',()=>{
    carCards.forEach((card)=>{
        if (card.classList.contains('sold')){
        card.style.display = 'none'
        }
    })
})
//question hover 
    const accordionBtns = document.querySelectorAll('.accordion-button'); 
    const accordionBtnsClose = document.querySelectorAll('.accordion-collapse-name') 

accordionBtns.forEach((e)=>{ //hover question element if click
    e.addEventListener('click',()=>{
        accordionBtns.forEach((elem)=>{
            elem.style.visibility = 'visible';
        })
        e.style.visibility = 'hidden';
    })
    accordionBtnsClose.forEach((i)=>{
        i.addEventListener('click',()=>{
        e.style.visibility = 'visible';
        })
    })
    
    
})



//car filter 
filterBtn.addEventListener('click',()=>{sorting()})

function sorting(){
    
// console.log(yearValue,warnValue,modelValue,trimValue,mileageValue)
sortedCard(yearValue,makeValue,modelValue,trimValue,mileageValue)
let allActivElements = []
carCards.forEach((elem)=>{
    if(elem.style.display != "none"){
        allActivElements.push(elem)
        sortBtnTextValue.innerHTML=  `${allActivElements.length} cars`
        console.log(allActivElements)
        console.log(sortBtnTextValue)
} if(allActivElements.length == 0) {
    sortBtnTextValue.innerHTML=  `0 cars`

}
})
console.log(allActivElements)

}

function sortedCard(year,make,model,trim,milage) {
let allCards = document.querySelectorAll('.items-cards__elem'); //car card

    allCards.forEach((oneCard)=>{
        if (oneCard.childNodes[1].childNodes[3].childNodes[1].childNodes[1].textContent == year || year === undefined){ 
            oneCard.style.display = "flex" 
            if(oneCard.childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[0].textContent == make || make === undefined){ 
                oneCard.style.display = "flex"  
                if(oneCard.childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[2].textContent == model || model === undefined){
                oneCard.style.display = "flex"  
                    if (oneCard.childNodes[1].childNodes[3].childNodes[3].childNodes[9].textContent == trim || trim === undefined) {
                    oneCard.style.display = "flex"  
                        if(oneCard.childNodes[1].childNodes[3].childNodes[3].childNodes[1].textContent  == milage || milage === undefined){
                        oneCard.style.display = "flex"
                        }else {
                        oneCard.style.display = "none"
                        }
                    }else {
                    oneCard.style.display = "none"
                    }
                }else {
                oneCard.style.display = "none"
                }
            } else {
            oneCard.style.display = "none"
            }
        }
        else {
        oneCard.style.display = "none"
        }
    })

}

const wrap = document.querySelectorAll('.dropbtn');
const dropdowns = document.querySelectorAll('.dropdown-content'); 


wrap.forEach((e)=>{
    e.addEventListener('click',()=>{ 
        event.preventDefault()
        e.parentNode.parentNode.children[1].classList.toggle('show')
    })
}) 


window.onclick = function (event) {//close dropdown menu
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }

    };

const sortByBtn = document.querySelector('.sort-by'); //btn 'sortBy' in filters
sortByBtn.addEventListener('click',()=>{
    const activeValueSortByBtn = document.querySelector('.sortBy-name'); //element 'sortBy-name' in filters
    const dropdownMenuBtnsSortBy = document.querySelectorAll('.dropdown-item');//menu 'year' in filters   
    // document.getElementById('Years').classList.toggle('show');

    dropdownMenuBtnsSortBy.forEach((filter_btn_value)=>{ //change btn 'value' in filters and add info in car obj
        filter_btn_value.addEventListener('click',()=>{
            activeValueSortByBtn.innerHTML = filter_btn_value.textContent // actual value 
            sortBy =  filter_btn_value.textContent;
            
                let nodeList = document.querySelectorAll('.items-cards__elem');
                let itemsArray = [];
                let parent = nodeList[0].parentNode;
                if (sortBy !== 'Publication date (descending)'){
                
                
                for (var i = 0; i < nodeList.length; i++) {
                    itemsArray.push(parent.removeChild(nodeList[i]));
                }
                if (sortBy == 'Price (descending)'){
                    itemsArray.sort(function (nodeA, nodeB) {
                        let textA = nodeA.querySelector('div').children[1].children[2].children[0].textContent
                        let textB = nodeB.querySelector('div').children[1].children[2].children[0].textContent
                        let numberA = parseInt(textA.substring(1));
                        let numberB = parseInt(textB.substring(1));
                        console.log(numberA)
                        console.log(numberB)
                        if (numberA < numberB) return -1;
                        if (numberA > numberB) return 1;
                        return 0;
                    }).forEach(function (node) {
                        parent.appendChild(node)
                    });
                }
                else if (sortBy == 'Price (ascending)'){
                    itemsArray.sort(function (nodeA, nodeB) {
                        let textA = nodeA.querySelector('div').children[1].children[2].children[0].textContent
                        let textB = nodeB.querySelector('div').children[1].children[2].children[0].textContent
                        let numberA = parseInt(textA.substring(1));
                        let numberB = parseInt(textB.substring(1));
                        console.log(numberA)
                        console.log(numberB)
                        if (numberA > numberB) return -1;
                        if (numberA < numberB) return 1;
                        return 0;
                    }).forEach(function (node) {
                        parent.appendChild(node)
                    });
                }
                else if (sortBy == 'Mileage (ascending)'){
                    itemsArray.sort(function (nodeA, nodeB) {
                        let textA = nodeA.querySelector('div').children[1].children[1].children[0].textContent
                        let textB = nodeB.querySelector('div').children[1].children[1].children[0].textContent
                        let numberA = parseInt(textA.slice(0,-2));
                        let numberB = parseInt(textB.slice(0,-2))
                        console.log(numberA)
                        console.log(numberB)
                        if (numberA < numberB) return -1;
                        if (numberA > numberB) return 1;
                        return 0;
                    }).forEach(function (node) {
                        parent.appendChild(node)
                    });
                }
                else if (sortBy == 'Mileage (descending)'){
                    itemsArray.sort(function (nodeA, nodeB) {
                        let textA = nodeA.querySelector('div').children[1].children[1].children[0].textContent
                        let textB = nodeB.querySelector('div').children[1].children[1].children[0].textContent
                        let numberA = parseInt(textA.slice(0,-2));
                        let numberB = parseInt(textB.slice(0,-2))
                        console.log(numberA)
                        console.log(numberB)
                        if (numberA > numberB) return -1;
                        if (numberA < numberB) return 1;
                        return 0;
                    }).forEach(function (node) {
                        parent.appendChild(node)
                    });
                }
                else if (sortBy == 'Performance (ascending)'){
                    itemsArray.sort(function (nodeA, nodeB) {
                        let textA = nodeA.querySelector('div').children[1].children[0].children[0].textContent
                        let textB = nodeB.querySelector('div').children[1].children[0].children[0].textContent
                        let numberA = parseInt(textA);
                        let numberB = parseInt(textB)
                        if (numberA > numberB) return -1;
                        if (numberA < numberB) return 1;
                        return 0;
                    }).forEach(function (node) {
                        parent.appendChild(node)
                    });
                }
                else if (sortBy == 'Performance (descending)'){
                    itemsArray.sort(function (nodeA, nodeB) {
                        let textA = nodeA.querySelector('div').children[1].children[0].children[0].textContent
                        let textB = nodeB.querySelector('div').children[1].children[0].children[0].textContent
                        let numberA = parseInt(textA);
                        let numberB = parseInt(textB)
                        console.log(numberA)
                        console.log(numberB)
                        if (numberA < numberB) return -1;
                        if (numberA > numberB) return 1;
                        return 0;
                    }).forEach(function (node) {
                        parent.appendChild(node)
                    });
                }}
            })

        })
    })

//years
const yearsDropdownBtn = document.querySelector('.myDropdownYears'); //btn 'year' in filters
yearsDropdownBtn.addEventListener('click',()=>{
    const activeValueYearBtn = document.querySelector('.name-year'); //element 'year' in filters
    const dropdownBtnsYear = document.querySelectorAll('.item-year');//menu 'year' in filters   
    // document.getElementById('Years').classList.toggle('show');

    dropdownBtnsYear.forEach((filter_btn_value)=>{ //change btn 'value' in filters and add info in car obj
        filter_btn_value.addEventListener('click',()=>{
            counter.numYears = 0
            activeValueYearBtn.innerHTML = filter_btn_value.textContent // actual value 
            yearValue =  filter_btn_value.textContent //change btn value
            function yearsNumForCounter(){
                years.forEach((e)=>{
                    if(counter.years.length > 21){
                    return null
                    }
                    else{
                    counter.years.push(e.textContent)
                    }
                })
                counter.years.forEach((e)=>{
                    if (e == activeValueYearBtn.textContent){
                    counter.numYears = counter.numYears+1
                    }
                })
        
            }
            yearsNumForCounter()

        })
    })
})
//make
const makeDropdownBtn = document.querySelector('.myDropdownMake');//btn 'make' in filters
makeDropdownBtn.addEventListener('click',()=>{
    const activeValueWarnBtn = document.querySelector('.name-warn');//element 'make' in filters
    const dropdownBtnsWarn = document.querySelectorAll('.item-warn');//menu 'make' in filters
    // document.getElementById('Make').classList.toggle('show');
    dropdownBtnsWarn.forEach((filter_btn_value)=>{ //change btn 'value' in filters and add info in car obj
        filter_btn_value.addEventListener('click',()=>{
            counter.numMake = 0
            activeValueWarnBtn.innerHTML = filter_btn_value.textContent // actual value
            makeValue = filter_btn_value.textContent; //change btn value
            
            function makeNumForCounter(){
                    make.forEach((e)=>{
                    if(counter.make.length > 21){
                    return null
                    }else{
                    counter.make.push(e.textContent)
                    }
                })
                counter.make.forEach((e)=>{
                    if (e == activeValueWarnBtn.textContent){
                    counter.numMake = counter.numMake+1
                    }
                })
        
            }
            makeNumForCounter()

        })
    })
})
//model
const modelDropdownBtn = document.querySelector('.myDropdownModel');//btn 'model' in filters
modelDropdownBtn.addEventListener('click',()=>{
    const activeValueModelBtn = document.querySelector('.name-model');//element 'model' in filters
    const dropdownBtnsModel = document.querySelectorAll('.item-model');//element 'model' in filters
    // document.getElementById('model').classList.toggle('show');

    dropdownBtnsModel.forEach((filter_btn_value)=>{//change btn 'value' in filters and add info in car obj
        filter_btn_value.addEventListener('click',()=>{
            counter.numModel = 0
            activeValueModelBtn.innerHTML = filter_btn_value.textContent // +e.textContent актуальне value 
            modelValue = filter_btn_value.textContent;
            function modelNumForCounter(){
                model.forEach((e)=>{
                    if(counter.model.length > 21){
                    return null
                    }else{
                    counter.model.push(e.textContent)
                    }
                })
                counter.model.forEach((e)=>{
                if (e == activeValueModelBtn.textContent){
                counter.numModel = counter.numModel+1
                }
                })
            }
            modelNumForCounter()

        })
    })
})
//trim
const trimDropdownBtn = document.querySelector('.myDropdownTrim');//btn 'trim' in filters
trimDropdownBtn.addEventListener('click',()=>{
    const activeValueTrimBtn = document.querySelector('.name-trim');//element 'trim' in filters
    const dropdownBtnsTrim = document.querySelectorAll('.item-trim');//element 'trim' in filters
    // document.getElementById('trim').classList.toggle('show');

    dropdownBtnsTrim.forEach((filter_btn_value)=>{
        filter_btn_value.addEventListener('click',()=>{
            counter.numTrim = 0
            activeValueTrimBtn.innerHTML = filter_btn_value.textContent // +e.textContent актуальне value 
            trimValue = filter_btn_value.textContent;
            function trimNumForCounter(){
                trim.forEach((e)=>{
                    if(counter.trim.length > 21){
                    return null
                    }else{
                    counter.trim.push(e.textContent)
                    }
                })
                counter.trim.forEach((e)=>{
                if (e == activeValueTrimBtn.textContent){
                counter.numTrim = counter.numTrim+1
                }
                })
            }
            trimNumForCounter()

        })
    })
})
//mileage
const mileageDropdownBtn = document.querySelector('.myDropdownMileage');//btn 'mileage' in filters
mileageDropdownBtn.addEventListener('click',()=>{
    const activeValueMileageBtn = document.querySelector('.name-mileage');//element 'mileage' in filters
    const dropdownBtnsMileage = document.querySelectorAll('.item-mileage');//element 'mileage' in filters
    // document.getElementById('mileage').classList.toggle('show');

    dropdownBtnsMileage.forEach((e)=>{
        e.addEventListener('click',()=>{
            counter.numMileage = 0
            activeValueMileageBtn.innerHTML = e.textContent // +e.textContent актуальне value 
            mileageValue = e.textContent
            function mileageNumForCounter(){
                mileage.forEach((e)=>{
                    if(counter.mileage.length > 21){
                    return null
                    }else{
                    counter.mileage.push(e.textContent)
                    }
                })
                counter.mileage.forEach((e)=>{
                if (e == activeValueMileageBtn.textContent){
                counter.numMileage = counter.numMileage+1
                }
                })
            }   
            mileageNumForCounter()
        })
    })
})



