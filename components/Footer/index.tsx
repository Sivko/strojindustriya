import Link from "next/link"
import Script from "next/script"
import { FaTelegram } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

export default function Footer() {
  const year = new Date().getFullYear()

  const script = `
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();
     for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
     ym(96872718, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/96872718" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->`

  return (<div className="mt-extra content">
    <div className="md:grid grid-cols-4  mb-6">
      <div>
        <strong>Реквизиты</strong>
        <div className="text-addText mt-3">
          <p>ОГРН - 1149102029812</p>
          <p>ИНН - 9108001535</p>
          <p>КПП - 91080100</p>
        </div>
      </div>
      <div>
        <strong>Мессенджеры</strong>
        <div className="text-addText mt-3 flex items-center gap-2">
          <a href="https://t.me/+79883569120" target="_blank"><FaTelegram size={48} /></a>
          <a href="https://api.whatsapp.com/send/?phone=79883569120" target="_blank"><IoLogoWhatsapp size={48} /></a>
        </div>
      </div>
      <div>
        <strong>Контакты</strong>
        <div className="text-addText mt-3">
          <p><a href="tel:+79787428330">+7 (978) 742-83-30</a></p>
          <p><a href="mailto:strojindustriya-k@yandex.ru">strojindustriya-k@yandex.ru</a></p>
        </div>
      </div>
      <div>
        <strong>Адрес</strong>
        <div className="text-addText mt-3">
          <p>298107, Республика Крым, г. Феодосия, ул. Симферопольское шоссе, дом 33-Б, помещение 1-Н</p>
          <p>Пн-Пт 9:00-19:00</p>
        </div>
      </div>
    </div>
    <div className="border-t border-outline py-6 flex items-center justify-between">
      <div><p className="text-base font-semibold">© Стройиндустрия-<span className="text-main">К</span> <span className="text-small">{year} г.</span> Все права защищены</p></div>
      <ul className="flex gap-6 text-small font-semibold">
        <li className="list-none"><Link href={"/privacy"} target="_blank">Политики обработки персональных данных</Link></li>
      </ul>
    </div>
    <div dangerouslySetInnerHTML={{ __html: script }} />
  </div>)
}