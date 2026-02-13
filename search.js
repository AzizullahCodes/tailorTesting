// get data function 
/* let search = '03347257178'
function showData(){

    let get = localStorage.getItem('customers');
    let jsonGet = JSON.parse(get);
    console.log(jsonGet)
    
    let d = jsonGet.find((a)=>{
        return a.id == search
    })
    console.log(d)
    if(d){
        console.log('user registered')
    }
    else{
        console.log('user not registered')
    }
}
 */

function showData(){
    let getId = document.getElementById('searchPhone').value;
    let resultDiv = document.getElementById('result');
    console.log(getId)
    // see in local storage customers
    let get = localStorage.getItem('customers');
    let getJson = JSON.parse(get || '[]');
    // now we run find on object to find search data 
    let data = getJson.find((user)=>{
        return user.id == getId
    })
    // apply condition if data existed
    if(data){
        // console.log('data is')
        // console.log(data)
        resultDiv.innerHTML = `
            <div class="customer-card">
                <h3>Customer Details</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Phone:</strong> ${data.id}</p>
                <p><strong>Dress Type:</strong> ${data.dressType}</p>
                <p><strong>Length:</strong> ${data.length}</p>
                <p><strong>Shoulder:</strong> ${data.shoulder}</p>
                <p><strong>Chest:</strong> ${data.chest}</p>
                <p><strong>Waist:</strong> ${data.waist}</p>
                <p><strong>Hip:</strong> ${data.hip}</p>
                <p><strong>Arm:</strong> ${data.arm}</p>
                <p><strong>Neck:</strong> ${data.neck}</p>
                <p><strong>Notes:</strong> ${data.notes}</p>
            </div>
        `;
    }
    else{
        console.log('data no present')

    }
}