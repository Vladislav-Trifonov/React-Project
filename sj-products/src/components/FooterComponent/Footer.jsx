import './footer-component.scss';

function Footer () {

    return(
       <section className="footer">
            <article className="products"> 
                Продуктов каталог
                <ul role='list' className='products-list'>
                    <li>ПДЧ ламинирани плоскости</li>
                    <li>МДФ плоскости</li>
                    <li>Кухненски плотове</li>
                </ul>
            </article>

            <article className="information">
                Информация
                <ul role='list' className='information-list'>
                    <li>За SJ Products</li>
                    <li>Партньори</li>
                    <li>Новини</li>           
                </ul>
            </article>

            <article className="contacts">
                Контакти
                <div className='contacts-list'>
                    <h4>Русе</h4>
                    <p>тел: 0890399166</p>
                    <p>имейл: sj-products@abv.bg</p>
                </div>
            </article>
       </section>
    )
}

export default Footer; 