const Input=document.getElementById("input");
const QrCode=document.getElementById("qrcode");

const Generated=(v)=>{

    v.preventDefault();
    clearUI();
    const url_link=document.getElementById("url").value;
    const QrCode_size=document.getElementById('selectSize').value;


// for checking url

if(url_link===''){
    alert("Please enter  URL.");
}else{
  //dispaly loader for 2 sec
    displayLoader();

    setTimeout(()=>{
        hideLoader();
        generateQrCode(url_link,QrCode_size);

        setTimeout(()=>{
          const saveurl=QrCode.querySelector('img').src;
          createSaveButton(saveurl);

    },50)
    },2000)

   }
};
//it generate qr code :qrcode.js
const generateQrCode=(url_link,QrCode_size)=>{
    const qrcode=new QRCode('qrcode',{
        text:url_link,
        width:QrCode_size,
        height:QrCode_size,

    })
};


//clear save btn and qr code
const clearUI = () => {
    QrCode.innerHTML = '';
    const save_Btn = document.getElementById('saveBtn');
    if (save_Btn) {
      save_Btn.remove();
    }
  };

// for Loader
const displayLoader = () => {
    document.getElementById('loader').style.display="block";

  };
  //hiding loader
  const hideLoader=()=>{
    document.getElementById('loader').style.display="none";

  };

  //crate download button
 const createSaveButton=()=>{
    const Customer_link=document.createElement('a');          //<a tag element
    Customer_link.id='saveBtn';
    Customer_link.setAttribute('style','background-color:green; text-decoration:none; color:white; font-weight:bold; margin-bottom:1rem; border:none;padding:7px;outline:none;',);
    Customer_link.href='save';
    Customer_link.download='qrcode';
    Customer_link.innerHTML=' Download ';

    document.getElementById('space').appendChild(Customer_link);

 };
 hideLoader();



Input.addEventListener('submit',Generated);