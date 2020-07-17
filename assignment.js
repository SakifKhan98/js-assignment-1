//feetToMile
function feetToMile(feet) {
    if(feet<= 0) {
        console.log("Invalid Feet Number");
    }
    else {
        let mile = feet/5280;
    }
    console.log(mile);
};
//woodCalculator
function woodCalculator(chair, table, cot){
    if (chair <0 || table <0 || cot <0) {
        console.log("Invalid Number");
    }
    else {
        let chairWood = chair *1;
        let tableWood = table *3;
        let cotWood   = cot   *5;
        let sum = chairWood + tableWood + cotWood;
        console.log("Total required wood is: "+ sum + "qft");
    }

};
//brickCalculator
//1st-10th floor = 15ft/floor
//11th-20th floor = 12ft/floor
//21st floor to above = 10ft/floor
//1000 bricks/ft

function brickCalculator(floor) {
    let totalBrick;
    if (floor<0) {
        console.log("Invalid Number");
    }
    else {
        if(floor>0 && floor<=10) {
            totalBrick = floor*15*1000;
        }
        else if (floor>10 && floor <=20) {
            totalBrick = 10*15*1000 + (floor-10) * 12 *1000;
        }
        else {
            totalBrick = 10*15*1000 + 10 * 12 *1000 + (floor-20) * 10 * 1000;
        }
    }
    console.log("Required Number of Total Brick is: " +totalBrick);
}

//tinyFriend
function tinyFriend (friends) {
    var smlst = friends[0];
    for (var i =0; i<friends.length; i++) {
        var selectedFriend = friends[i];
        if(selectedFriend.length < smlst.length) {
            smlst = selectedFriend;
        }
    }
    console.log("Tiniest Freind is: ", smlst);
}