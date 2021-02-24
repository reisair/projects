/* Create program that outputs competitors placements with following way:
['1st competitor was Julia', '2nd competitor was Mark', '3rd competitor was Spencer', '4th competitor was Ann', '5th competitor was John', '6th competitor was Joe']
 */
const competitors = ['Julia', "Mark", "Spencer", "Ann" , "John", "Joe"];
const ordinals = ['st', 'nd', 'rd', 'th'];

const placements = [];

for (let i = 0; i < competitors.length; i++) {

    let text = `${i + 1}${i > ordinals.length ?
        ordinals[ordinals.length - 1] :
        ordinals[i]} competitor was ${competitors[i]}`;
    placements.push(text);
}
console.log(placements);

