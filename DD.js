var scrl = " Welcome to Nur Azizah's Art...............";
function scrlsts() {
 scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
 document.title = scrl;
 setTimeout("scrlsts()", 300);
}

					 
							function validasi()
						{   
							var nama=document.forms["formulir"]["nama"].value;
							var pass=document.forms["formulir"]["password"].value;
							var jk=document.forms["formulir"]["jk"] .value;
							var color=document.forms["formulir"]["wk"] .value;
							var agama=document.forms["formulir"]["agama"] .value;
							var alamat=document.forms["formulir"]["textarea"] .value;
							var gaje=document.forms["formulir"]["gaje"] .value;
							var angka=document.forms["formulir"]["nilai"] .value;

							if (nama==null || nama=="")
							  {
							  alert("Anda Belum Mengisi nama..");
							  return false;
							  };
							if (pass.length<20)
							  {
							  alert("harus kasih masuk pass min 20 digit pacman emotikon");
							  return false;
							  };
						 alert("Nama\t: "+nama+"\nPassword\t: "+pass+"\nJenis Kelamin\t: " +jk+"\nwarna kulit\t: "+color+"\nAgama\t: "+agama+"\nAngka keberuntungan\t:"+angka+"\nalat geser gaje\t: "+gaje);
				         }
							  