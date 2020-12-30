$(".neumorphism-outer,.neumorphism-outer-dark").each(function(){
    let b = $(this).attr("b");let x = $(this).attr("x");let y = $(this).attr("y");let light = $(this).attr("light");let shadow = $(this).attr("shadow");let rad = $(this).attr("rad");let lOpac = $(this).attr("l-opac");let sOpac = $(this).attr("s-opac");let lightRGBA;let shadowRGBA;let default_shadow = "#000000";let default_light = "#ffffff";
    if(light !== undefined || shadow !== undefined){
        if(light === "default"){
            light = default_light;
        }
        if(shadow === "default"){
            shadow = default_shadow;
        }
        if(light !== undefined){
            lightRGBA = convertHexToRGB(light);
        }
        if(shadow !== undefined){
            shadowRGBA = convertHexToRGB(shadow);
        }       
        let changedString = `-${x}px -${y}px ${b}px rgba(${lightRGBA[0]},${lightRGBA[1]},${lightRGBA[2]},${lOpac}), ${x}px ${y}px ${b}px rgba(${shadowRGBA[0]},${shadowRGBA[1]},${shadowRGBA[2]},${sOpac})`;
        $(this).css('box-shadow',changedString);
    }
    
});

$(".neumorphism-inner,.neumorphism-inner-dark").each(function(){
    let b = $(this).attr("b");let x = $(this).attr("x");let y = $(this).attr("y");let light = $(this).attr("light");let shadow = $(this).attr("shadow");let rad = $(this).attr("rad");let lOpac = $(this).attr("l-opac");let sOpac = $(this).attr("s-opac");let lightRGBA;let shadowRGBA;let default_shadow = "#000000";let default_light = "#ffffff";
    if(light !== undefined || shadow !== undefined){
        if(light === "default"){
            light = default_light;
        }
        if(shadow === "default"){
            shadow = default_shadow;
        }
        if(light !== undefined){
            lightRGBA = convertHexToRGB(light);
        }
        if(shadow !== undefined){
            shadowRGBA = convertHexToRGB(shadow);
        }       
        let changedString = `inset -${x}px -${y}px ${b}px rgba(${lightRGBA[0]},${lightRGBA[1]},${lightRGBA[2]},${lOpac}), inset ${x}px ${y}px ${b}px rgba(${shadowRGBA[0]},${shadowRGBA[1]},${shadowRGBA[2]},${sOpac})`;
        $(this).css('box-shadow',changedString);
    }
    
});

function convertHexToRGB(hexVal){
    let ret;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)){
        ret = hexVal.slice(1); 
        ret = ret.split(''); 
        if(ret.length == 3) { 
            var ar = []; 
            ar.push(ret[0]);  
            ar.push(ret[0]); 
            ar.push(ret[1]); 
            ar.push(ret[1]); 
            ar.push(ret[2]); 
            ar.push(ret[2]); 
            ret = ar; 
        } 
        ret = '0x'+ ret.join(''); 
        var r = (ret>>16)&255; 
        var g = (ret>>8)&255; 
        var b = ret&255; 
        return([r,g,b])
    }
}