console.log("Hello");

function ageInYears(){
    let birthYear = prompt("Enter Your Birth Year: ");
    let ageInYears=(2021-birthYear);
    let h1 = document.createElement('h1');
    let textAns = document.createTextNode('You are '+ ageInYears+ ' Years Old');

    h1.setAttribute('id','ageInYears');
    h1.appendChild(textAns);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInYears').remove();
    
}