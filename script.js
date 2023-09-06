console.log('Started');
const form = document.querySelector('#A_C_F');
const human_code = document.querySelector('#human-code');
const password = document.querySelector('#password');
let count_1 = 0;
let count_2 = 0;
let count_data1 = 0;
let count_data2 = 0;

// get inputs from user in html

// database
user_data = [{name:'siva',password:'20903065'},{name:'josh',password:'33445566'}];
// check if i click submit
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateinputs();      // does not submit the form

    // declaring
    const humancodeval = human_code.value.trim();
    const passwordval = password.value.trim();


    if(count_1+count_2 == 2){
    console.log("redirecting successsful");
    // checking system
    for(let i = 0;i<user_data.length;i++){
     if(humancodeval === user_data[i].name){
            count_data1 += 1;
      }
     console.log("password checking....");
     if(passwordval === user_data[i].password){
            count_data2 += 1;
} }
     if(count_data1+count_data2 >1){
         window.location.replace("homepage.html");
     }
     else if(count_data1 == 0){
        alert("Humancode not found");
     }
     else if(count_data2 == 0){
        alert("Incorrect password");
     }
     else{
        alert("Invalid Input");
     }
}
else{
    console.log("unable to redirect");
}
})

function validateinputs(){  // to filter the unwanted spaces in user input
    const humancode = human_code.value.trim();
    const pass_word = password.value.trim();
    // humancode checking
    if(humancode === ''){
        seterror(human_code,"Humancode is required");
    }
    else{
        setsuccess(human_code);
        count_1 = 1;
    }

    // password checking
    if(pass_word === ''){
        seterror(password,"password is required");
    }
    else if(pass_word.length !== 8){
        console.log(pass_word.length);
        seterror(password,"password must contain 8 characters");
    } 
    else{
        setsuccess(password);
        count_2 = 1;
    }

}

function seterror(element,message){
    const inputfield = element.parentElement;   // find the parent 
    const errorclass = inputfield.querySelector('.error'); // using parent find error class
    errorclass.innerText = message;         // error class passing text
    inputfield.classList.add('error');      // Add border red,so only creating error class
   // inputfiled.classList.remove('success'); //remove succcess class to overwrite error class
}

function setsuccess(element){
    const inputfield = element.parentElement;   
    const errorclass = inputfield.querySelector('.error');
    errorclass.innerText = '';        
    inputfield.classList.add('success');      // opposite
    //inputfiled.classList.remove('error');

}



