import React from "react";
import "./home.css";
import bgt1 from "./img/bgt1.jpg";
import equipo from "./img/equipo.webp";
import rock from "./img/rock.jfif";
import compras from "./img/compras.jpg";
import bgt3 from "./img/bgt3.jpg";
import bgt4 from "./img/bgt4.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div class="margintop">
        <section class="container hero__main">
          <div class="hero__textos">
            <h1 class="title">
              {" "}
              Donde puedes{" "}
              <span class="title__active"> Conocer y Reconocer</span>.
            </h1>
            <p class="copy"> Un espacio de miles de ofertas en Bogotá </p>
            <p class="copy__active">Conocenos un poco más</p>
            <a href="http://localhost:3000/login" class="cta">
              RECONOCE BOGOTÁ
            </a>
          </div>
          <img src={bgt1} />
        </section>

        <section class="servicios">
          <div class="container">
            <h2 class="subtitle">
              Nuestros servicios<span class="point">.</span>
            </h2>
            <p class="copy__section">
              Ofrecemos una nueva forma de conocer Bogotá
            </p>

            <article class="container__card ">
              <div class="card">
                <img src={equipo} />
                <div class="card__text">
                  <p class="card__list">Personas que construyeron</p>
                  <h3 class="card__title">
                    Nosotros<span class="point">.</span>
                  </h3>
                  <p class="card__copy">
                    Somos un grupo de emprededores que quieren dar a conocer
                    Bogotá
                  </p>
                  <a href="#" class="card__button">
                    Conoce al equipo de Reconoce Bogotá
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={rock} />
                <div class="card__text">
                  <p class="card__list">Aqui estan los mejores</p>
                  <h3 class="card__title">
                    Eventos de Bgt<span class="point">.</span>
                  </h3>
                  <p class="card__copy">
                    conoce un poco mas de los eventos que día a dia se celebran
                    en Bogoá
                  </p>
                  <a href="http://localhost:3000/login" class="card__button">
                    Eventos
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={compras} />
                <div class="card__text">
                  <p class="card__list">Una tienda unica </p>
                  <h3 class="card__title">
                    Ecomerce<span class="point">.</span>
                  </h3>
                  <p class="card__copy">
                    Quieres portar la mejor Merch de Bogotá. Ven a nuestra
                    tienda virtual
                  </p>
                  <a href="#" class="card__button">
                    Compra Aqui
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="projects container">
          <h2 class="subtitle">
            Nuestros planes contigo<span class="point">.</span>
          </h2>
          <p class="copy__section">Reconocidos a nivel mundial</p>
          <article class="container-bg">
            <div class="card">
              <div class="card__text">
                <h3 class="card__title">
                  Turs por Bogotá<span class="point">.</span>
                </h3>
                <p class="card__date">23 de noviembre 2021</p>
                <p class="card__copy">
                  Queremos acompañarte en tu experiencia de conocer Bogotá
                </p>
                <a href="#" class="card__button">
                  Nuestros Planes
                </a>
              </div>
            </div>
            <div class="background">
              <img src={bgt3} />
              <div class="background__text">
                <h3 class="background__title">La Candelaria </h3>
                <p class="background__copy">
                  La realidad aumentada transforma por completo
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card__text">
                <h3 class="card__title">
                  Personaliza tu experiencia<span class="point">.</span>
                </h3>
                <p class="card__date">23 de noviembre 2021</p>
                <p class="card__copy">
                  Nos acomodamos a tus gustos y planeamos lo mejor para ti
                </p>
                <a href="#" class="card__button">
                  te acompañamos
                </a>
              </div>
            </div>
            <div class="background">
              <img src={bgt4} />
              <div class="background__text">
                <h3 class="background__title">Centro de Bogotá</h3>
                <p class="background__copy">
                  La realidad aumentada transforma por completo
                </p>
              </div>
            </div>
          </article>
        </section>

        <section class="email container container-modifier">
          <h2 class="subtitle subtitle--modifier">
            {" "}
            Somos Rolos orguyos de Bogotá <span class="point">.</span>
          </h2>
          <p class="copy__section copy__section--modifier">
            Ciento de empresas confian en nuestra asesoria
          </p>

          <div class="check">
            <div class="check__item">
              <i class="bx bx-camera"></i>
              <div class="check__numbers">
                <p class="check__number">+200</p>
                <p class="check__copy">Turs por Bogotá</p>
              </div>
            </div>

            <div class="check__item">
              <i class="bx bx-camera"></i>
              <div class="check__number">
                <p class="check__number">+500</p>
                <p class="check__copy">Turistas felices</p>
              </div>
            </div>

            <div class="check__item">
              <i class="bx bx-camera"></i>
              <div class="check__number">
                <p class="check__number">+1000</p>
                <p class="check__copy">Vidas impactadas</p>
              </div>
            </div>
          </div>
        </section>

        <section class="footer">
          <div class="container footer__caption">
            <div class="download__app">
              <div class="download__item">
                <i class="bx bxl-facebook-circle"></i>
                <h4 class="download__title">Visita nuestro facebook</h4>
              </div>
              <div class="download__item">
                <i class="bx bxl-blogger"></i>
                <h4 class="download__title">Visita nuestro vlog </h4>
              </div>
              <div class="footer__copy">
                <p class="coopyright">
                  ReconoceBogotá & copy; 2021 Todos los derechos reservados
                </p>
                <a
                  href="#"
                  class="politica__privacidad politica__privacidad--margin"
                >
                  Terminos y condiciones
                </a>
                <a href="#" class="politica__privacidad">
                  Politicas de privacidad
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
