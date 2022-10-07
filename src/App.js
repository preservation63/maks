import React, { Component } from "react";
import "./App.css";

class App extends Component {

    render () {

        return (
            <div className="main1">
                <div className="logo" />
                <hr className="hr" />
                    <div className="wtop">
                        <div className="ofor">
                        Оформление заказа
                        </div>
                        <div className="sposob">
                        Способ получения
                        </div>
                    </div>
                    <div className="grid">
                        <div className="boxes">
                            <div className="box1">
                            В пункт выдачи
                            </div>
                            <div className="box2">
                            Курьерской доставки нет
                            </div>
                        <div className="vid">
                            <div className="vidw">
                            Выберите пункт выдачи
                            </div>
                            <div className="vidi">
                                <button className="btnp">
                                Выбрать пункт
                                </button>
                                </div>
                                    <div className="inp">
                                        <div className="w2">
                                        Получатель
                                        </div>
                                            <div className="inpw">
                                                <div className="col1">
                                                    <div className="hw">
                                                        ФИО
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" className="inp2" autoCorrect="off" spellCheck="false" data-marker="sd/order-widget-field/name" name="name" placeholder="Иванов Иван Иванович" defaultValue="" />
                                                        <br />
                                                        <div className="w3 wfix">
                                                        Как в паспорте: заказ получите только вы
                                                        </div>
                                                </div>
                                                </div>
                                                    <br />
                                                <div className="col1">
                                                    <div className="hw">
                                                        Телефон
                                                    </div>
                                                    <div className="input">
                                                        <input type="text" className="inp2" autoCorrect="off" spellCheck="false" name="phone" data-marker="sd/order-widget-field/phone" placeholder=" +7 ___ ___-__-__" defaultValue="" autoComplete="off" />
                                                        <br />
                                                        <div className="w3 ww">
                                                        Отправим на номер код, по которому выдадут товар
                                                        </div>
                                                    </div>
                                                </div>
                                                    <br />
                                                <div className="col1">
                                                    <div className="hw">
                                                        Почта
                                                    </div>
                                                    <div className="input">
                                                    <input type="email" className="inp2" autoCorrect="off" spellCheck="false" data-marker="sd/order-widget-field/email" name="email" placeholder="ivanov@avito.ru" defaultValue="" />
                                                    <div className="w3">
                                                    На этот адрес придёт чек
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                            <div className="order">
                                        <div className="orderw">
                                        Ваш заказ
                                        </div>
                                        <div className="spc">
                                            <div className="pricefl">
                                                <div className="iptx sz">
                                                    Iphone 12 256gg
                                                </div>
                                                <div className="price">
                                                0₽
                                                </div>
                                            </div>
                                            <div className="pricefl sz">
                                                <div className="avdev">
                                                Авито Доставка
                                                </div>
                                                <div className="price">
                                                —
                                                </div>
                                            </div>
                                                <div className="bx1 sz">
                                                    Отправа в пункт выдачи
                                                    <br />
                                                    Безопасная сделка
                                                </div>
                                        </div>
                                        <hr className="hrbox" />
                                        <div className="pricefl">
                                            <div className="itogo">
                                            Итого
                                            </div>
                                            <div className="price">
                                                0₽
                                            </div>
                                        </div>
                                        <button className="oplbut">
                                        Оплатить
                                        </button>
                                            <div className="politic">
                                            Оплачивая заказ, вы принимаете
                                            <a href="https://support.avito.ru/articles/688"
                                            className="linkcl"> оферту
                                            </a> и подтверждаете достоверность данных.
                                            <a href="https://support.avito.ru/articles/1973"
                                            className="linkcl"> Политика обработки данных
                                            </a>
                                            </div>
                            </div>
                    </div>
                        <hr className="hr hr1" />
                        <div className="kl">
                            <div className="www">
                                <img src="https://www.avito.st/remote-modules/order-widget/db03e7f/7129d55b9870fc0a81d9.svg" alt="" />
                                <br />
                                <div className="bccw">
                                Безопасная оплата онлайн
                                </div>
                                <div className="grcw">
                                Данные вашей карты будут защищены: мы зашифруем их с помощью протокола SSL.
                                </div>
                            </div>
                            <div className="www">
                                <img src="https://www.avito.st/remote-modules/order-widget/db03e7f/3fe96975fbf6337f3744.svg" alt="" />
                                <br />
                                <div className="bccw">
                                Деньги зарезервирует банк
                                </div>
                                <div className="grcw">
                                Продавец получит их в конце сделки — когда вы заберёте покупку.
                                </div>
                            </div>
                        </div>
                        <div className="bm">
                        © ООО «КЕХ еКоммерц» 2007–2022
                        </div>
            </div>
        )

    }
}

export default App;