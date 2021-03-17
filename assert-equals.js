const assertEquals = (expect, actual) => {
    return {
        primitiveData: (expect, actual) => {
            if (expect === actual) {
                return actual;
            } else if (expect == actual) {
                throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);
            } else {
                throw new Error(`Expected ${typeof expect === 'number' ? expect : `'${expect}'`} but found ${typeof actual === 'number' ? actual : `'${actual}'`}`);
            }
        },
        mutableData: (expect, actual) => {
            if (expect.length !== actual.length) {
                throw new Error(`Expected array length ${expect.length} but found ${actual.length}`);
            } else if (JSON.stringify(expect) === JSON.stringify(actual)) {
                return actual;
            } else if (JSON.stringify(expect) !== JSON.stringify(actual)) {
                let expectArr = [];
                let actualArr = [];
                expect.map((element, index) => {
                    if (element !== actual[index]) {
                        expectArr.push(element);
                        actualArr.push(actual[index]);
                    }
                });
                throw new Error(`Expected ${expectArr.toString()} but found ${actualArr.toString()}`);
            }
        },
    }

}

module.exports = assertEquals

