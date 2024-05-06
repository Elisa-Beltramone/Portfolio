document.addEventListener("DOMContentLoaded", function() {
    let boxShadowValues = generateBoxShadowValues(120);

    let boxShadow = boxShadowValues.join(",\n");
    document.documentElement.style.setProperty('--box-shadow', boxShadow);
});

function generateBoxShadowValues(count) {
    let values = [];
    for (let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * 1200);
        let y = Math.floor(Math.random() * 1200);
        let shadowColor = "#fff";
        let value = `${x}px ${y}px ${shadowColor}`;
        values.push(value);
    }
    return values;
}

