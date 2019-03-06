document.querySelector('#imgFile').addEventListener('change', function () {
    // gets first selected file
    const file = this.files[0];

    // Using FileReader to display the image content
    const reader = new FileReader();
    reader.onload = function (e) {
        document.querySelector('#preview').src = e.target.result;
    };
    reader.readAsDataURL(file);

}, false);

const userInput = () => {
    // Selection of all values
    const name = document.querySelector("input[name='yourName']").value;
    const gender = document.querySelector('input[name="yourGender"]:checked').value;

    const age = document.querySelector("input[name='yourAge']").value;
    const birthdate = document.querySelector("input[name='yourBirthday']").value;
    const color = document.querySelector("input[name='yourColor']").value;
    const country = document.querySelector("select[name='yourHomeCountry']").value;

    const height = document.querySelector("input[name='yourHeight']").value;
    const salary = document.querySelector("input[name='yourIncome']").value;

    const email = document.querySelector("input[name='yourEmail']").value;
    const mobile = document.querySelector("input[name='yourPhoneNumber']").value;
    const adress = document.querySelector("textarea[name='yourAddress']").value;

    let methodEmail = ' - ';
    if (document.getElementById('mail').checked == true) {
        methodEmail = document.querySelector('input[name="chooseEmail"]:checked').value;

    };
    let methodWhatsapp = ' - ';
    if (document.getElementById('whatsapp').checked == true) {
        methodWhatsapp = document.querySelector('input[name="chooseWhatsApp"]:checked').value;
    };

    let methodInApp = ' - ';
    if (document.getElementById('inApp').checked == true) {
        methodInApp = document.querySelector('input[name="chooseInApp"]:checked').value;
    };


    const html = `<label for="photo"><b>Image:</b></label>
                  <img id="preview2" src="http://placehold.it/100" alt="your-face" >
                  <label for="name"><b>Name:</b> ${name}</label>
                  <label for="gender"><b>Gender:</b> ${gender}</label>
                  <label for="age"><b>Age:</b> ${age}</label>
                  <label for="birthdate"><b>Date of Birth:</b> ${birthdate}</label>
                  <label for="color"><b>Favourite color:</b> <span id="color-display"></span>${color}</label>
                  <label for="Country"><b>Country:</b> ${country}</label>
                  <label for="height"><b>Height: </b>${height}</label>
                  <label for="salary"><b>Salary: </b>${salary}</label>
                  <label for="email"><b>Email: </b>${email}</label>
                  <label for="mobile"><b>Mobile: </b>${mobile}</label>
                  <label for="adress"><b>Adress: </b>${adress}</label>
                  <label for="method" class="method"><b>Method to contact you:</b> ${methodEmail}, ${methodWhatsapp}, ${methodInApp}</label>
                  <button type="button" name="close" onclick="closeResults()" id="closeBtn">SEND</button>`;
    document.getElementById('display-results').innerHTML = html;

    // document.getElementById("color-display").style.backgroundColor = color;
    // document.getElementById("result").style.display = "block";


};


//****************************************************************/
// Close button for the pop-up window
//****************************************************************/
const closeResults = () => {
    document.getElementById("result").style.display = "none";
}







