const loadText =  document.querySelector('.loading-text')
const backgroundSection = document.querySelector('.bg')

let load = 0; 


/* 
▀█▀ █░█ █ █▀   █ █▀   ▄▀█   █▀▀ █░█ █▄░█ █▀▀ ▀█▀ █ █▀█ █▄░█
░█░ █▀█ █ ▄█   █ ▄█   █▀█   █▀░ █▄█ █░▀█ █▄▄ ░█░ █ █▄█ █░▀█ 
𝕋𝕙𝕚𝕤 𝕚𝕤 𝕒 𝕗𝕦𝕟𝕔𝕥𝕚𝕠𝕟 𝕥𝕙𝕒𝕥 𝕚𝕟𝕔𝕣𝕖𝕒𝕤𝕖𝕤 𝕥𝕙𝕖 𝕓𝕝𝕦𝕣𝕚𝕟𝕘 𝕕𝕖𝕡𝕖𝕟𝕕𝕚𝕟𝕘 𝕠𝕟 𝕥𝕙𝕖 𝕝𝕠𝕒𝕕 𝕟𝕦𝕞𝕓𝕖𝕣

*/ 


let int = setInterval(blurring, 30)


function blurring() {

    load++

    if (load > 99){
        clearInterval(int)
    }

    //loadText.innerHTML = `${load}%`  
    loadText.innerHTML = load+"%"
    loadText.style.opacity = 1 - (load/100)
    

}