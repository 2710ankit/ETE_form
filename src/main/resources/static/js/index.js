
function getfun(){
    console.log("*****");
    var xhr= new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/mainpage",true);
    xhr.onreadystatechange=function (){
         if(this.readyState==4 && this.status==200){
            var data=JSON.parse(xhr.responseText);
            for(var i=0;i<data.length;i++){
                console.log(data[i]);
                showall(data[i]);
             }
         }
    }
    xhr.send();
}

function fun(){
    var name1=document.getElementById('name').value;
    var mobile=document.getElementById('mobileNumber').value;
    var email=document.getElementById('email').value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;
    if(name1 == "" || mobile == "" || email=="" || address=="" || age==""){
        alert("All fields are mandatory");
        return;
    }
    var xhr1 = new XMLHttpRequest();
        xhr1.open("POST", "http://localhost:8080/mainpage", true);
        xhr1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == 'false') {
                    viewdata(name1, age, email, address, mobile);
                }
                else {
                    alert("this email is already taken");
                }

            }
        }
        var json = {
            "name": name1,
            "age": age,
            "email": email,
            "address": address,
            "mobile_no": mobile,
        }
        xhr1.send(JSON.stringify(json));


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
        var data1= document.createElement('td');
        var data2= document.createElement('td');
        var data3= document.createElement('td');
        var data4= document.createElement('td');
        var data5= document.createElement('td');
        var data6= document.createElement('td');
        var div=document.createElement('div');

        div.setAttribute("id","blockDiv");
        row.setAttribute('class','tableRow');
        div.innerHTML=email;
        data1.innerHTML=name;
        data2.innerHTML=age;
        data4.innerHTML=mobile;
        data5.innerHTML=address;
        data3.appendChild(div);
        data6.innerHTML="<button onclick=del(this) class='delBtn' >Delete</button>";

        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        row.appendChild(data4);
        row.appendChild(data5);
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