import GoogleMaps from "../GoogleMapsComponent/GoogleMaps";
import "./contacts.scss";

function Contacts() {
  return (
    <section className="contacts-component">
      <div className="holder">
        <h1>Информация относно SJ Products</h1>
        <p>
          SJ Products е лидер в индустрията на плоскотите със завиден опит и отлична
          репутация. Ние вярваме, че качеството и иновациите са ключови елементи
          за успешно бизнес партньорство. SJ Products е място за разнообразни плоскости,
          предназначени за мебели и кухня! Нашата мисия е да ви предоставим не
          просто повърхности, а стилни и функционални решения, които отговарят
          на изискванията на съвременния дом.
        </p>
        <p>Телфон за контакти/продажби: 0890 399 166</p>
        <p>Работно време: Понеделник - Петък: 8:00 - 17:00 ч.</p>
        <p>Централен склад и офис: ул. „Сини вир“ 1, 7008 Средна кула, Русе</p>
        <p>Намерете ни на картата:</p>
        <GoogleMaps />
      </div>

      <div className="test">
        <div className="test1">
          TEST
        </div>
      </div>
    </section>
  );
}

export default Contacts;
