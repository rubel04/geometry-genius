// triangle function
function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    
    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    
    // get area total
    const area = 0.5 * base * height;

    // show triangle area
    const areaTotal = document.getElementById('triangle-area');
    areaTotal.innerText = area;
}


// rectangle function
function calculateRectangleArea() {
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // get area total
    const area = width * length;
    // show triangle area
    const areaTotal = document.getElementById('rectangle-area');
    areaTotal.innerText = area;

}


// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base')
    const height = getInputValue('Parallelogram-height');
    const area = base * height;
    setElementInnerText('Parallelogram-area',area)
}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major-radius');
    const minor = getInputValue('ellipse-minor-radius');
    const area = 3.14 * major * minor;
    setElementInnerText('ellipse-area',area)
}






// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set sapn.p.div etc text
function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}