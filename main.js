
let hr = document.querySelector('.hour').style
let min = document.querySelector('.minutes').style
let sec = document.querySelector('.seconds').style


setInterval(() =>{
    
    const time = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"})
    const ss = time.slice(-2);
    const mm = time.slice(15, 17);
    const hh = time.slice(12, 14);

    let ssDeg = parseInt(ss) * 6;
    let mmDeg = parseInt(mm) * 6;    
    mmDeg = 90;
    // let hhDeg = parseInt(hh) * 30 + (30/100)*(mmDeg/3.6);
    let hhDeg = parseInt(hh) * 30 + (30*mmDeg)/360;

    sec.rotate = `${ssDeg}deg`;
    min.rotate = `${mmDeg}deg`;
    hr.rotate = `${hhDeg}deg`;
    
    
})
