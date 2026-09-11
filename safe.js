let a=false;
if (location.href.includes('file:///')||location.href.includes('localhost')){
    a=true;
}
if (!a){
    location = "https://cosmiccat14/github.io/2026-houston-money-show/not-allowed.html";
}