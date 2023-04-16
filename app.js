function sub(){
    
}
(async function(){
    const json = await fetch("./data.json");
    const data = await json.json();
    // console.log(data);
    
        const genreElem =document.getElementById("selInt");
        data.forEach(function (element) {
            if (typeof element.genres=='string'){
                // console.log("hello")
                let genresArr =[]
                genresArr.push(element.genres);
            }
            else{
                genresArr=element.genres;
            }

            // console.log(genresArr)
            genresArr.forEach(genre=>{
                const genreOpt = document.createElement("option");
                genreOpt.setAttribute("value",genre);
                genreOpt.innerText=`${genre}`;
                genreElem.appendChild(genreOpt);
            }) 
        });
        const yearElem =document.getElementById("selYear");
        // console.log(yearElem)
        let years =[]
        data.forEach(element => {
            let year = element.release_date.trim().slice(0,4);
            // console.log(year);
            if(!(years.includes(year))){
                years.push(year);
            }    
        });
        
        years.forEach(year=>{
            const yearOpt = document.createElement("option");
            yearOpt.setAttribute("value",year);
            yearOpt.innerText=`${year}`;
            yearElem.appendChild(yearOpt);
            

        })
        
        
        const langElem =document.getElementById("selLang");
        let languages =[]
        data.forEach(element => {
            const lang = element.original_language.trim();
            if(!(languages.includes(lang))){
                languages.push(lang);
            }
        });
            languages.forEach(element=>{
                let Opt = document.createElement("option");
                Opt.setAttribute("value",element);
                Opt.innerText=`${element}`;
                langElem.appendChild(Opt);
                
            })
            
    const ratingElem =document.getElementById("ratingS");
    
    
    const submit = ()=>{
        // console.log("hello")
        const genreValue=genreElem.selectedOptions[0].value;
        const yearValue=yearElem.selectedOptions[0].value;
        const langValue=langElem.selectedOptions[0].value;
        const ratingValue=ratingElem.selectedOptions[0].value;
        console.log(genreValue+yearValue+langValue+ratingValue)
        let recomendations =[]
        // console.log(data)
        console.log((+ratingValue.slice(1,2)))
        data.forEach(element=>{
            if( element.genres.includes(genreValue) && element.release_date.trim().slice(0,4).includes(yearValue) && element.original_language.includes(langValue)&& element.vote_average >+(ratingValue.slice(1,2))){
                console.log("hello")
                console.log(element+" kkk")
                recomendations.push(element)
            }
            
        })
        recomendations.sort((a,b)=>{
        if (b.vote_average > a.vote_average){
            return true;
        }
        })
        console.log(recomendations);
        displayMovies(recomendations);
    }
    //         let aPoints =0;
    //         let bPoints =0;
    //         if(a.genres.includes(genreValue)){
    //             aPoints+=1
    //         }
    //         if(a.release_date.trim().slice(0,4).includes(genreValue)){
    //             aPoints+=1
    //         }
    //         if(a.original_language.includes(genreValue)){
    //             aPoints+=1
    //         }
    //         if(b.genres.includes(genreValue)){
    //             aPoints+=1
    //         }
    //         if(b.release_date.trim().slice(0,4).includes(genreValue)){
    //             bPoints+=1
    //         }
    //         if(b.original_language.includes(genreValue)){
    //             aPoints+=1
    //         }
    //         if(a.vote_average > b.vote_average){
    //             aPoints+=1
    //         }
    //         if(a.vote_average < b.vote_average){
    //             bPoints+=1
    //         }
    //         if (aPoints < bPoints){
    //         return true;
    //         } })
    //     }
    
    const btnElem = document.getElementById("btn");
    const recElem = document.getElementById("recommendation");
    btnElem.addEventListener("click",submit);
    
    
    
    const displayMovies = (recomendations)=>{
        recElem.innerText="" 
        let index=0;
    recomendations.forEach(element=>{
        element.similar.forEach(data=>{
            const movieCont = document.createElement("div");
            movieCont.setAttribute("class","head");

            const rankElem = document.createElement("span");
            rankElem.setAttribute("class","rank");
            index +=1;
            rankElem.innerText=`${index}`;
            
            const movieElem = document.createElement("div");
            movieElem.setAttribute("class","movie");
            movieElem.innerText = `${data.title}`;
            
            const newYearElem = document.createElement("div");
            newYearElem.setAttribute("class","year");
            newYearElem.innerText = element.release_date.trim().slice(0,4);
            
            movieCont.appendChild(rankElem);
            movieCont.appendChild(movieElem);
            movieCont.appendChild(newYearElem);
            
            document.getElementById("recommendation").appendChild(movieCont);
            
        })
        
        
        
        
    })

    }
    



})()