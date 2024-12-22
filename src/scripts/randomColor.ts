export const getRandomColor = ():string => {
    const letters:string = '0123456789ABCDEF';
    let color:string = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


export const getRandomPastelColor = ():string => {
    const r:number = Math.floor(128 + Math.random() * 127); // Rojo entre 128 y 255
    const g:number = Math.floor(128 + Math.random() * 127); // Verde entre 128 y 255
    const b:number = Math.floor(128 + Math.random() * 127); // Azul entre 128 y 255
    return `rgb(${r}, ${g}, ${b})`;
};