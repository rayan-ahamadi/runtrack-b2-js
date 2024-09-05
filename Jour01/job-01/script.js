function myUpperCase(str) {
    // Ascii code pour a = 97, z = 122
    // Ascii code pour A = 65, Z = 90
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let asciiCode = str.charCodeAt(i);
        if (asciiCode >= 97 && asciiCode <= 122) {
            result += String.fromCharCode(asciiCode - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(myUpperCase("Hello World")); 