let queryString = decodeURIComponent(window.location.search);
let name=queryString.substring(1).substring(6)
console.log(name.substring(6))
document.getElementById("name").innerHTML='Dear '+ name +'! Welcome to Mega Cart'
//let arr=[0,0,0,0];
localStorage.setItem("clothing",0);
localStorage.setItem("footwear",0);
localStorage.setItem("health",0);
localStorage.setItem("school",0);

function add(src)
{
    //alert("You added item")
    
    //console.log(parseInt(localStorage.getItem(src))+1);
    //localStorage.setItem(src,parseInt(localStorage.getItem(src))+1);
    localStorage.setItem(src,parseInt(localStorage.getItem(src))+1);
    alert("You added " +localStorage.getItem(src)+ src+ " item ")
    //console.log(localStorage.getItem(src));
    
    // if(src==='clothing'){
    //     arr[0]+=1;
    // }
    // else if(src==='footwear')
    // { 
    //     arr[1]+=1;
    // }
    // else if(src==='health')
    // {
    //     arr[2]+=1;
    // }
    // else{
    //     arr[3]+=1
    // }
    

}
function view_Cart()
{
    //let queryString = "?para1=" + arr;
    //window.location.href='./Cart.html'+queryString;
    window.location.href='./Cart.html'
}

