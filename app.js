// clear input function
function clearInput(){
     document.getElementById('name').value = '';
 document.getElementById('phone').value= '';
document.getElementById('dressType').value= '';
 document.getElementById('length').value;
 document.getElementById('shoulder').value= '';
 document.getElementById('chest').value= '';
 document.getElementById('waist').value= '';
document.getElementById('hip').value= '';
 document.getElementById('arm').value= '';
 document.getElementById('neck').value= '';
 document.getElementById('notes').value= '';
    
}


// function submitFun(){
//    let name = document.getElementById('name').value;
// let phone = document.getElementById('phone').value;
// let dressType = document.getElementById('dressType').value;
// let length = document.getElementById('length').value;
// let shoulder = document.getElementById('shoulder').value;
// let chest = document.getElementById('chest').value;
// let waist = document.getElementById('waist').value;
// let hip = document.getElementById('hip').value;
// let arm = document.getElementById('arm').value;
// let neck = document.getElementById('neck').value;
// let notes = document.getElementById('notes').value;
// console.log({name,phone,dressType,length,shoulder,chest,waist,hip,arm,neck,notes})
// // clearInput function
// clearInput();
// // storing data in an object 
// const dataObject = {
//     id : phone,
//     name : name,
//     dressType : dressType,
//     length : length,
//     shoulder : shoulder,
//     chest : chest,
//     waist : waist,
//     hip : hip,
//     arm : arm,
//     neck : neck,
//     notes : notes
// }
// console.log(dataObject)
// let dataObjectToString = JSON.stringify(dataObject);

// // check in local storage that custome already is saved?
// let customer = localStorage.getItem(('customer') || '[]');
// let exist = customer.some((c)=>{
//     return c.id === phone
// })
// if(exist){
//     alert('customer already existed');
//     return
// }
// customer.push(dataObject);
// localStorage.setItem('customer',JSON.stringify(customer))
// alert('customer added successfully')
// }

function submitFun() {
    // 1️⃣ Get values
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let dressType = document.getElementById('dressType').value;
    let length = document.getElementById('length').value;
    let shoulder = document.getElementById('shoulder').value;
    let chest = document.getElementById('chest').value;
    let waist = document.getElementById('waist').value;
    let hip = document.getElementById('hip').value;
    let arm = document.getElementById('arm').value;
    let neck = document.getElementById('neck').value;
    let notes = document.getElementById('notes').value;

    // 2️⃣ Clear input fields
    clearInput();

    // 3️⃣ Create a customer object
    const dataObject = {
        id: phone,
        name,
        dressType,
        length,
        shoulder,
        chest,
        waist,
        hip,
        arm,
        neck,
        notes
    };

    // 4️⃣ Get existing customers from localStorage
    let customers = JSON.parse(localStorage.getItem('customers') || '[]');

    // 5️⃣ Check if phone already exists
    const exist = customers.some(c => c.id === phone);
    if (exist) {
        alert('⚠️ Customer already exists!');
        return; // Stop execution
    }

    // 6️⃣ Add new customer to array
    customers.push(dataObject);

    // 7️⃣ Save back to localStorage
    localStorage.setItem('customers', JSON.stringify(customers));

    alert('✅ Customer added successfully!');
}


// // get data function 
// let search = '03347257178'
// function showData(){

//     let get = localStorage.getItem('customers');
//     let jsonGet = JSON.parse(get);
//     console.log(jsonGet)
    
//     let d = jsonGet.find((a)=>{
//         return a.id == search
//     })
//     console.log(d)
//     if(d){
//         console.log('user registered')
//     }
//     else{
//         console.log('user not registered')
//     }
// }