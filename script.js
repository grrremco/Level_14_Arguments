const paintWall = function (item) {
    console.log('The wall has been painted ' + item)
}

paintWall('green');
paintWall('blue');
paintWall();


const wallColor = function (itemB, itemA) {
    console.log('The ' + itemA + ' wall has been painted ' + itemB)
}

wallColor('north', 'orange');
wallColor('orange', 'north');