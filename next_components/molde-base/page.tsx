import styles from './molde-base.module.css';
import Table from '../components/Table';

export default function MoldeBase() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Molde Base</h1>
      
      <section className={styles.step}>
        <h2>Paso 1: Rectángulos Base</h2>
        <div className={styles.stepContent}>
          <p>Inicialmente haremos dos rectángulos (delantero y trasero):</p>
          <ul className={styles.instructions}>
            <li>Tomaremos la medida más ancha de cintura para arriba (contorno de busto)</li>
            <li>Esta medida la dividimos en cuatro para el ancho de ambos rectángulos</li>
            <li>Para la altura nos fijamos en el talle delantero y trasero</li>
            <li>Dejamos un margen de 4 a 5 cm que nos sirve para hacer correcciones</li>
          </ul>
          
          <div className={styles.baseRectangles}>
            <div className={styles.rectangleContainer}>
              <div className={styles.titleContainer}>
                <p>Delantero</p>
              </div>
              <div className={styles.rectangle}>
                <div className={styles.measurements}>
                  <span className={styles.vertical}>43cm</span>
                  <span className={styles.horizontal}>23cm</span>
                  <div className={styles.arrowVertical}></div>
                  <div className={styles.arrowHorizontal}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.rectangleContainer}>
              <div className={styles.titleContainer}>
                <p>Trasero</p>
              </div>
              <div className={styles.rectangle}>
                <div className={styles.measurements}>
                  <span className={styles.vertical}>41cm</span>
                  <span className={styles.horizontal}>23cm</span>
                  <div className={styles.arrowVertical}></div>
                  <div className={styles.arrowHorizontal}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.measureNote}>
            <Table
              headers={['Medida', 'Valor (cm)']}
              rows={[
                ['Contorno de busto', '92'],
                ['Talle delantero', '43'],
                ['Talle trasero', '41']
              ]}
            />
            <div className={styles.calculationGroup}>
              <span className={styles.fraction}>
                <span className={styles.numerator}>92</span>
                <span className={styles.denominator}>4</span>
              </span>
              <span className={styles.equals}>=</span>
              <span>23cm</span>
            </div>
          </div>
          <div className={styles.alert}>
            <strong>Ojo:</strong> La cintura <span className={styles.underline}>se debe mantener paralela en ambos moldes</span> y para eso agarramos <span className={styles.underline}>el talle más largo para la línea central (43 cm)</span> de la cintura y ya hecho esto a agarramos la cuarta parte de nuestro contorno (23 cm) y trazamos el ancho. Ahora sí trazamos el ancho de ambos rectángulos, pero antes <span className={styles.underline}>nos fijamos qué cada             rectángulo tanto el que va a ser el trasero como el delantero tenga sus medidas correspondientes en altura (o sea, las del talle delantero y el talle trasero)</span>.
          </div>
        </div>
      </section>
      <section className={styles.step}>
        <h2>Paso 2: Fórmulas para cuello y caída de hombro</h2>
        <div className={styles.stepContent}>
          <p className={styles.diagramDescription}>
            Luego usamos estas fórmulas con nuestra medida de contorno de cuello y con el resultado de cada una hacemos puntos y líneas guía con estas medidas.
          </p>
          <div className={styles.baseRectangles}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.point} data-type="green"></div>
                <div className={styles.point} data-type="purple"></div>
                <div className={styles.line} data-type="green"></div>
                <div className={styles.line} data-type="purple"></div>
                <div className={styles.point} data-type="red"></div>
                <div className={styles.line} data-type="red"></div>
                <span className={styles.measureLabel} data-type="purple">6cm</span>
                <span className={styles.measureLabel} data-type="red">5cm</span>
                <span className={styles.measureLabel} data-type="green">8cm</span>
              </div>
            </div>
                        
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.point} data-type="blood"></div>
                <div className={styles.line} data-type="blue"></div>
                <div className={styles.line} data-type="blood"></div>
                <div className={styles.point} data-type="blue"></div>
                <span className={styles.measureLabel} data-type="blood">2cm</span>
                <span className={styles.measureLabel} data-type="blue">7cm</span>
              </div>
            </div>
          </div>
          <div className={styles.formulaTable}>
              <div className={styles.tableHeader}>
                Fórmula para cuello y caída de hombro
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8-3= 5 cm</div>
                <div className={styles.description}>Alto de caída de hombro delantero</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8-2= 6 cm</div>
                <div className={styles.description}>Ancho de cuello delantero</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8-1= 7 cm +2 cm superiores</div>
                <div className={styles.description}>Ancho de cuello trasero</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.formula}>8 cm</div>
                <div className={styles.description}>Alto de cuello delantero</div>
              </div>
            </div>
            <p className={styles.diagramDescription}>
              Luego unimos estos puntos con curvas de la siguiente manera:
            </p>
            <div className={styles.baseRectangles}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.line} data-type="green-to-purple"></div>
                <div className={styles.point} data-type="green"></div>
                <div className={styles.point} data-type="purple"></div>
                <div className={styles.line} data-type="green"></div>
                <div className={styles.line} data-type="purple"></div>
                <div className={styles.point} data-type="red"></div>
                <div className={styles.line} data-type="red"></div>
              </div>
            </div>
                        
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.line} data-type="blood"></div>
                <div className={styles.line} data-type="blue"></div>
                <div className={styles.line} data-type="blood-curve-right"></div>
                <div className={styles.point} data-type="blood"></div>
                <div className={styles.point} data-type="blue"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.step}>
        <h2>Paso 3: Ancho de Espalda</h2>
        <div className={styles.stepContent}>
          <p>En este paso utilizaremos la medida del ancho de espalda:</p>
          <ul className={styles.instructions}>
            <li>Dividimos la medida del ancho de espalda en dos partes</li>
            <li>Aplicamos esta medida desde el centro de la espalda hacia adentro</li>
            <li>Repetimos el mismo proceso para la parte delantera en los hombros</li>
            <li>Utilizamos la línea del alto de caída de hombro delantera (5cm)</li>
            <li>Para la altura de la línea de referencia usamos el alto de sisa</li>
          </ul>
          <div className={styles.measureNote}>
            <Table
              headers={['Medida', 'Valor (cm)']}
              rows={[
                ['Ancho espalda', '92'],
                ['Alto sisa', '21']
              ]}
            />
            <div className={styles.calculationGroup}>
              <span className={styles.fraction}>
                <span className={styles.numerator}>36</span>
                <span className={styles.denominator}>2</span>
              </span>
              <span className={styles.equals}>=</span>
              <span>18cm</span>
            </div>
          </div>
          <div className={styles.baseRectangles}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.line} data-type="green-to-purple"></div>
                <div className={styles.line} data-type="horizontal-guide-left"></div>
                <div className={styles.measureLabel} data-type="horizontal-guide-left">18 cm</div>
                <div className={styles.line} data-type="vertical-guide-left"></div>
                <div className={styles.line} data-type="vertical-arrow-left"></div>
                <span className={styles.measureLabel} data-type="vertical-arrow-left">21cm</span>
                <div className={styles.point} data-type="green"></div>
                <div className={styles.point} data-type="purple"></div>
                <div className={styles.line} data-type="green"></div>
                <div className={styles.line} data-type="purple"></div>
                <div className={styles.point} data-type="red"></div>
                <div className={styles.line} data-type="red"></div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.line} data-type="blood"></div>
                <div className={styles.line} data-type="blue"></div>
                <div className={styles.line} data-type="horizontal-guide-right"></div>
                <div className={styles.measureLabel} data-type="horizontal-guide-left">18 cm</div>
                <div className={styles.line} data-type="vertical-guide-right"></div>
                <div className={styles.line} data-type="vertical-arrow-right"></div>
                <span className={styles.measureLabel} data-type="vertical-arrow-right">21cm</span>
                <div className={styles.line} data-type="blood-curve-right"></div>
                <div className={styles.point} data-type="blood"></div>
                <div className={styles.point} data-type="blue"></div>
              </div>
            </div>
          </div>
          <p className={styles.diagramDescription}>
            En el cuadrado que se forma por el cruce de ambas líneas vamos a trabajar un <span className={styles.underline}>punto de referencia este será la mitad de ese cuadrado.</span> Luego uniremos el punto del borde superior de la curva del cuello hacia el punto de referencia en la mitad del cuadrado marcando otra línea con <span className={styles.underline}>la medida del ancho de hombro</span> en la parte delantera (en este caso 12cm).
          </p>
          <div className={styles.baseRectangles}>
          <div className={styles.rectangleContainer}>
              <div className={styles.rectangle}>
                <div className={styles.line} data-type="green-to-purple"></div>
                <div className={styles.line} data-type="horizontal-guide-left"></div>
                <div className={styles.line} data-type="vertical-guide-left"></div>
                <div className={styles.point} data-type="green"></div>
                <div className={styles.line} data-type="blue-to-purple"></div>
                <div className={styles.measureLabel} data-type="blue-conn">12 cm</div>
                <div className={styles.point} data-type="purple"></div>
                <div className={styles.line} data-type="green"></div>
                <div className={styles.line} data-type="purple"></div>
                <div className={styles.point} data-type="red"></div>
                <div className={styles.line} data-type="red"></div>
                <div className={styles.point} data-type="blue-dot"></div>
                <div className={styles.point} data-type="blue-dot-conn"></div>
              </div>
            </div>
          </div>
          <div className={styles.alert}>
            <strong>Importante:</strong> La medida del ancho de espalda (36cm) se divide en dos partes iguales (18cm cada una) y se aplica simétricamente desde el centro hacia los costados, tanto en la parte trasera como en la delantera.
          </div>
        </div>
      </section>
    </div>
  );
}