const master = function masterBranch(){

    const master = 100;
    console.log(`master branch : ${master}`);

    return master;

};

const mBranch = function mergeBranch(){
    
    const merge = 'merge-b-1';
    console.log(`branch : ${merge}`);

    return `#`+merge+`#`;

}