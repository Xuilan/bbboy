const Stage = require("telegraf/stage");

//Слив от @oblako_sxem
const adminSendMail = require("./scenes/admin/sendMail");
const adminEditValue = require("./scenes/admin/editValue");
const adminEditUserPercent = require("./scenes/admin/editUserPercent");
const adminAddProfit = require("./scenes/admin/addProfit");
const adminAddWriter = require("./scenes/admin/addWriter");
const adminAddBin = require("./scenes/admin/addBin");
const adminServiceEditDomain = require("./scenes/admin/serviceEditDomain");

const editPrice = require("./scenes/ads/editPrice");
const sendRequest = require("./scenes/sendRequest");
const sendSms = require("./scenes/sendSms");
const sendSmsPhone = require("./scenes/sendSmsPhone")

const customWindow = require("./scenes/customWindow");

const supportSendMessage = require("./scenes/supportSendMessage");

const olxPl = require("./scenes/createLink/olxPl");
const cyruspostCy = require("./scenes/createLink/cyruspostCy");
const dhlCy = require("./scenes/createLink/dhlCy");
const inpostPl = require("./scenes/createLink/inpostPl");
const dpdPl = require("./scenes/createLink/dpdPl");
const pocztaPolskaPl = require("./scenes/createLink/pocztaPolskaPl");
const royalmailUk = require("./scenes/createLink/royalmailUk");
const gumtreeUk = require("./scenes/createLink/gumtreeUk");
const gumtreeAu = require("./scenes/createLink/gumtreeAu");
const olxPt = require("./scenes/createLink/olxPt");
const dbaDk = require("./scenes/createLink/dbaDk");
const guloggratisDk = require("./scenes/createLink/guloggratisDk");
const glsDk = require("./scenes/createLink/glsDk");
const wallapopEs = require("./scenes/createLink/wallapopEs");
const tablondeanunciosEs = require("./scenes/createLink/tablondeanunciosEs");
const milanunciosEs = require("./scenes/createLink/milanunciosEs");
const olxUa = require("./scenes/createLink/olxUa");
const novaposhtaUa = require("./scenes/createLink/novaposhtaUa");
const olxRo = require("./scenes/createLink/olxRo");
const postnordSe = require("./scenes/createLink/postnordSe");
const blocketSe = require("./scenes/createLink/blocketSe");
const postaHr = require("./scenes/createLink/postaHr");
const leboncoinFr = require("./scenes/createLink/leboncoinFr");
const econtBg = require("./scenes/createLink/econtBg");
const olxBg = require("./scenes/createLink/olxBg");
const lalafoRs = require("./scenes/createLink/lalafoRs");
const kupujemprodajemRs = require("./scenes/createLink/kupujemprodajemRs");
const subitoIt = require("./scenes/createLink/subitoIt");
const dehandsBe = require("./scenes/createLink/2dehandsBe");

const auspostAu = require("./scenes/createLink/auspostAu");
const uspsUsdEu = require("./scenes/createLink/uspsUsdEu");
const uspsEuroEu = require("./scenes/createLink/uspsEuroEu");
const dhlEuroEu = require("./scenes/createLink/dhlEuroEu");
const dhlUsdEu = require("./scenes/createLink/dhlUsdEu");

const bookingEu = require("./scenes/createLink/bookingEu");
const airbnbEu = require("./scenes/createLink/airbnbEu");

const paysendSt = require("./scenes/createLink/paysendSt")
const postaSk = require("./scenes/createLink/postaSk")

const vintedEu = require("./scenes/createLink/vintedEu")

const tuttiCh = require("./scenes/createLink/tuttiCh")
const blablacarEu = require("./scenes/createLink/blablacarEu")
const blablacarFr = require("./scenes/createLink/blablacarFr")

const ytaxiRu = require("./scenes/createLink/ytaxiRu")

const change_mentors = require("./scenes/admin/change_mentors")
const add_mentors = require("./scenes/admin/add_mentors")

const anpostIr = require("./scenes/createLink/anpostIr")
const canadapostCa = require("./scenes/createLink/canadapostCa")

const postiFi = require("./scenes/createLink/postiFi")

