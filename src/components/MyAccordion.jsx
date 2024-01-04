import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function BasicAccordion() {
  return (
    <div className="basicAccordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Jarimalardan qanday xabardor bo'lish mumkin?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To 'lanmagan jarimalar agar mavjud bo'lsa 10 daqiqa ichida ko
            rinadi. Ilovada avtomobilingiz qo'shilgan bo'lsa, yangi jarimalar
            kelib qolsa, siz bu haqida push-xabarnoma olasiz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Jarimalar qancha vaqt ko'rinadi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Avtomobilingizni qo'shganingizga 10 daqiqadan oshdi, lekin JARIMALAR
            YO'Q deb ko'rsatayotgan bo'lsa: SABABI - Qaror xali chiqmagan bo
            lishi mumkin. FOTO-RADARLAR bo'yicha tuzilgan qarorlar 1-2 KUN
            ichida Road24 ilovada push- уведомление bo'lib keladi. Agarda yaqin
            orada PROTOKOL tuzilgan bo'lsa 5-15 KUNDA jarima qaror tuziladi va
            sizga push-bildirishnoma yuboriladi. Push-bildirshnoma kelgan kundan
            boshlab 15 KUN vagtingiz bo'ladi 30% lik CHEGIRMA bilan to'lagani.
            JARIMA MAY DONCHASIGA qo'yilgan bo'lsa, jarima qarori 3-5 KUNDA
            chiqadi, lekin o'zingiz ma'muriy amaliyot bo'limiga uchraganingiz
            ma'qui.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Jarimalarni qanday to'lasa bo'ladi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jarima detallari ichida "to'lash" tugmasi bor. To'lovlarni amalga
            oshirish uchun plastik kartangizni (Uzcard yoki Humo) ilovada
            qo'shib qo'yishingiz kerak. Ushbu to'lovlar faqat jismoniy
            shaxslarga tegishli kartalardan amalga oshirilishi mumkin.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Avtomobil qo'shishda muammo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Agar texpasport va DRB kombinatsiyasi bazada topilmadi degan xatolik
            chiqsa: 1) Texpasport seriyasi va raqamini to'g' ri kiritganingizga
            ishonch xosil qiling (texpasport seriyasida va avtomobil nomerida
            faqat LOTINCHA xarflar qabul qilinadi). E tibor bering, texpasport
            seriyasi ko pincha shunday boshlanadi - AAF, AAC, AAE. 2) Hammasini
            texpasportdagi bilan bir xil to'g'ri kiritgan bo'Isangiz va baribir
            shu xatolik chiqsa - t.me/road24uz_feedback_bot orqali
            texpasportingiz rasmini yuboring, sizga yordam beramiz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ilovadagi texnik ko'rik ma'lumoti xato bo'lsa</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Road24 ilovasining ushbu yangi versiyasida texnik ko rik(texosmotr) malumoti YHXBBning
"Texnik ko'rik" bazasidan olinmoqda.
Siz texnik ko'rikdan o'tgan bo'lsangiz, lekin bu hagida onlayn bazaga ma'lumot kiritilmagan bo'lsa (Texnik ko'rik topilmadi degan xatolik chiqsa) yoki ma'lumot noto 'g'ri bo'lsa - buni to'g'irlash uchun ko'rikdan o'tgan joyingizga
borib uchrashingiz kerak bo'ladi.
Agar avtomobilingiz YANGI ishlab chiqarilgan bo'lsa - uni DY HXXda ro'yxatga olingan
sanadan boshlab 2 yildan so'ng texnik ko'rikdan o'tkazish kerak bo ladi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Jarimalarni qismlarga bo'lib to'lash mumkinmi ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ha, albatta. Jarimalarni qismlarga bo'lib to'lash mumkin. Road24 ilovasida minimal to'lov summasi 1000 so'mni tashkil etadi.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
