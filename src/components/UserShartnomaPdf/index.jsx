import { useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import "./style.css";
import qr from "../../assets/qr.png";

function UserShartnomaPdf() {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const element = document.querySelector(".actual-receipt");
    setLoader(true);
    const options = {
      margin: 0.5,
      filename: "shartnoma.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(options)
      .save()
      .finally(() => setLoader(false));
  };

  return (
    <div className="wrapper">
      <div className="receipt-box">
        {/* actual receipt */}
        <div className="actual-receipt">
          {/* organization name */}
          <h4>
            O'ZBEKISTON RESPUBLIKASI OLIY TA'LIM, FAN VA INNOVATSIYALAR
            VAZIRLIGI YOSH MUTAXASSISNI MALAKA AMALIYOTINI O'TASH VA KELGUSIDA
            ISH BILAN TA'MINLASHGA KO'MAKLASHISH TO'G'RISIDA
          </h4>

          {/* contract number */}
          <h6>SHARTNOMA 12888</h6>

          {/* sana */}
          <p className="sana">2-Avgust, 2024-yil 10:03</p>

          {/* email-phone-and-website */}
          <div className="contract-info">
            <p>
              <span className="abzas">O'zbekiston</span> Respublikasi
              Prezidentining 2017-yil 27-iyuldagi PQ-3151-sonli, 2018-yil
              5-iyundagi PQ-3775-sonli, 2021-yil 24-dekabrdagi PQ-60-son
              qarorlari va O'zbekiston Respublikasi Prezidenti
              Administratsiyasining 2022-yil 15-martdagi 04-593-sonli
              topshiriqlari ijrosi yuzasidan O'zbekiston Respublikasi Oliy
              ta’lim, fan va innovatsiyalar vazirligining 2022-yil 13-iyundagi
              202-sonli buyrug'i asosida ishlab chiqilgan va tasdiqlangan Oliy
              ta'lim muassasalari talabalarining malaka amaliyotini o'tash
              tartibi to'g'risidagi namunaviy Nizomga asosan bitiruvchilarni
              malaka amaliyotini o'tkazish va ularni kelgusidagi ishga
              joylashishiga ko'maklashish maqsadida Qo'qon davlat pedagogika
              instituti (keyingi o'rinlarda “QDPI” deb yuritiladi) nomidan
              ta'lim muassasasi Ustavi hamda Talabalarining malaka amaliyotini
              o'tash tartibi to'g'risidagi Nizomiga asoslanib ish yurituvchi
              rektor Xodjayeva Dilnoza Shavkatovna bir tomondan, ish beruvchi
              Ustaviga asoslanib 54-umumiy o`rta ta`lim maktabi nomidan Mirzayev
              Nodirjon Hasanovich ikkinchi tomondan, (keyingi o'rinlarda “Qabul
              qiluvchi muassasa” deb yuritiladi) va oliy ta'lim muassasasi
              Boshlang'ich ta'lim fakulteti Boshlang'ich ta'lim ta'lim
              yo'nalishi talabasi Gulsanamxon O`rinboyeva Usubjon qizi (keyingi
              o'rinlarda “Amaliyotchi-talaba” deb yuritiladi) uchinchi tomondan
              ushbu shartnomani quyidagilar haqida tuzdilar.
            </p>

            <h5>1. SHARTNOMANING PREDMETI</h5>
            <p>
              <span className="abzas">O'zbekiston</span> Respublikasi Oliy
              ta’lim, fan va innovatsiyalar vazirligining 2022 yil 13-iyundagi
              “Oliy ta'lim muassasalari talabalarining malaka amaliyotini o'tash
              tartibini takomillashtirish to'g'risida”gi 202-sonli buyrug'i
              ijrosini ta'minlash maqsadida amalyotchi-talabani malaka
              amaliyotini o'tashi, oliy ma'lumotga ega bo'lgan yosh mutaxassis
              (bakalavr)larning intellektual salohiyatidan unumli foydalanish va
              ularni ish bilan ta'minlashga ko'maklashish.
            </p>

            <h5>2. TOMONLARNING MAJBURIYATLAR</h5>
            <h5 className="second-title">2.1. QDPI:</h5>
            <div>
              <p>
                - malaka amaliyotini o'tash joylariga talabalarni taqsimlashda
                ishtirok etish;
              </p>{" "}
              <p>
                - malaka amaliyotiga ketayotgan talabalarga oldindan malaka
                amaliyoti o'tkazish tartiblari, xavfsizlik texnikasi haqida
                zarur ko'rsatmalar va yo'l-yo'riqlar ko'rsatish;
              </p>
              <p>
                - zaruriyatga muvofiq Qabul qiluvchi tashkilotga malaka
                amaliyoti boshlanishidan oldin borib, talabalar kelishiga
                zaruriy tayyorgarlik ishlarini tashkil etish;
              </p>{" "}
              <p>
                - malaka amaliyotining butun davri uchun talabalarga malaka
                amaliyoti dasturi asosida reja-jadvalini tuzish, qabul qiluvchi
                tashkilotdan malaka amaliyoti rahbari bilan birgalikda ishning
                hajmi va tarkibini belgilash;
              </p>{" "}
              <p>
                - talabalarni malaka amaliyoti reja-jadvali va dasturi bilan
                ta'minlash;
              </p>{" "}
              <p>
                - talabalarning malaka amaliyoti o'tash joyiga yetib borishi va
                qaytishini nazorat qilish;
              </p>{" "}
              <p>
                - qabul qiluvchi tashkilotdan malaka amaliyoti rahbari bilan
                talabaning malaka amaliyotini o'tashi holati bo'yicha muntazam
                ravishda aloqada bo'lish;
              </p>{" "}
              <p>
                - malaka amaliyoti muddatlariga rioya qilinishini, shuningdek,
                malaka amaliyoti reja-jadvali va dasturi bajarilishini hamda
                kundalikni har kunlik to'ldirishini nazoratini olib borish,
                uslubiy yordam ko'rsatish ishlarini, zarur hollarda,
                talabalarning malaka amaliyoti o'tash joylariga borib ko'rish
                yo'li bilan amalga oshirish;
              </p>{" "}
              <p>
                - talabalarning malaka amaliyoti hisobotini yozishga ko'rsatma
                va tavsiyalar berish;
              </p>{" "}
              <p>
                - talabalarning malaka amaliyoti bo'yicha hisobot himoyasida
                ishtirok etish va baholash;
              </p>{" "}
              <p>
                - malaka amaliyotini o'tashni takomillashtirish yuzasidan zarur
                hollarda o'z taklif va mulohazalarini kafedra mudiriga (fakultet
                va oliy ta'lim muassasasi Kengashida ko'rib chiqish uchun)
                taqdim etish;
              </p>{" "}
              <p>
                - professor-o'qituvchining malaka amaliyotiga rahbarlik
                qilganligi oliy ta'lim muassasasi rektorining malaka amaliyoti
                o'tash bo'yicha buyrug'i, talabaning malaka amaliyoti kundaligi,
                hisoboti va malaka amaliyoti uchun baho qo'yilgan <br /> <br /> tegishli
                qaydnomalar asosida aniqlanadi.
              </p>
            </div>
            <h5 className="second-title">2.2. “QABUL QILUVCHI MUASSASA”:</h5>
            <div>
              <p>
                - oliy ta'lim muassasalari bilan talabalar malaka amaliyotini
                o'tashi to'g'risida shartnomalar tuzadi;
              </p>{" "}
              <p>
                - malaka amaliyotini o'tash davrida talabalarga amaliyotchi
                maqomini beradi;
              </p>{" "}
              <p>
                - malaka amaliyotini tashkil etishga ko'maklashadi, malakali va
                tajribali mutaxassislar orasidan amaliyotchi bilan ishlash
                ko'nikmasiga ega bo'lgan malaka amaliyoti rahbarini tayinlaydi;
              </p>{" "}
              <p>
                - amaliyotchilar uchun ish joyi va amaliyot davrida foydalanish
                uchun zaruriy materiallar ajratilishini tashkil etadi, faoliyati
                doirasida amaliyotchi talabalarga oylik maoshlar belgilashi
                mumkin;
              </p>{" "}
              <p>
                - amaliyotchiga biriktirilgan mas'ul xodimlarni moliyaviy
                imkoniyatlardan kelib chiqib moddiy rag'batlantirish ishlarini
                yo'lga qo'yadi;
              </p>{" "}
              <p>
                - hayot faoliyati va texnika xavfsizligi bo'yicha zaruriy
                ko'rsatmalar beradi, zarur bo'lgan hollarda talabalarga
                mehnatning xavfsiz usullarini o'rgatadi va bu haqda tegishli
                hujjatlami rasmiylashtiradi;
              </p>{" "}
              <p>
                - malaka amaliyoti dasturiga muvofiq talabalarga joriy
                qilinadigan shart-sharoitlar (shaxsiy himoya vositalari, maxsus
                ovqat va boshqalar)ni yaratadi;
              </p>{" "}
              <p>
                - talabalarga mavjud adabiyotlar, texnik va boshqa hujjatlardan
                foydalanish imkoniyatlarini beradi;
              </p>{" "}
              <p>
                - malaka amaliyoti dasturiga muvofiq talabalar malaka amaliyoti
                o'tkazishining samaradorligini ta'minlovchi ish joylari
                sharoitini ta'minlaydi;
              </p>{" "}
              <p>
                - amaliyotchiga malaka amaliyoti davri davomida moliyaviy
                imkoniyat doirasida ish haqi to'lanadigan lavozimga ishga qabul
                qilish masalasini hal qiladi;
              </p>{" "}
              <p>
                - tashkilotning ichki mehnat intizomini buzgan talaba haqida
                oliy ta'lim muassasasi rektoriga xabar qiladi;
              </p>{" "}
              <p>
                - talaba malaka amaliyotini o'tash davrida amaliyot o'tash
                joyida baxtsiz hodisaga uchragan holatlar bo'yicha javobgarlik
                masalalarini qonunchilik hujjatlari asosida ko'rib chiqadi;
              </p>{" "}
              - shartnoma asosida talabalar yashashi uchun qulay sharoitli
              vaqtinchalik turar joylar bilan ta'minlashi mumkin. Qabul qiluvchi
              tashkilot rahbari talaba ta'lim olayotgan yo'nalishi
              (mutaxassisligi) bo'yicha bo'sh ish joylari mavjud bo'lgan
              taqdirda, uni vaqtinchalik ish haqi to'lanadigan lavozimga
              tayinlashi hamda talaba o'qishni bitirgandan so'ng to'liq ish
              bilan ta'minlashi mumkin.
            </div>

            <h5 className="second-title">2.3. “AMALIYOTCHI-TALABA”:</h5>
            <div>
              <p>
                - malaka amaliyotini o'tash joyi, reja-jadvali, dasturi va
                tartibi bilan oldindan tanishish;{" "}
              </p>
              <p>
                - malaka amaliyotini o'tkazish bo'yicla o'z fikr-mulohazalarni
                bildirish;
              </p>{" "}
              <p>
                - malaka amaliyotini o'tash yuzasidan zarur axborotlar olish;
              </p>{" "}
              <p>
                - malaka amaliyoti bo'yicha uslubiy materiallar bilan tanishish
                hamda malaka amaliyoti rahbarlaridan yo'l-yo'riqlar olish
                huquqlariga ega;{" "}
              </p>
              <p>
                - malaka amaliyotini uzrli sabablarga ko'ra o'tay olmagan
                talabalar oliy ta'lim muassasasi rektorining buyrug'iga muvofiq
                belgilangan boshqa muddatda amaliyotni o'tashi shart;
              </p>{" "}
              <p>
                - malaka amaliyoti dasturida nazarda tutilgan barcha
                topshiriqlami reja-jadvaliga muvofiq to'liq hajmda va sifatli
                bajarish;
              </p>{" "}
              <p>
                - malaka amaliyoti kundaligini har kuni va tartibli yuritish;
              </p>{" "}
              <p>
                - oliy ta'lim muassasasi va qabul qiluvchi tashkilotdan
                tayinlangan malaka amaliyoti rahbarlarining dasturda ko'zda
                tulilgan ishlarga oid barcha topshiriqlarini bajarish;
              </p>{" "}
              <p>
                - hisobotga tegishli hujjatlami o'z vaqtida rasmiylashtirish;
              </p>{" "}
              <p>
                - qabul qiluvchi tashkilot xodimlari faoliyatini tartibga
                soluvchi hujjatlar va ichki mehnat tartib-qoidalariga rioya
                qilish majburiyatlari yuklatiladi.
              </p>{" "}
              <p>
                - malaka amaliyotini o'tagandan so'ng oliy ta'lim muassasasida
                malaka amaliyoti bo'yicha hisobotini kafedra yig'ilishi bayoni
                bilan belgilangan muddatda himoya qiladi.
              </p>
            </div>
<br />
            <h5>3. TOMONLARNING JAVOBGARLIGI</h5>
            <p>
              3.1. Tomonlarning har biri ushbu shartnoma majburiyatlarini
              bajarmagan taqdirda boshqa tarafga yetkazilgan zararni amaldagi
              qonunchilikda belgilangan tartibda javobgar bo'ladi.
            </p>

            <h5>
              4. SHARTNOMANING AMAL QILISH MUDDATI VA UNI BEKOR QILISH TARTIBI
            </h5>
            <div>
              <p>
                4.1. Taraflardan birining talabi bilan shartnoma quyidagi
                hollarda bekor qilinishi mumkin:
              </p>{" "}
              <p>
                - Amaliyotchi-talabaning malakasi, bilimi ushbu mutaxassis uchun
                amalda o'rnatilgan davlat ta'lim standartlari talablariga javob
                bermasa;
              </p>{" "}
              <p>
                - Qabul qiluvchi muassasa tegishli hujjatlar asosida
                tugatilganda;
              </p>
              <p>
                4.2. Ushbu shartnoma tomonlarning barchasi imzolaganidan so'ng
                kuchga kiradi, hamda shartnoma to'liq bajarilgunga qadar amalda
                bo'ladi.
              </p>
            </div>

            <h5>TOMONLARNING MANZILLARI:</h5>
          </div>
          <table>
            <thead>
              <tr>
                <th>"Oliy ta`lim muassasasi"</th>
                <th>"Qabul qiluvchi muassasa"</th>
                <th>"Amaliyotchi talaba"</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Muqumiy nomidagi QDPI </td>
                <td>54-umumiy o`rta ta`lim maktabi</td>
                <td>Gulsanamxon O`rinboyeva Usubjon qizi</td>
              </tr>
              <tr>
                <td>
                  <strong>Manzil:</strong> 150700 Qo`qon shahar Turon ko`chasi
                  23-uy.
                </td>
                <td>
                  <strong>Manzil:</strong> Farg'ona viloyati Uchko'prik tumani
                  O`zbek
                </td>
                <td>
                  <strong>Manzil:</strong> Farg'ona viloyati Uchko'prik tumani
                  O`zbek
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Telefon:</strong> (0373) 542-38-38
                </td>
                <td>
                  <strong>Telefon:</strong> +998979565400
                </td>
                <td>
                  <strong>Telefon:</strong> +998 979565400
                </td>
              </tr>
              <tr>
                <td>
                  <img src={qr} alt="qr-code" width={100} />
                </td>
                <td>Imzo: ____________ </td>
                <td>Imzo: ____________ </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <strong>M.O`</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* shartnoma action */}
        <div className="receipt-actions-div">
          <div className="actions-right">
            <button
              className="receipt-modal-download-button"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? (
                <span>Yuklab olinyapti ...</span>
              ) : (
                <span>Yuklab olish</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserShartnomaPdf;
