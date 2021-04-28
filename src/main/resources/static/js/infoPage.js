function getfun(){
    console.log("**********");
    var xhr= new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/mainpage",true);
    xhr.onreadystatechange=function (){
        if(this.readyState==4 && this.status==200){
            var data=JSON.parse(xhr.responseText);
            for(var i=0;i<data.length;i++){
                showall(data[i]);
            }
        }
    }
    xhr.send();
}


function showall(list){
    var name=list.name;
    var email=list.email;
    var mobile=list.mobile_no;
    var age= list.age;
    var address = list.address;
    viewdata(name, age, email, address, mobile)
}

function viewdata( name, age, email, address, mobile){
    var table=document.getElementById('table');

    var row= document.createElement('tr');
    var data1= document.createElement('p');
    var data2= document.createElement('p');
    var data3= document.createElement('p');
    var data4= document.createElement('p');
    var data5= document.createElement('p');

    row.setAttribute('class','tableRow');

    data1.innerHTML=name;
    data1.setAttribute('class', 'tableName') ;
    data2.innerHTML=age;
    data2.setAttribute('class', 'tableAge');
    data4.innerHTML=mobile;
    data4.setAttribute('class', 'tableMobile');
    data5.innerHTML=address;
    data5.setAttribute('class', 'tableAddress');
    data3.innerHTML=email;
    data3.setAttribute('class', 'tableEmail');


    var tableName= document.createElement('td');
    var tableAge= document.createElement('td');
    var tableMobile= document.createElement('td');
    var tableAddress= document.createElement('td');
    var tableEmail= document.createElement('td');
    var data6= document.createElement('td');

    data6.innerHTML="<button onclick=del(this) class='delBtn' >Delete</button> <button onclick=editfun(this) class='editBtn' >Edit</button>";

    tableName.appendChild(data1);
    tableAge.appendChild(data2);
    tableMobile.appendChild(data4);
    tableAddress.appendChild(data5);
    tableEmail.appendChild(data3);

    row.appendChild(tableName);
    row.appendChild(tableAge);
    row.appendChild(tableEmail);
    row.appendChild(tableAddress);
    row.appendChild(tableMobile);
    row.appendChild(data6);

    table.appendChild(row);

}

function del(delBtn){
    var email= delBtn.parentNode.parentNode.querySelector("#blockDiv").innerHTML;
    console.log(email);

    var p=delBtn.parentNode.parentNode;
    p.parentNode.removeChild(p);

    var xhr=new XMLHttpRequest()
    xhr.open("DELETE","http://localhost:8080/mainpage",true);
    xhr.onreadystatechange = function (){
        if(this.readyState==4 && this.status==400) {
            console.log("delete method");
        }
    }
    xhr.send(email);


}
function searchFun(){
    var search= document.getElementById('search').value;
    if(search == ""){
        return;
    }
    var Parent = document.getElementById('table');
    while(Parent.hasChildNodes())
    {
        if(Parent.childElementCount ==1){
            break;
        }
        Parent.removeChild(Parent.lastChild);
    }
    var xhr= new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/mainpage/search");
    xhr.onreadystatechange = function (){
        if(this.readyState == 4 && this.status==200){
            var data= JSON.parse(this.responseText);
            for(var i=0;i<data.length;i++){
                showall(data[i]);
            }

        }
        else{
            console.log(this.readyState);
        }
    }
    xhr.send(search);
}