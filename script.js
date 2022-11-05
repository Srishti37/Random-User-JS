const  users = [
    {img:"img1.jpeg", name:"Loki", msg:"I am loki of Asgard!!"},
    {img:"img2.png", name:"Iron Man", msg:"Love you 3000"},
    {img:"img3.jpg", name:"Thor", msg:"God of Thunder"},
    {img:"img4.png", name:"Hulk", msg:"Punk God!!"},
];

let btn=document.getElementById("btn");

function getUser(){
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2= Math.floor(Math.random() * 16777215).toString(16);
    let index=Math.floor(Math.random()*4);
    let container=document.getElementById("container");
    container.innerHTML=`<legend> <img src="${users[index].img}"> </legend>
                          <h3>${users[index].name}</h3>
                            <p>${users[index].msg}</p> `
    container.style.backgroundColor = `#${randomColor}`; 
    btn.style.backgroundColor = `#${randomColor}`; 
    document.body.style.backgroundColor = `#${randomColor1}`; 
};

window.addEventListener('load',getUser);
btn.addEventListener('click',getUser);



