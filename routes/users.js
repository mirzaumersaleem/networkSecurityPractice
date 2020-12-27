var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.get('/getAreaNames', function (req, res, next) {
   let area =  [
        {
            "_id": "5e062857ad5c9834732af44f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abbasi Shaheed"
        },
        {
            "_id": "5e062857ad5c9834732af450",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abdul Rehman Goth"
        },
        {
            "_id": "5e062857ad5c9834732af452",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abidabad"
        },
        {
            "_id": "5e062857ad5c9834732af44e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abbas Town"
        },
        {
            "_id": "5e062857ad5c9834732af453",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abu Zar Ghaffari"
        },
        {
            "_id": "5e062857ad5c9834732af454",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abyssinia Lines"
        },
        {
            "_id": "5e062857ad5c9834732af451",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Abdullah Goth"
        },
        {
            "_id": "5e062857ad5c9834732af456",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Agra Taj Colony"
        },
        {
            "_id": "5e062857ad5c9834732af455",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Afridi Colony"
        },
        {
            "_id": "5e062857ad5c9834732af459",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Akhtar Colony"
        },
        {
            "_id": "5e062857ad5c9834732af458",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Aisha Manzil"
        },
        {
            "_id": "5e062857ad5c9834732af45a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Al-Falah Society"
        },
        {
            "_id": "5e062857ad5c9834732af45f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Awami Colony"
        },
        {
            "_id": "5e062857ad5c9834732af45c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Allama Iqbal Colony"
        },
        {
            "_id": "5e062857ad5c9834732af457",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ahsanabad"
        },
        {
            "_id": "5e062857ad5c9834732af45b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Allama Banuri Town"
        },
        {
            "_id": "5e062857ad5c9834732af45d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ancholi"
        },
        {
            "_id": "5e062857ad5c9834732af460",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Azam Basti"
        },
        {
            "_id": "5e062857ad5c9834732af461",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Azizabad"
        },
        {
            "_id": "5e062857ad5c9834732af464",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bahadurabad"
        },
        {
            "_id": "5e062857ad5c9834732af462",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baba and Bhit Islands"
        },
        {
            "_id": "5e062857ad5c9834732af469",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Banaras Colony"
        },
        {
            "_id": "5e062857ad5c9834732af45e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Arbian"
        },
        {
            "_id": "5e062857ad5c9834732af463",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baghdadi."
        },
        {
            "_id": "5e062857ad5c9834732af465",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baldia Colony"
        },
        {
            "_id": "5e062857ad5c9834732af466",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baloch Colony"
        },
        {
            "_id": "5e062857ad5c9834732af467",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baloch Goth"
        },
        {
            "_id": "5e062857ad5c9834732af46e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bhittai Colony"
        },
        {
            "_id": "5e062857ad5c9834732af468",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baltistani Society"
        },
        {
            "_id": "5e062857ad5c9834732af46c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bath Island"
        },
        {
            "_id": "5e062857ad5c9834732af46a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bandhani Colony"
        },
        {
            "_id": "5e062857ad5c9834732af473",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bismillah Chowk"
        },
        {
            "_id": "5e062857ad5c9834732af46b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Baradari, Pakistan"
        },
        {
            "_id": "5e062857ad5c9834732af470",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bhutto Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af478",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Cattle Colony"
        },
        {
            "_id": "5e062857ad5c9834732af46f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bhutta Village"
        },
        {
            "_id": "5e062857ad5c9834732af46d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bhawani Chali"
        },
        {
            "_id": "5e062857ad5c9834732af474",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Buffer Zone II"
        },
        {
            "_id": "5e062857ad5c9834732af475",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Buffer Zone."
        },
        {
            "_id": "5e062857ad5c9834732af471",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bihar Colony"
        },
        {
            "_id": "5e062857ad5c9834732af476",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Burmee Colony"
        },
        {
            "_id": "5e062857ad5c9834732af472",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bilal Colony"
        },
        {
            "_id": "5e062857ad5c9834732af479",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Central Jacob Lines"
        },
        {
            "_id": "5e062857ad5c9834732af477",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Catholic Colony"
        },
        {
            "_id": "5e062857ad5c9834732af47a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Chakiwara"
        },
        {
            "_id": "5e062857ad5c9834732af47d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Chisti Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af47b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Chakra Goth"
        },
        {
            "_id": "5e062857ad5c9834732af47f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Cincinnatus Town"
        },
        {
            "_id": "5e062857ad5c9834732af47e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Chittagong Colony"
        },
        {
            "_id": "5e062857ad5c9834732af480",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "City Railway Colony"
        },
        {
            "_id": "5e062857ad5c9834732af47c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Chanesar Goth"
        },
        {
            "_id": "5e062857ad5c9834732af482",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Clifton"
        },
        {
            "_id": "5e062857ad5c9834732af484",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Darakhshan"
        },
        {
            "_id": "5e062857ad5c9834732af485",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Darsano Chana"
        },
        {
            "_id": "5e062857ad5c9834732af487",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Daryaabad"
        },
        {
            "_id": "5e062857ad5c9834732af481",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Civil Line"
        },
        {
            "_id": "5e062857ad5c9834732af489",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Dastagir Colony"
        },
        {
            "_id": "5e062857ad5c9834732af483",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Dak Khana"
        },
        {
            "_id": "5e062857ad5c9834732af486",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Darvesh Goth"
        },
        {
            "_id": "5e062857ad5c9834732af48a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Data Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af488",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Dastagir"
        },
        {
            "_id": "5e062857ad5c9834732af48c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "DHA"
        },
        {
            "_id": "5e062857ad5c9834732af48b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Dawood Chowrangi"
        },
        {
            "_id": "5e062857ad5c9834732af48d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Defence View"
        },
        {
            "_id": "5e062857ad5c9834732af491",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Dhoraji Colony"
        },
        {
            "_id": "5e062857ad5c9834732af48e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Delhi Colony"
        },
        {
            "_id": "5e062857ad5c9834732af48f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Delhi Mercantile Society"
        },
        {
            "_id": "5e062857ad5c9834732af496",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Farooq-e-Azam"
        },
        {
            "_id": "5e062857ad5c9834732af493",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Eissa Nagri"
        },
        {
            "_id": "5e062857ad5c9834732af490",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "DHA City"
        },
        {
            "_id": "5e062857ad5c9834732af494",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "F.B.Area (Gulberg Town)."
        },
        {
            "_id": "5e062857ad5c9834732af492",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Drigh Colony"
        },
        {
            "_id": "5e062857ad5c9834732af499",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Firdous Colony"
        },
        {
            "_id": "5e062857ad5c9834732af495",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Faisal Colony"
        },
        {
            "_id": "5e062857ad5c9834732af498",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Federal B. Area"
        },
        {
            "_id": "5e062857ad5c9834732af49b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Frontier Colony"
        },
        {
            "_id": "5e062857ad5c9834732af49c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gabo Pat"
        },
        {
            "_id": "5e062857ad5c9834732af49e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gadap"
        },
        {
            "_id": "5e062857ad5c9834732af497",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Fatima Jinnah Colony"
        },
        {
            "_id": "5e062857ad5c9834732af49d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gabol Colony"
        },
        {
            "_id": "5e062857ad5c9834732af49a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Firozabad"
        },
        {
            "_id": "5e062857ad5c9834732af49f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Garden East"
        },
        {
            "_id": "5e062857ad5c9834732af4a3",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ghanchi Para"
        },
        {
            "_id": "5e062857ad5c9834732af4a0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Garden West"
        },
        {
            "_id": "5e062857ad5c9834732af4a1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Garden."
        },
        {
            "_id": "5e062857ad5c9834732af4a5",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ghausia Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4a6",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ghazi Brohi Goth"
        },
        {
            "_id": "5e062857ad5c9834732af4a8",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gizri"
        },
        {
            "_id": "5e062857ad5c9834732af4a2",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gazdarabad"
        },
        {
            "_id": "5e062857ad5c9834732af4aa",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gole Market Nazimabad"
        },
        {
            "_id": "5e062857ad5c9834732af4a9",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Godhra."
        },
        {
            "_id": "5e062857ad5c9834732af4a4",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gharibabad"
        },
        {
            "_id": "5e062857ad5c9834732af4ab",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Golimar."
        },
        {
            "_id": "5e062857ad5c9834732af4a7",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ghaziabad."
        },
        {
            "_id": "5e062857ad5c9834732af4ae",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Haji Behram"
        },
        {
            "_id": "5e062857ad5c9834732af4ad",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Ghulam Mohammad"
        },
        {
            "_id": "5e062857ad5c9834732af4ac",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Faqir Mohammad"
        },
        {
            "_id": "5e062857ad5c9834732af4b2",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Mauladad"
        },
        {
            "_id": "5e062857ad5c9834732af4b5",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Green Park City"
        },
        {
            "_id": "5e062857ad5c9834732af4b3",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Mohammad Ali"
        },
        {
            "_id": "5e062857ad5c9834732af4b0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Haji Salar"
        },
        {
            "_id": "5e062857ad5c9834732af4b7",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gujro"
        },
        {
            "_id": "5e062857ad5c9834732af4b1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Lashkari"
        },
        {
            "_id": "5e062857ad5c9834732af4bc",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Ghazi"
        },
        {
            "_id": "5e062857ad5c9834732af4b6",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gujrat Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4af",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Haji Jumma Khan"
        },
        {
            "_id": "5e062857ad5c9834732af4ba",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulistan-e-Zafar"
        },
        {
            "_id": "5e062857ad5c9834732af4b8",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulbahar"
        },
        {
            "_id": "5e062857ad5c9834732af4b4",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Goth Shaikhan"
        },
        {
            "_id": "5e062857ad5c9834732af4c1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Sheraz"
        },
        {
            "_id": "5e062857ad5c9834732af4bf",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Osman"
        },
        {
            "_id": "5e062857ad5c9834732af4be",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Maymar"
        },
        {
            "_id": "5e062857ad5c9834732af4b9",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulistan-e-Johar"
        },
        {
            "_id": "5e062857ad5c9834732af4bd",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Iqbal"
        },
        {
            "_id": "5e062857ad5c9834732af4c3",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulzar Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4c6",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Haji Camp."
        },
        {
            "_id": "5e062857ad5c9834732af4bb",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Amna"
        },
        {
            "_id": "5e062857ad5c9834732af4c2",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Sikandarabad"
        },
        {
            "_id": "5e062857ad5c9834732af4c0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan-e-Saeed"
        },
        {
            "_id": "5e062857ad5c9834732af4c8",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hanifabad"
        },
        {
            "_id": "5e062857ad5c9834732af4c5",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Haji Ali Goth"
        },
        {
            "_id": "5e062857ad5c9834732af4c9",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Haroonabad"
        },
        {
            "_id": "5e062857ad5c9834732af4c7",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hakim Ahsan"
        },
        {
            "_id": "5e062857ad5c9834732af4ca",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Haryana Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4cd",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hijrat Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4cb",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hasrat Mohani Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4ce",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hundred Quarters"
        },
        {
            "_id": "5e062857ad5c9834732af4cc",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hawke's Bay Town"
        },
        {
            "_id": "5e062857ad5c9834732af4d0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hussainabad."
        },
        {
            "_id": "5e062857ad5c9834732af4d2",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hyderi"
        },
        {
            "_id": "5e062857ad5c9834732af4d1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hyderabad Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4cf",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hussain D'Silva Town"
        },
        {
            "_id": "5e062857ad5c9834732af4c4",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulzar-e-Hijri"
        },
        {
            "_id": "5e062857ad5c9834732af4d5",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Islam Pura"
        },
        {
            "_id": "5e062857ad5c9834732af4d3",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ibrahim Hyderi"
        },
        {
            "_id": "5e062857ad5c9834732af4da",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Jahanabad"
        },
        {
            "_id": "5e062857ad5c9834732af4d4",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Iqbal Baloch Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4d8",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ittehad Town"
        },
        {
            "_id": "5e062857ad5c9834732af4d6",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Islamia Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4df",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Jut Line"
        },
        {
            "_id": "5e062857ad5c9834732af4db",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Jalalabad"
        },
        {
            "_id": "5e062857ad5c9834732af4dc",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Jamali Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4d9",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Jafar-e-Tayyar"
        },
        {
            "_id": "5e062857ad5c9834732af4dd",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Jamshed Quarters"
        },
        {
            "_id": "5e062857ad5c9834732af4d7",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Islamnagar"
        },
        {
            "_id": "5e062857ad5c9834732af4e1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kakapir"
        },
        {
            "_id": "5e062857ad5c9834732af4e4",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Karimabad"
        },
        {
            "_id": "5e062857ad5c9834732af4e2",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kala Board"
        },
        {
            "_id": "5e062857ad5c9834732af4de",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Junaid Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af4e7",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Khamiso Goth"
        },
        {
            "_id": "5e062857ad5c9834732af4e6",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "KESC Society"
        },
        {
            "_id": "5e062857ad5c9834732af4e9",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kharadar"
        },
        {
            "_id": "5e062857ad5c9834732af4e0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "KAECHS"
        },
        {
            "_id": "5e062857ad5c9834732af4eb",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Khiprianwala Island"
        },
        {
            "_id": "5e062857ad5c9834732af4e5",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kehkashan"
        },
        {
            "_id": "5e062857ad5c9834732af4ec",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Khoso Goth"
        },
        {
            "_id": "5e062857ad5c9834732af4e8",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Khandu Goth"
        },
        {
            "_id": "5e062857ad5c9834732af4ee",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kiamari"
        },
        {
            "_id": "5e062857ad5c9834732af4ea",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Khawaja Ajmeer Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4e3",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Karachi Creek Marina"
        },
        {
            "_id": "5e062857ad5c9834732af4f1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Korangi"
        },
        {
            "_id": "5e062857ad5c9834732af4f0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kokan Cooperative Housing Society"
        },
        {
            "_id": "5e062857ad5c9834732af4f3",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Korangi Sector 33"
        },
        {
            "_id": "5e062857ad5c9834732af4ef",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kokan Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4f8",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Liaquatabad"
        },
        {
            "_id": "5e062857ad5c9834732af4f5",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Landhi"
        },
        {
            "_id": "5e062857ad5c9834732af4f2",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Korangi J Area"
        },
        {
            "_id": "5e062857ad5c9834732af4f4",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "KPT Officers Society"
        },
        {
            "_id": "5e062857ad5c9834732af4f6",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Landhi Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4ed",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Khuda Ki Basti"
        },
        {
            "_id": "5e062857ad5c9834732af4fa",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Machar Colony"
        },
        {
            "_id": "5e062857ad5c9834732af4f9",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Lyari"
        },
        {
            "_id": "5e062857ad5c9834732af4fb",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Madina Colony, New Karachi Town"
        },
        {
            "_id": "5e062857ad5c9834732af4fd",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Madrasi Para"
        },
        {
            "_id": "5e062857ad5c9834732af4f7",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Lasbela"
        },
        {
            "_id": "5e062857ad5c9834732af4ff",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Manghopir"
        },
        {
            "_id": "5e062857ad5c9834732af4fe",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mahmudabad."
        },
        {
            "_id": "5e062857ad5c9834732af4fc",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Madina Colony, Orangi Town"
        },
        {
            "_id": "5e062857ad5c9834732af502",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Maripur"
        },
        {
            "_id": "5e062857ad5c9834732af504",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Maymarabad"
        },
        {
            "_id": "5e062857ad5c9834732af503",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Masroor Colony"
        },
        {
            "_id": "5e062857ad5c9834732af500",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Manora."
        },
        {
            "_id": "5e062857ad5c9834732af507",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Metroville Colony"
        },
        {
            "_id": "5e062857ad5c9834732af508",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Millat Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af509",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mithadar"
        },
        {
            "_id": "5e062857ad5c9834732af50c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mominabad"
        },
        {
            "_id": "5e062857ad5c9834732af505",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mehran Town"
        },
        {
            "_id": "5e062857ad5c9834732af501",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Manzoor Colony"
        },
        {
            "_id": "5e062857ad5c9834732af511",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mujahid Colony"
        },
        {
            "_id": "5e062857ad5c9834732af50d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Moosa Lane"
        },
        {
            "_id": "5e062857ad5c9834732af50a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Model Colony."
        },
        {
            "_id": "5e062857ad5c9834732af506",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Metroville"
        },
        {
            "_id": "5e062857ad5c9834732af50e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Moria Khan Goth"
        },
        {
            "_id": "5e062857ad5c9834732af50f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mubarak Goth"
        },
        {
            "_id": "5e062857ad5c9834732af512",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mujahidabad"
        },
        {
            "_id": "5e062857ad5c9834732af516",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Muslim Mujahid Colony"
        },
        {
            "_id": "5e062857ad5c9834732af513",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mula Essa Goth"
        },
        {
            "_id": "5e062857ad5c9834732af51b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Muzafarabad."
        },
        {
            "_id": "5e062857ad5c9834732af50b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mohammad Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af514",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Murad Memon Goth"
        },
        {
            "_id": "5e062857ad5c9834732af517",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Muslim Town."
        },
        {
            "_id": "5e062857ad5c9834732af518",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Muslimabad"
        },
        {
            "_id": "5e062857ad5c9834732af510",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Muhajir Camp"
        },
        {
            "_id": "5e062857ad5c9834732af51c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Muzaffarabad"
        },
        {
            "_id": "5e062857ad5c9834732af520",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Narayan Pura"
        },
        {
            "_id": "5e062857ad5c9834732af519",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mustafa Taj Colony"
        },
        {
            "_id": "5e062857ad5c9834732af515",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Musa Colony"
        },
        {
            "_id": "5e062857ad5c9834732af51d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nafeesabad"
        },
        {
            "_id": "5e062857ad5c9834732af51e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nai Abadi"
        },
        {
            "_id": "5e062857ad5c9834732af522",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nasir Colony"
        },
        {
            "_id": "5e062857ad5c9834732af525",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nawabad"
        },
        {
            "_id": "5e062857ad5c9834732af521",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Naseerabad."
        },
        {
            "_id": "5e062857ad5c9834732af51a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mustufa Colony"
        },
        {
            "_id": "5e062857ad5c9834732af51f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nanak Wara"
        },
        {
            "_id": "5e062857ad5c9834732af526",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Naya Nazimabad"
        },
        {
            "_id": "5e062857ad5c9834732af527",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nazimabad"
        },
        {
            "_id": "5e062857ad5c9834732af52a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nursery."
        },
        {
            "_id": "5e062857ad5c9834732af528",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "North Karachi"
        },
        {
            "_id": "5e062857ad5c9834732af52f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Pakistan Quarters"
        },
        {
            "_id": "5e062857ad5c9834732af523",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Natha Khan Goth"
        },
        {
            "_id": "5e062857ad5c9834732af524",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Naval Colony"
        },
        {
            "_id": "5e062857ad5c9834732af52d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Pahar Ganj."
        },
        {
            "_id": "5e062857ad5c9834732af52c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Old Golimar"
        },
        {
            "_id": "5e062857ad5c9834732af534",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Pehlwan Goth"
        },
        {
            "_id": "5e062857ad5c9834732af530",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Paposh Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af531",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Patel Para"
        },
        {
            "_id": "5e062857ad5c9834732af532",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "PECHS"
        },
        {
            "_id": "5e062857ad5c9834732af529",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "North Nazimabad"
        },
        {
            "_id": "5e062857ad5c9834732af52b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Nusrat Bhutto Colony"
        },
        {
            "_id": "5e062857ad5c9834732af535",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "PIA Township"
        },
        {
            "_id": "5e062857ad5c9834732af537",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Punjab Town"
        },
        {
            "_id": "5e062857ad5c9834732af52e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Pak Sadat Colony"
        },
        {
            "_id": "5e062857ad5c9834732af536",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Pir Ilahi Buksh Colony"
        },
        {
            "_id": "5e062857ad5c9834732af53b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Qasimabad."
        },
        {
            "_id": "5e062857ad5c9834732af539",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Qaim Khani"
        },
        {
            "_id": "5e062857ad5c9834732af53a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Qasba Colony"
        },
        {
            "_id": "5e062857ad5c9834732af533",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "PECHS-II"
        },
        {
            "_id": "5e062857ad5c9834732af53c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Qayyumabad"
        },
        {
            "_id": "5e062857ad5c9834732af53e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rafah-e-Aam Society"
        },
        {
            "_id": "5e062857ad5c9834732af53f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Ragiwara"
        },
        {
            "_id": "5e062857ad5c9834732af538",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Qaidabad"
        },
        {
            "_id": "5e062857ad5c9834732af540",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rais Goth"
        },
        {
            "_id": "5e062857ad5c9834732af541",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Raita Plot"
        },
        {
            "_id": "5e062857ad5c9834732af544",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rehri"
        },
        {
            "_id": "5e062857ad5c9834732af53d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rabia City"
        },
        {
            "_id": "5e062857ad5c9834732af543",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rehman Goth"
        },
        {
            "_id": "5e062857ad5c9834732af548",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sachal Goth"
        },
        {
            "_id": "5e062857ad5c9834732af546",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rizvia Society"
        },
        {
            "_id": "5e062857ad5c9834732af54d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Salehabad, Pakistan"
        },
        {
            "_id": "5e062857ad5c9834732af542",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Razzaqabad"
        },
        {
            "_id": "5e062857ad5c9834732af549",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Saddar"
        },
        {
            "_id": "5e062857ad5c9834732af545",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Rehri Goth"
        },
        {
            "_id": "5e062857ad5c9834732af54a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Saddar Town"
        },
        {
            "_id": "5e062857ad5c9834732af54b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Saeedabad."
        },
        {
            "_id": "5e062857ad5c9834732af552",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shafiq Mill Colony"
        },
        {
            "_id": "5e062857ad5c9834732af547",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Saadi Town"
        },
        {
            "_id": "5e062857ad5c9834732af54e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Samanabad"
        },
        {
            "_id": "5e062857ad5c9834732af550",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Saudabad"
        },
        {
            "_id": "5e062857ad5c9834732af555",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shah Faisal Colony"
        },
        {
            "_id": "5e062857ad5c9834732af54f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sango Lane"
        },
        {
            "_id": "5e062857ad5c9834732af54c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Safoora Goth"
        },
        {
            "_id": "5e062857ad5c9834732af553",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shah Baig Line"
        },
        {
            "_id": "5e062857ad5c9834732af557",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shah Nawaz Bhutto Colony"
        },
        {
            "_id": "5e062857ad5c9834732af554",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shah Bhitaie Town"
        },
        {
            "_id": "5e062857ad5c9834732af551",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shadman."
        },
        {
            "_id": "5e062857ad5c9834732af558",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shah Wali Ullah Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af559",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shahabuddin Ghori Colony"
        },
        {
            "_id": "5e062857ad5c9834732af55a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shams Pir"
        },
        {
            "_id": "5e062857ad5c9834732af556",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shah Latif Town"
        },
        {
            "_id": "5e062857ad5c9834732af55c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sharafi Goth"
        },
        {
            "_id": "5e062857ad5c9834732af55e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sharifabad"
        },
        {
            "_id": "5e062857ad5c9834732af55d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sharfabad Society"
        },
        {
            "_id": "5e062857ad5c9834732af55f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sher Shah"
        },
        {
            "_id": "5e062857ad5c9834732af568",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Soldier Bazaar"
        },
        {
            "_id": "5e062857ad5c9834732af563",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Singo Lane"
        },
        {
            "_id": "5e062857ad5c9834732af561",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sindh Baloch Society"
        },
        {
            "_id": "5e062857ad5c9834732af566",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sohrab Goth"
        },
        {
            "_id": "5e062857ad5c9834732af564",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sir Syed Colony"
        },
        {
            "_id": "5e062857ad5c9834732af55b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Shanti Nagar"
        },
        {
            "_id": "5e062857ad5c9834732af569",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Somar Goth"
        },
        {
            "_id": "5e062857ad5c9834732af562",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sindh Muslim Cooperative Housing Society"
        },
        {
            "_id": "5e062857ad5c9834732af56d",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sultanabad."
        },
        {
            "_id": "5e062857ad5c9834732af567",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sohrab Katrak Parsi Colony"
        },
        {
            "_id": "5e062857ad5c9834732af56e",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Super Market"
        },
        {
            "_id": "5e062857ad5c9834732af56b",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Steel Town "
        },
        {
            "_id": "5e062857ad5c9834732af56c",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sultanabad Colony"
        },
        {
            "_id": "5e062857ad5c9834732af570",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Taiser Town"
        },
        {
            "_id": "5e062857ad5c9834732af560",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sherabad, Sindh"
        },
        {
            "_id": "5e062857ad5c9834732af565",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "SITE Town"
        },
        {
            "_id": "5e062857ad5c9834732af572",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Turk Colony"
        },
        {
            "_id": "5e062857ad5c9834732af571",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Tariq bin Ziyad housing Karachi"
        },
        {
            "_id": "5e062857ad5c9834732af575",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Water Pump"
        },
        {
            "_id": "5e062857ad5c9834732af573",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Usmanabad"
        },
        {
            "_id": "5e062857ad5c9834732af577",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Yaseenabad"
        },
        {
            "_id": "5e062857ad5c9834732af56a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Songal"
        },
        {
            "_id": "5e062857ad5c9834732af57a",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Zaman Town"
        },
        {
            "_id": "5e062857ad5c9834732af56f",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Surjani Town"
        },
        {
            "_id": "5e062857ad5c9834732af576",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Yaqubabad."
        },
        {
            "_id": "5e062857ad5c9834732af578",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Yousuf Goth"
        },
        {
            "_id": "5e062857ad5c9834732af579",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Yunusabad."
        },
        {
            "_id": "5e6636557414f9643a489291",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Malir"
        },
        {
            "_id": "5e062857ad5c9834732af574",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Usmania Colony"
        },
        {
            "_id": "5e6636557414f9643a489293",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Air port"
        },
        {
            "_id": "5e6636557414f9643a489295",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Karsaz"
        },
        {
            "_id": "5e6636557414f9643a489294",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan e Iqbal"
        },
        {
            "_id": "5e6636557414f9643a489292",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Tariq Road"
        },
        {
            "_id": "5e6636557414f9643a489297",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Korangi Creek"
        },
        {
            "_id": "5e6636557414f9643a489298",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Scheme 33"
        },
        {
            "_id": "5e7497a17562297dcd1571fb",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Bahria Town"
        },
        {
            "_id": "5e6636557414f9643a489299",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Gulshan e Hadeed"
        },
        {
            "_id": "5e6636557414f9643a489296",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Orangi Town"
        },
        {
            "_id": "5ea958d483fb320a726855ac",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Port qasim"
        },
        {
            "_id": "5ea958d483fb320a726855ab",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Kemari"
        },
        {
            "_id": "5ea958d483fb320a726855ae",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Chashma goth"
        },
        {
            "_id": "5ea958d483fb320a726855af",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Mawach goth"
        },
        {
            "_id": "5ea958d483fb320a726855ad",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Hub chowki"
        },
        {
            "_id": "5ea958d483fb320a726855b1",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Sabzi Mandi"
        },
        {
            "_id": "5ea958d483fb320a726855b0",
            "cityId": "5db6aa9a05fa1a9e7da83358",
            "value": "Dhabeji"
        }
    ]
    // const username = req.body.username;
    // let loginResult = login(username, req.body.password);
    res.json({
        Status : "OK" ,
        areas : area
    })
    // if (loginResult) {
    //     res.render('users', {username: username});
    // }
    // else {
    //     res.render('index', {error: true});
    // }
});

module.exports = router;