var userinput=document.getElementById("iteminput");
var list1=document.getElementById("list");
function addtheitem(){
      var value1 = userinput.value.trim();
      if(value1=="")
      {
        alert("please enter the text");
      }
      else
      {
        var listitem=document.createElement("li");
        listitem.textContent=value1;
      list1.appendChild(listitem);
      var deleteicon=document.createElement("span");
      deleteicon.className="delete";
      deleteicon.innerHTML="&#x2716";     
      listitem.appendChild(deleteicon);
      }
      userinput.value = ""; 
      savedata();
}
list1.addEventListener("click",elementclicked);
function elementclicked(event)
{
  if(event.target.matches("li"))
  {
    if(event.target.classList.contains("check"))
    {
      event.target.classList.remove("check");
    }
    else
     event.target.classList.add("check");
  }
  else
  if(event.target.matches("span"))
  {
     var parentlist=event.target.parentElement;
     if(parentlist)
     {
      parentlist.remove();
     }
  }
  savedata();
}
function savedata(){
  localStorage.setItem("data",list1.innerHTML);
}
function showtask(){
  list1.innerHTML=localStorage.getItem("data");
}
showtask();