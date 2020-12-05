
function mapToNegativize(sourceArray) {
    return sourceArray.map(el => -el);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(el => el);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(el => 2 * el);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(el => el ** 2);
}

function reduceToTotal(sourceArray, startingPoint=0) { 
    return sourceArray.reduce(((startingPoint, current) => startingPoint + current), startingPoint);
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((all, current) => {
        if (all === false || current === false) return false;
        else {return true};
    });
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((all, current) => {
        if (current === true) return true;
        else {return false};
    });
}
