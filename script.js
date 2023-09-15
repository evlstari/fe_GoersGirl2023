const ObjList = [
      {src : "https://img.icons8.com/3d-fluency/94/alarm-clock--v2.png", ket: "Proses pengerjaan cepat "},
      {src : "https://img.icons8.com/3d-fluency/94/maintenance.png", ket: "Developer siap membantu kapanpun"},
      {src : "https://img.icons8.com/3d-fluency/94/design.png", ket: "Bebas revisi data dan ubah setting sepuasnya"},
      {src : "https://img.icons8.com/3d-fluency/94/music.png", ket: "Bebas memilih backsound untuk keperluan website kamu"},
      {src : "https://img.icons8.com/3d-plastilina/69/upload-to-cloud.png" , ket: "Unlimited hosting"}
    ];
   
    var listGroup = document.getElementById("list-keunggulan");
    for (var i = 0; i < ObjList.length; i++) {
      var itemDiv = document.createElement("li");
      itemDiv.classList.add("image-item");

      var img = document.createElement("img");
      img.src = ObjList[i].src;
      itemDiv.appendChild(img);

      var caption = document.createElement("p");
      caption.classList.add("ket");
      caption.textContent = ObjList[i].ket;
      itemDiv.appendChild(caption);

      listGroup.appendChild(itemDiv);
    }

    // animasi gambar
//     const Animage = document.getElementById('animatedImage');

// Animage.addEventListener('mouseover', () => {
//   Animage.style.transform = 'scale(1.2)';
// });

// Animage.addEventListener('mouseout', () => {
//   Animage.style.transform = 'scale(1)';
// });

var person = [
   {
   nama : "Evi Lestari",
   image: "images/evi.jpeg",
   status : "Team 1",
   hoby: "Tech Enthusiast dan suka jajan :v",
   ig: "https://www.instagram.com/evvlst1/",
   linkedin: "https://www.linkedin.com/in/evi-lestari/",
   desc: "I am a final student at UIN Maulana Malik Ibrahim Malang majoring in Information Engineering with a great passion for a career in the field of Software Engineering, especially Mobile Developer. I am looking for opportunities to contribute directly to company projects to be able to apply my knowledge and focus. Come join Linkedin or contact me at email evlstari99@gmail.com"
 },
   {
   nama : "Rifa Maulida Rahmi",
   image: "images/rifa.png",
   status : "Team 2",
   hoby: "baca novel",
   ig: "https://www.instagram.com/rfrhmii_/",
   linkedin: "https://www.linkedin.com/in/rifa-maulida-rahmi/",
   desc: "Halo..aku Rifa seorang mahasiswi jurusan Sistem Informasi yang sedang tertarik mempelajari front end"
 },
   {
   nama : "Allfela Aisyah P.K.",
   image: "images/fela.png",
   status : "Team 3",
   hoby: "Bermain Gitar",
   ig: "https://www.instagram.com/allfelaapk/",
   linkedin: "https://www.linkedin.com/in/allfelaapk/",
   desc: "Halo.. Aku Allfela Aisyah. Aku merupakan mahasiswi akhir jurusan sistem informasi yang  lagi strugle nih mengerjakan skripsi, kesibukan aku lainnya saat ini sedang freelance di salah satu company sebagai Software Quality Assurance"
 },
   {
   nama : "Rizqi 'Amaliyyah",
   image: "images/Rizqi_foto.jpg",
   status : "Team 4",
   hoby: "Belajar FE",
   ig: "https://www.instagram.com/rzqamlyyh",
   linkedin: "linkedin.com/in/rizqi-amaliyyah-023782220/",
   desc: "Halo halo, Rizqi 'Amaliyyah disini! <br> Lulusan FE aka Fakultas Ekonomi yang coba alih bidang ke FE satunya aka Front-End~ <br> Baru banget mulai jadi masih banyak kurangnya"
 },
  {
   nama : "Alisya Salsabila",
   image: "images/Alisya.png",
   status : "Team 5",
   hoby: "Listening Music and Talk with friends",
   ig: "https://www.instagram.com/Alisyashafa/",
   linkedin: "linkedin.com/in/alisya-salsabila-906623149",
   desc: "Hi! Aku Alisya, Mahasiswi Jurusan Teknologi Informasi, Baru re-learn lagi FE setelah mengembara mencari bagian ITyang cocok sama passion ku"
 },
 {
   nama : "Ayesha Kusdudi",
   image: "images/backgroundimg.jpg",
   status : "Team 6",
   hoby: "Coding",
   ig: "",
   linkedin: "",
   desc: "Hi! Aku Ayesha yang rajin Coding"
 },
   {
   nama : "Adinda Laras",
   image: "images/Zoombackground.jpg",
   status : "Team 7",
   hoby: "Software Engineer",
   ig: "",
   linkedin: "",
   desc: "Hi! Aku Adinda seorang Software Engineer"
 },
 ];

var postCardProfile = document.getElementById("cardProfile");
  
for( var i = 0; i <= person.length; i++) {
  //console.log(postData);
  var card = document.createElement("div");
  card.classList.add("col-lg-4");

  card.innerHTML = `
  <div class="team-9">
  <div class="team-img">
    <img src="${person[i].image}" alt="Team Image" class="img-fluid rounded-circle mb-4" style="width: 300px; height: 300px">
  </div>
  <div class="team-content">
    <h2>${person[i].nama}</h2>
    <h3>${person[i].status}</h3>
  </div>
  <div class="team-overlay">
    <h5>${person[i].hoby}</h5>
     </br>
    <p>${person[i].desc}</p>
  <div class="team-social">
    <a class="social-li" href="${person[i].linkedin}"><i class="fab fa-linkedin-in"></i></a>
   <a class="social-in" href="${person[i].ig}"><i class="fab fa-instagram"></i></a>
  </i></a>
  </div>
  </div>

  </div>`;

  postCardProfile.appendChild(card);
};


//fetch API
//fungsi untuk get data dari api public
function get_random_dog_image(){

  url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display_image(data.message);
    console.log("Data berhasil diambil")
  })
  .catch(function(error){
    console.log("Error: " + error + "Gagal mengambil data dari API");
    
  });


}

function display_image(image_url){
  document.getElementById("imges").src = image_url;
}



