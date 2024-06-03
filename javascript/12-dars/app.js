let a = 8.9
// let b = Math.abs(a)
// let b = Math.floor(a)      // butun qismini oladi ==> orqaga
// let b = Math.ceil(a)       // butun qismini oladi ==> oldinga
// let b = Math.round(a)      // 7.5 ==> 8  ||   7.4 ==> 7
// let numbers = [7, 9, 10, 5, 48, 10, 26, 2683, 184, 1, 38]
// let b = Math.max(...numbers)  // eng kattasini oladi
// let b = Math.min(...numbers)  // eng kichigini oladi
// let b = Math.sqrt(a)          // ildizdan chiqaradi
// let b = Math.pow(4, 5)           // soni darajaga kotaradi =>  4 ni 7 chi darajasi
console.log(b);



const year = document.getElementById("year")
const muchalName = document.querySelector('main h1 span')
const muchalImg = document.querySelector('img')


function findMuchal() {
    if (year.value === "") {
        alert("yilingizni kiriting")
    }

    let muchal = (year.value % 12) + 1

    switch (muchal) {
        case 1:
            muchalName.innerHTML = "Maymun"
            muchalImg.src = "https://hordiq.uz/wp-content/uploads/2021/03/160107100400-monkey-selfie.jpg"
            break;
        case 2:
            muchalName.innerHTML = "Tovuq"
            muchalImg.src = "https://i0.wp.com/7kyr.ru/wp-content/uploads/2016/02/Hen-eggs_1370969c1.jpg"
            break;
        case 3:
            muchalName.innerHTML = "IT"
            muchalImg.src = "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
            break;
        case 4:
            muchalName.innerHTML = "To'ng'iz"
            muchalImg.src = "https://vatanda.com/uploads/posts/2018-06/1529353670_tongiz.jpg"
            break;
        case 5:
            console.log("sichqon");
            muchalName.innerHTML = "Sichqon"
            muchalImg.src = "https://uzreport.news/fotobank/image/e8cd9a253cb735e502ae9de9ee934763.jpeg"
            break;
        case 6:
            muchalImg.src = "https://uzsmart.uz/savol-javob/img/xokiz-sigir-muchali-haqida.jpg"
            muchalName.innerHTML = "Sigir"
            break;
        case 7:
            muchalImg.src = "https://zamin.uz/uploads/posts/2021-12/1639110361_01.jpg"
            muchalName.innerHTML = "Yo'lbars"

            break;
        case 8:
            muchalImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9pw2vmJLX1Y9XnKuAd0XpY720YtjZE7DvfQqXRl1sqHRuwfy5xgvvIc4vtcVcAjpDDE&usqp=CAU"
            muchalName.innerHTML = "Quyon"

            break;
        case 9:
            muchalImg.src = "https://proc.uz/storage/questions/May2022/70p22RC41z9IuE5tsUMl.jpg"
            muchalName.innerHTML = "Baliq"

            break;
        case 10:
            muchalImg.src = "https://xs.uz/upload/post/2022/4/14/8c8f06a1c5229f30c094fca07dab3bdb0414.jpg"

            muchalName.innerHTML = "Ilon"

            break;
        case 11:
            console.log("ot");
            muchalName.innerHTML = "Ot"

            break;
        case 12:
            console.log("qoy");
            muchalName.innerHTML = "Qo'y"

            break;

    }

}