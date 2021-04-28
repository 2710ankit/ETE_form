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
        xhr1.open("POST", "https://chitkaraetebackend.herokuapp.com/mainpage", true);
        xhr1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == 'false') {
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





