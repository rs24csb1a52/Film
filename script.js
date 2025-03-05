// create an array to strore movie names
// use an event listenrto add movie to array when the button is clicked
// update the displayed list dynamically
// prevent adding empty inputs
// allow users to remove a moiovie whe they click on it
// add a clear list button to mptyt the array
// display the movie names and total numnber of movies added


let cnt = 0;
const display=()=>{

    document.getElementById("movielist").innerHTML="";
    movieList.forEach(movie=>{
       
        let mov = document.createElement("li");
        let movBtn=document.createElement("button");
        movBtn.textContent="Remove";
        movBtn.id=cnt;
        movBtn.class="remove";
        mov.textContent = movie;
        mov.append(movBtn);
        document.getElementById("movielist").append(mov)
    })
}
let movieList = ["Add a movie"];
display()

const add=()=>{
    let val = document.getElementById("addInp").value
    if (val === "" || val === null) alert("Enter valid movie name");
    else {
        movieList[cnt] = val;
       
 document.getElementById("addInp").value="";
        display();
        console.log(movieList);
        console.log(cnt);
        cnt++;
    }
}
const reset=()=>{
    movieList=["Add a movie"];
    display()
}
document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault();
   add();
});
document.getElementById("reset").addEventListener("click", (e) => {
    e.preventDefault();
   reset();
});

let removeBtns=document.querySelectorAll(".remove");
removeBtns.onclick=(e)=>{
e.preventDefault();l
console.log(e);
// removeBtns.forEach(removeBtn=>{
// removeBtn.onclick=(e)=>{
//     e.preventDefault();
//     let ind=parseInt(removeBtn.id);
// movieList.slice(ind,ind+1);
// }
// });
}
