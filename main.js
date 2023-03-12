
let hr = document.querySelector('.hour').style
let min = document.querySelector('.minutes').style
let sec = document.querySelector('.seconds').style


setInterval(() =>{
    
    /*
    const time = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
    const ss = time.slice(-2);
    const mm = time.slice(15, 17);
    const hh = time.slice(12, 14);
    */

    const time = new Date()
    const ss = time.getSeconds();
    const mm = time.getMinutes();
    const hh = time.getHours();

    let ssDeg = parseInt(ss) * 6;
    let mmDeg = parseInt(mm) * 6;    
    let hhDeg = parseInt(hh) * 30 + (30*mmDeg)/360;
    
    
    // let hhDeg = parseInt(hh) * 30 + (30/100)*(mmDeg/3.6);

    sec.rotate = `${ssDeg}deg`;
    min.rotate = `${mmDeg}deg`;
    hr.rotate = `${hhDeg}deg`;
    
    
})
