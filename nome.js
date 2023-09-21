const combBtn = document.getElementById("combBtn");
const resultElement = document.getElementById("result");

combBtn.addEventListener("click",()  => {
    const stg1 = document.getElementById("stg1").value;
    const stg2 = document.getElementById("stg2").value;
    const combineStg = combinenn (stg1,stg2)
    resultElement.textContent = "Nome Completo:" + combineStg;
}
);

function combinenn(stg1,stg2){
    return stg1 + " " + stg2;
}