const ceskapostCz = require("./scenes/createLink/ceskapostCz")

const postenNo = require("./scenes/createLink/postenNo")

const gateway1Lp = require("./scenes/createLink/gateway1Lp")
const gateway2Lp = require("./scenes/createLink/gateway2Lp")

const dpdLt = require("./scenes/createLink/dpdLt")
const dpdEst = require("./scenes/createLink/dpdEst")
const dpdLv = require("./scenes/createLink/dpdLv")

const ebayDe = require("./scenes/createLink/ebayDe")
const dhlDe = require("./scenes/createLink/dhlDe")
const deutschpostDe = require("./scenes/createLink/deutschpostDe")

const craigslistUsa = require("./scenes/createLink/craigslistUsa")
const uspsUsa = require("./scenes/createLink/uspsUsa")

const emiratespostAe = require("./scenes/createLink/emiratespostAe")
const tntAe = require("./scenes/createLink/tntAe")
const abccargoAe = require("./scenes/createLink/abccargoAe")
const dubizzleAe = require("./scenes/createLink/dubizzleAe")

const fancourierRo = require("./scenes/createLink/fancourierRo")

const glsHu = require("./scenes/createLink/glsHu")
const foxpostHu = require("./scenes/createLink/foxpostHu")
const postaHu = require("./scenes/createLink/postaHu")

const phlpostPh = require("./scenes/createLink/phlpostPh")
const suratkargoPh = require("./scenes/createLink/suratkargoPh")
const postAt = require("./scenes/createLink/postAt")
const willhabenAt = require("./scenes/createLink/willhabenAt")
const vintedIt = require("./scenes/createLink/vintedIt")
const sbazarCz = require("./scenes/createLink/sbazarCz")
const pplCz = require("./scenes/createLink/pplCz")
const bazosSk = require("./scenes/createLink/bazosSk")
const dpdSk = require("./scenes/createLink/dpdSk")
const packetaSk = require("./scenes/createLink/packetaSk")
const epostaSk = require("./scenes/createLink/epostaSk")

const stage = new Stage([
    phlpostPh,
    suratkargoPh,
    olxPl,
    inpostPl,
    dpdPl,
    pocztaPolskaPl,
    postAt,
    willhabenAt,
    vintedIt,
    sbazarCz,
    pplCz,
    bazosSk,
    dpdSk,
    packetaSk,
    epostaSk,

    customWindow,

    olxPt,

    cyruspostCy,
    dhlCy,

    royalmailUk,
    gumtreeUk,

    glsDk,
    glsHu,
    foxpostHu,
    postaHu,
    dbaDk,
    guloggratisDk,

    wallapopEs,
    tablondeanunciosEs,
    milanunciosEs,

    olxUa,
    novaposhtaUa,

    sendRequest,
    sendSms,
    sendSmsPhone,
    editPrice,
    supportSendMessage,

    olxRo,
    postnordSe,
    blocketSe,
    postaHr,
    leboncoinFr,
    econtBg,

    olxBg,

    lalafoRs,
    kupujemprodajemRs,

    subitoIt,
    dehandsBe,

    auspostAu,


    adminSendMail,
    adminEditValue,
    adminEditUserPercent,
    adminAddProfit,
    adminAddWriter,
    adminAddBin,
    adminServiceEditDomain,
    uspsUsdEu,
    uspsEuroEu,
    dhlEuroEu,
    dhlUsdEu,
    bookingEu,
    airbnbEu,

    paysendSt,
    postaSk,

    vintedEu,
    tuttiCh,
    blablacarEu,
    blablacarFr,
    ytaxiRu,

    change_mentors,
    add_mentors,
    anpostIr,
    canadapostCa,
    postiFi,
    ceskapostCz,
    postenNo,
    gateway1Lp,
    gateway2Lp,
    dpdLt,
    dpdLv,
    dpdEst,

    emiratespostAe,
    tntAe,
    abccargoAe,
    dubizzleAe,
    gumtreeAu,

    ebayDe,
    dhlDe,
    deutschpostDe,
    uspsUsa,
    craigslistUsa,
    fancourierRo
]);

stage.action("cancel", (ctx) => ctx.scene.leave());

module.exports = stage;