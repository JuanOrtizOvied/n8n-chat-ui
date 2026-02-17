/* ============================================
   CONFIGURATION
   ============================================ */

export const CHAT_CONFIG = {
  n8nChatUrl: "https://staging-n8n.sabbi.com/webhook/6bdc87ec-614b-461f-b197-86778d28e2ef/chat",
  theme: {
    button: {
      iconColor: "#373434",
      backgroundColor: "#ffc8b8",
    },
    allowProgrammaticMessage: true,
    chatWindow: {
      borderRadiusStyle: "rounded",
      avatarBorderRadius: 25,
      messageBorderRadius: 6,
      showTitle: true,
      title: "Sabbi Wan-kenobi",
      titleAvatarSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
      avatarSize: 40,
      welcomeMessage: "Bienvenido/a.  \n Antes de hablar de activos, retornos o mercados, queremos entender algo más importante: cómo piensas y decides cuando inviertes.  \n Tu filosofía de inversión no se trata solo de números, sino de convicciones, tolerancia al riesgo, horizonte y las experiencias que han moldeado tu forma de ver las oportunidades.  \n A continuación, te haremos algunas preguntas breves para ayudarte a aterrizar esa visión y transformar tus ideas en una filosofía clara, coherente y accionable.",
      errorMessage: "Please connect me to n8n first",
      backgroundColor: "#ffffff",
      height: 0,
      width: 0,
      fontSize: 16,
      starterPrompts: [],
      starterPromptFontSize: 15,
      renderHTML: false,
      clearChatOnReload: false,
      showScrollbar: false,
      botMessage: {
        backgroundColor: "#f36539",
        textColor: "#fafafa",
        showAvatar: true,
        avatarSrc: "https://www.svgrepo.com/show/334455/bot.svg",
        showCopyToClipboardIcon: true,
      },
      userMessage: {
        backgroundColor: "#fff6f3",
        textColor: "#050505",
        showAvatar: true,
        avatarSrc: "https://www.svgrepo.com/show/532363/user-alt-1.svg",
      },
      textInput: {
        placeholder: "Type your query",
        backgroundColor: "#ffffff",
        textColor: "#1e1e1f",
        sendButtonColor: "#f36539",
        maxChars: 50000,
        maxCharsWarningMessage: "You exceeded the characters limit. Please input less than 50 characters.",
        autoFocus: true,
        borderRadius: 6,
        sendButtonBorderRadius: 50,
      },
      voiceInputConfig: {
        enabled: true,
        maxRecordingTime: 600,
        recordingNotSupportedMessage: "To record audio, use modern browsers like Chrome or Firefox that support audio recording",
      },
    },
  },
};

// Default categories
const DEFAULT_CATEGORIES = [
  { value: "martin", label: "Martín" },
  { value: "ale_bre", label: "Alessandro" },
];

// Sales chat history - initial messages
const SALES_CHAT_HISTORY = {
  chatHistory: [
    {
      "message": "Viendo que has construido un portafolio donde el peso está claramente en activos alternativos, reales y poco dependientes del mercado público, ¿qué es lo que estás priorizando de verdad como inversionista: maximizar retornos, reducir la volatilidad visible, ejercer mayor control sobre tus decisiones… o algo más profundo que eso?",
      "type": "apiMessage"
    },
    {
      "message": "Esta preferencia que tengo por alternativo se debe a diferentes puntos en realidad. O sea, el primero es que, bueno, pienso que los mercados públicos están con valuaciones super altas en general. Entonces, probablemente, entonces, algo más normal. Tendría un poco más de concentración en mercados públicos. Pero, bueno, dadas las valuaciones de hoy, siento que no es un momento para estar agresivamente posicionado en mercados públicos. Lo segundo es que siento que, nuevamente, los últimos 20 años ha habido esta subida interesante, digamos, este aumento brutal en la cantidad de inversionistas que pueden acceder a los mercados públicos a raíz de todo lo que se ha inventado en cuestión de tecnología como ETFs, ¿no? Igual como brokers, robo-advisors, que hacen mucho más fácil y barata la inversión para el inversor de API, ¿no? Entonces, hay mucho más plata en el mercado persiguiendo menores oportunidades. ¿Por qué? Porque la cantidad de empresas en los mercados públicos no ha aumentado de manera sustancial, es más, ha disminuido en los últimos años. Entonces, creo que hay más plata persiguiendo más oportunidades. Y eso ha hecho que las valuaciones suban. Creo que, creo, digamos, en la, entonces, el segundo punto. El tercer punto es que sí creo en la capacidad de generación de valor de los managers en mercados privados. Sí reconozco que usualmente cobran fees caros por eso, pero creo que hoy por hoy la gente más capaz en el mundo de las finanzas está justamente en estos managers de mercados privados. Entonces, sí creo que tienen capacidad de escoger los ganadores, ¿no? De cierta forma y generar retornos mejores que el mercado, ¿no? Esa es la tercera. La cuarta es que creo que se puede venir con la tecnología de blockchain y todo lo que está pasando alrededor de eso. Tokenización de fondos. Entonces, siento que va a haber, sí, de cierta forma una democratización de los mercados privados. Y que nuevamente va a entrar más capital de inversores que antes no estaban acostumbrados a invertir en mercados privados, como ya se está dando con los fondos semilíquidos. Y eso, digamos, va a generar algo más de volatilidad, es cierto, pero probablemente va a generar este efecto de más capital persiguiendo menos oportunidades y subida de precios en general también, ¿no? Entonces, creo que esa dinámica todavía puede ser favorable para los mercados privados en los años que se vienen. Y, finalmente, sí prefiero activos, o sea, en quinto lugar, pero tal vez es uno de los principales motivos es que prefiero activos que estén menos correlacionados entre sí, ¿no? Siento que en mercados públicos todo tiene una correlación muy alta y que se puede conseguir una menor correlación real con mercados privados invirtiendo en asset classes que tienen comportamientos bastante distintos o contrarios inclusive, ¿no? Igual, digamos, con algunos activos reales o con esa especie de Club Deals que suelen estar menos correlacionados con lo que pasa en los mercados en general.",
      "type": "userMessage",
      "fileUploads": [],
      "dateTime": "2026-02-05T05:55:23.682Z"
    },
    {
      "followUpPrompts": [],
      "message": "Viendo que tienes una concentración muy alta en alternativos y Club Deals y poco en mercados públicos, si tuvieras que resumir en una sola frase cuál es la apuesta o tesis central que estás haciendo con este portafolio hoy, ¿cómo la definirías?",
      "type": "apiMessage",
      "dateTime": "2026-02-05T05:56:31.902Z",
      "attachments": []
    },
    {
      "message": "Los mercados privados en el largo plazo van a tener un mejor comportamiento que los mercados públicos con retornos más descorrelacionados entre sí y más estables. Esa es mi gran apuesta, creo, en el análisis que estoy haciendo. Igual considero que el portafolio es un portafolio diversificado en general, porque si bien mercados privados es la posición más grande y comparativamente, digamos, los portafolios recomendados de las principales bancas o asesores de inversiones está basado en los mercados privados. Tengo bastantes otras posiciones, como en Club Deals, en propiedades, bueno, yo vivo en mercados públicos, que espero que me genere una descorrelación real y más estabilidad en el largo plazo. O sea que es un portafolio más estilo all weather.",
      "type": "userMessage",
      "fileUploads": [],
      "dateTime": "2026-02-05T05:58:23.682Z"
    },
    {
      "followUpPrompts": [],
      "message": "Tu portafolio tiene una exposición muy alta a activos ilíquidos (propiedades, alternativos y Club Deals) y muy baja a renta fija y liquidez, pero al mismo tiempo lo describes como “diversificado” y de estilo “all weather”; cuando piensas en estabilidad, ¿a qué tipo de estabilidad te refieres exactamente?",
      "type": "apiMessage",
      "dateTime": "2026-02-05T05:59:31.902Z",
      "attachments": []
    },
    {
      "message": "Mi liquidez en el portafolio por retornos de largo plazo. Mi portafolio, vale la pena que hagáis un portafolio de largo plazo. Yo no necesito la liquidez del portafolio para mis gastos corrientes. Tengo un negocio que genera dividendos y, es más, estoy constantemente incrementando el portafolio. Pero sí es importante resaltar que más o menos dos terceras partes de mi portafolio en activos alternativos es en fondos semilíquidos. Y la gran mayoría de estos ya pasaron sus periodos de lockout. Entonces, si bien no son tan líquidos evidentemente como los mercados públicos, no es que tengan cero liquidez, sino tienen cierta liquidez limitada. Y como dije, yo no tengo esta necesidad de liquidez en el corto plazo. Entonces, si quisiera, digamos, estabilidad en retornos de largo plazo, tal vez a lo que estoy escapando un poco es a esta volatilidad de los mercados públicos ya estar entrando cuando siento que las volatilidades están demasiado altas. Como mencioné al principio, sí, mi idea es aumentar, tal vez duplicar, digamos, la cantidad de mercados públicos cuando sienta que las valuaciones estén en niveles más razonables.",
      "type": "userMessage",
      "fileUploads": [],
      "dateTime": "2026-02-05T06:01:23.682Z"
    },
    {
      "followUpPrompts": [],
      "message": "¿Qué posición o bloque de activos de tu portafolio dirías que más te representa y sobre la que tienes hoy la mayor convicción?",
      "type": "apiMessage",
      "dateTime": "2026-02-05T06:02:31.902Z",
      "attachments": []
    },
    {
      "message": "A pesar de que mi posición principal son los mercados privados, de hecho, el rendimiento de mi portafolio depende principalmente, creo, de cómo le vayan a estos mercados privados. Creo que lo que más me representa, sobre todo por el nivel de conocimiento que tengo, son los Club Deals en el mercado inmobiliario. Entonces, sí, una buena parte de mi portafolio está invertido, digamos, en Club Deals en el mercado inmobiliario porque, bueno, llevo trabajando en la industria muchísimos años y conozco bien el mercado, y siento que sí tengo este insight para tomar decisiones que generen una tasa alta de retorno y estando descorrelacionados con los mercados en general.",
      "type": "userMessage",
      "fileUploads": [],
      "dateTime": "2026-02-05T06:03:23.682Z"
    },
    {
      "followUpPrompts": [],
      "message": "Cuando uno de tus fondos privados o Club Deals deja de gustarte (porque cambia el ciclo, el manager, el riesgo país o tu tesis), ¿qué criterio concreto usas para decidir: “me quedo hasta el final del vehículo” vs “acepto un descuento / iliquidez y salgo o reduzco”?",
      "type": "apiMessage",
      "dateTime": "2026-02-05T06:04:31.902Z",
      "attachments": []
    },
    {
      "message": "Creo que depende de como veo el Deal a futuro. Ya olvidándome de lo que ha pasado hasta el momento, cuál es el retorno que esperaría el futuro considerando el descuento que tengo en mano. Y en base a eso tomo la decisión. Y en base también, obviamente, a la nueva situación de mercado y a cómo está mi portafolio y cómo se encuentra que tan grande es esta posición, cómo se correlaciona con las otras posiciones que tengo. Entonces, no creo que depende de una sola cosa, pero básicamente la decisión tiene que ver idealmente con cómo ves el retorno a futuro del Club Deal o la inversión en el fondo privado ya considerando el descuento que tienes en mano versus las otras alternativas que tienes disponibles y sobre todo sobre la composición general de tu portafolio.",
      "type": "userMessage",
      "fileUploads": [],
      "dateTime": "2026-02-05T06:05:23.682Z"
    },
    {
      "followUpPrompts": [],
      "message": "¿Quieres que haga 4 preguntas más para afinar tu filosofía de inversión o prefieres que ya la genere?",
      "type": "apiMessage",
      "dateTime": "2026-02-05T06:06:31.902Z",
      "attachments": []
    },
    {
      "message": "Generala ya",
      "type": "userMessage",
      "fileUploads": [],
      "dateTime": "2026-02-05T06:07:23.682Z"
    },
    {
      "followUpPrompts": [],
      "message": "## PRINCIPIOS FUNDAMENTALES  \n\n1. **\u201cPrimero los mercados privados, luego los p\u00fablicos.\u201d**  \n   Tu portafolio est\u00e1 construido sobre la convicci\u00f3n de que, en el largo plazo, los mercados privados ofrecer\u00e1n mejores retornos que los p\u00fablicos, con trayectorias m\u00e1s estables y menos correlacionadas entre s\u00ed. Los mercados p\u00fablicos son importantes, pero hoy cumplen un rol m\u00e1s t\u00e1ctico y oportunista que central.\n\n2. **\u201cLa descorrelaci\u00f3n es un objetivo expl\u00edcito, no un subproducto.\u201d**  \n   No buscas solo activos con buen retorno esperado, sino activos que *no se muevan igual entre ellos*: real estate, infraestructura, private credit, hedge funds, Club Deals y algo de cripto para escapar de la \u201ccorrelaci\u00f3n total\u201d que percibes en bolsa global.\n\n3. **\u201cInvierto donde tengo edge; donde no, alquilo el talento.\u201d**  \n   - Tienes *ventaja real* en un nicho espec\u00edfico de real estate peruano y ah\u00ed concentras Club Deals inmobiliarios de alta convicci\u00f3n.  \n   - En mercados privados fuera de tu zona de expertise, aceptas que no eres el que va a \u201cdescubrir al genio desconocido\u201d y prefieres ir con managers grandes y probados, aspirando a retornos s\u00f3lidos (segundo cuartil) antes que al decil top con riesgo de blow-up.\n\n4. **\u201cAcepto la iliquidez a cambio de control del tiempo y estabilidad de trayectoria.\u201d**  \n   Tu portafolio no est\u00e1 dise\u00f1ado para financiar gastos corrientes: eso lo hace tu negocio. Por eso puedes abrazar:  \n   - fondos privados y semil\u00edquidos,  \n   - lockups ya liberados,  \n   - Club Deals il\u00edquidos,  \n   a cambio de menos volatilidad mark-to-market y mayor foco en retornos compuestos de largo plazo.\n\n5. **\u201cLa disciplina viene por el ciclo y las valuaciones, no por el FOMO.\u201d**  \n   Est\u00e1s conscientemente subexpuesto a mercados p\u00fablicos, especialmente EE. UU., porque ves valuaciones exigentes tras un ciclo largo y mucha liquidez persiguiendo pocos activos listados. Prefieres entrar con m\u00e1s fuerza en bolsa cuando las valuaciones regresen a rangos m\u00e1s razonables o tras una correcci\u00f3n importante.\n\n6. **\u201cAll weather a mi manera: soportar cualquier clima sin ser forzado a vender.\u201d**  \n   Tu versi\u00f3n de portafolio \u201call weather\u201d no es tener todo l\u00edquido y ultra diversificado, sino:  \n   - un motor central de mercados privados y reales,  \n   - una capa t\u00e1ctica de mercados p\u00fablicos,  \n   - Club Deals donde tienes edge,  \n   - suficiente cash y semiliquidez para nunca ser un vendedor forzado.\n\n---\n\n## OBJETIVOS DE INVERSI\u00d3N  \n\n1. **Horizonte y rol del portafolio**  \n   - Horizonte claramente de largo plazo, medido en d\u00e9cadas.  \n   - El portafolio **no est\u00e1 dise\u00f1ado para financiar tu costo de vida actual**; eso lo cubren tu negocio y sus dividendos.  \n   - El portafolio es tu motor de acumulaci\u00f3n patrimonial de largo plazo y tu forma de participar en la revalorizaci\u00f3n de activos reales y privados a nivel global.\n\n2. **Meta de retorno y protecci\u00f3n real**  \n   - Buscas retornos **reales**, claramente por encima de inflaci\u00f3n, m\u00e1s cercanos a un portafolio de crecimiento que a uno de preservaci\u00f3n.  \n   - Real estate, infraestructura y parte de private credit funcionan como **ancla de protecci\u00f3n contra inflaci\u00f3n**, sin renunciar a upside.\n\n3. **Estabilidad entendida como \u201csuavizar la trayectoria\u201d, no evitar p\u00e9rdidas temporales**  \n   - No te preocupa ver fluctuaciones marcadas en pantalla; te preocupa m\u00e1s la **consistencia del retorno compuesto**.  \n   - Prefieres que la valoraci\u00f3n de tus activos no est\u00e9 sometida al ruido diario de mercado, aunque el riesgo econ\u00f3mico subyacente sea similar.\n\n4. **Aprovechar una ventana de oportunidad estructural en mercados privados**  \n   - Tu tesis incorpora la **democratizaci\u00f3n futura de los mercados privados** (tokenizaci\u00f3n, semil\u00edquidos, mayor acceso minorista).  \n   - Quieres estar bien posicionado *antes* de que entre masivamente ese nuevo capital y comprima retornos.\n\n---\n\n## ESTRATEGIA / METODOLOG\u00cdA  \n\nTu metodolog\u00eda se ordena en cuatro bloques, tal como t\u00fa mismo la definiste: **propiedades directas, mercados p\u00fablicos, mercados privados y Club Deals**, con algunos sat\u00e9lites (cripto, commodities, cash).\n\n### 1. Propiedades directas  \n\n**Qu\u00e9 rol juegan:**\n\n- Protecci\u00f3n frente a inflaci\u00f3n y devaluaci\u00f3n, con un activo tangible.\n- Base \u201creal\u201d del portafolio sobre la que entiendes muy bien el riesgo.\n- Complemento de estabilidad frente al resto de alternativos.\n\n**C\u00f3mo est\u00e1s posicionado hoy:**\n\n- Concentraci\u00f3n en **Per\u00fa residencial y oficinas**, sin comercial/industrial ni propiedades fuera del pa\u00eds.  \n- Comparado con el portafolio promedio, tu peso en propiedades directas puras es algo menor, pero si sumas real estate v\u00eda fondos e infraestructura, tu *exposici\u00f3n inmobiliaria total* es claramente m\u00e1s alta.\n\n**Tensi\u00f3n declarada:**  \nT\u00fa mismo reconoces que te sientes **sobreexpuesto al asset class inmobiliario** y que te gustar\u00eda reducir gradualmente ese peso, sobre todo en la parte menos estrat\u00e9gica o menos diferenciada.\n\n**Lectura conceptual:**  \n- Tu edge en real estate peruano es real y justifica una sobreponderaci\u00f3n frente al inversor promedio.  \n- La clave ser\u00e1 separar:  \n  - el **n\u00facleo inmobiliario estrat\u00e9gico** (inflaci\u00f3n + conocimiento profundo),  \n  - de los excesos t\u00e1cticos acumulados por oportunidad o inercia.\n\n---\n\n### 2. Mercados p\u00fablicos  \n\n**Rol estrat\u00e9gico:**\n\n- Pilar importante de cualquier cartera, pero hoy en tu caso es un **pilar secundario en tama\u00f1o** frente a alternativos.  \n- Herramienta para:\n  - capturar crecimiento global a bajo costo v\u00eda ETFs,  \n  - mantener una franja de liquidez,  \n  - rebalancear cuando haya correcciones fuertes.\n\n**C\u00f3mo inviertes:**\n\n- **Renta variable dominante** frente a renta fija, coherente con tu horizonte largo.  \n- Preferencia clara por **exposici\u00f3n pasiva v\u00eda ETFs**, porque:\n  - no crees que haya mucho valor en management activo de bolsa,  \n  - no te consideras con edge para generar alfa ah\u00ed.  \n- Sesgo actual hacia **mercados desarrollados ex-EE. UU. y emergentes**, con menor peso relativo en US Large Cap que el portafolio promedio, precisamente por tu visi\u00f3n de sobrevaluaci\u00f3n en EE. UU.  \n- Renta fija p\u00fablica cumple un rol marginal: prefieres obtener la prima de rendimiento y complejidad a trav\u00e9s de **private credit** y otros alternativos.\n\n**Comparado con el portafolio promedio:**\n\n- El portafolio promedio tiene a los mercados p\u00fablicos como su **columna vertebral**.  \n- En tu caso, son un **complemento t\u00e1ctico**: hoy est\u00e1s deliberadamente por debajo de lo que considerar\u00edas \u201cnormal\u201d, con la intenci\u00f3n expl\u00edcita de **aumentar fuerte** tu exposici\u00f3n cuando las valuaciones se normalicen (tu planned \u201cdoble\u201d exposici\u00f3n futura).\n\n---\n\n### 3. Mercados privados y alternativos  \n\nEste es el **coraz\u00f3n econ\u00f3mico** de tu portafolio.\n\n**Subbloques clave y su rol:**\n\n- **Private Equity**  \n  - Motor principal de crecimiento de capital a largo plazo.  \n  - Apuestas a la capacidad de los grandes managers de seleccionar ganadores y crear valor operativo.  \n  - En tu visi\u00f3n, aqu\u00ed est\u00e1 hoy la \u201cgente m\u00e1s capaz del mundo financiero\u201d.\n\n- **Venture Capital**  \n  - Componente de riesgo m\u00e1s alto y opcionalidad a largo plazo.  \n  - Lo entiendes como un porcentaje m\u00e1s acotado, complementando al private equity tradicional.\n\n- **Private Credit**  \n  - Fuente de flujos y retornos atractivos con menor volatilidad aparente que equity.  \n  - Has aprovechado un ciclo donde los retornos de deuda privada han sido tan altos que, por momentos, la prima de private equity no se justificaba.  \n  - Tu propia filosof\u00eda reconoce que **eso est\u00e1 cambiando**, y que tender\u00e1s a mover la mezcla hacia algo m\u00e1s parecido a tu l\u00f3gica 80/20 (equity/deuda) que tienes mentalmente tambi\u00e9n para mercados p\u00fablicos.\n\n- **Real Estate e Infraestructura (v\u00eda fondos)**  \n  - Capas adicionales de activos reales que:  \n    - protegen frente a inflaci\u00f3n,  \n    - generan flujos razonablemente estables,  \n    - agregan diversificaci\u00f3n sectorial y, en algunos casos, geogr\u00e1fica.\n\n- **Hedge Funds**  \n  - Herramienta de **baja correlaci\u00f3n** con mercados p\u00fablicos y, en parte, con otros privados.  \n  - Has dicho que probablemente aumentar\u00e1n en importancia cuando subas tu exposici\u00f3n a mercados p\u00fablicos, para amortiguar la volatilidad agregada.\n\n**Forma de ejecuci\u00f3n: manager selection:**\n\n- Eres muy consciente de que en privados el alfa depende cr\u00edticamente del gestor.  \n- Tu regla impl\u00edcita:  \n  - priorizar **managers grandes y probados**,  \n  - aceptar retornos de \u201csegundo cuartil superior\u201d como excelente resultado ajustado por riesgo,  \n  - renunciar deliberadamente al sue\u00f1o de encontrar el \u201cmanager peque\u00f1o estrella\u201d que casi nadie conoce.  \n- Esto refleja una sofisticaci\u00f3n poco com\u00fan: entiendes que **el riesgo de equivocarte en el outlier puede destruir a\u00f1os de buena selecci\u00f3n en managers s\u00f3lidos**.\n\n**Estructura de liquidez:**\n\n- Una parte importante de estos alternativos est\u00e1 en **fondos semil\u00edquidos**, la mayor\u00eda ya fuera de lockup inicial.  \n- Aunque aceptas la iliquidez estructural, construyes un corredor de liquidez peri\u00f3dica que te permite maniobrar sin vender en p\u00e1nico.\n\n**Comparado con el portafolio promedio:**\n\n- Tu peso en alternativos es **claramente mayor** que el del portafolio promedio, no por desconocimiento de la ortodoxia sino por una tesis *intencional*:  \n  - infravaloraci\u00f3n relativa (todav\u00eda) de privados vs p\u00fablicos,  \n  - superioridad del talento concentrado en gestores privados,  \n  - efecto futuro de democratizaci\u00f3n que encarecer\u00e1 estos activos.\n\n---\n\n### 4. Club Deals  \n\n**Definici\u00f3n en tu filosof\u00eda:**  \nNo son \u201cun tipo m\u00e1s de fondo privado\u201d, sino una **categor\u00eda propia**:\n\n- Proyectos espec\u00edficos (real estate, deuda privada, otros sectores) donde:  \n  - el n\u00famero de inversionistas es reducido,  \n  - est\u00e1s m\u00e1s cerca del gestor y de la operaci\u00f3n,  \n  - hay menos capas de fees,  \n  - y, sobre todo, existe **un edge de conocimiento concreto** (tuyo o de personas en las que conf\u00edas).\n\n**Rol estrat\u00e9gico:**\n\n- Espacio para **convicciones altas y retornos esperados superiores**, a cambio de:  \n  - m\u00e1s concentraci\u00f3n por inversi\u00f3n,  \n  - m\u00e1s riesgo idiosincr\u00e1tico y operacional,  \n  - menor liquidez.  \n- Lo ves como un bloque **descorrelacionado incluso respecto del resto de mercados privados**, porque la tesis se apoya en situaciones muy puntuales, no en la beta de un asset class.\n\n**Tu edge particular:**\n\n- En real estate peruano, llevas muchos a\u00f1os operando y gestionando fondos.  \n- Tus Club Deals inmobiliarios son, probablemente, la parte del portafolio que m\u00e1s te representa:  \n  - all\u00ed combinas conocimiento profundo,  \n  - capacidad de evaluar el proyecto de primera mano,  \n  - y convicci\u00f3n suficiente para exigir una tasa de retorno claramente superior a la de tus fondos diversificados.\n\n**Comparado con el portafolio promedio:**\n\n- El portafolio promedio incluye Club Deals como complemento moderado.  \n- En tu caso, su peso es **m\u00e1s relevante** y, sobre todo, mucho m\u00e1s concentrado en lo que conoces. No es \u201cpicoteo oportunista\u201d: es un laboratorio de convicci\u00f3n controlada.\n\n---\n\n### 5. Otros sat\u00e9lites: cripto, commodities y cash  \n\n- **Cripto:**  \n  - Peso mayor que el portafolio promedio.  \n  - Lo utilizas como opcionalidad a largo plazo sobre la tesis de blockchain, tokenizaci\u00f3n y disrupci\u00f3n financiera.  \n  - Encaja con tu visi\u00f3n de futura democratizaci\u00f3n de activos privados y tokenizaci\u00f3n de fondos.\n\n- **Commodities:**  \n  - Rol marginal, pero con funci\u00f3n clara de cobertura macro (inflaci\u00f3n, shocks geopol\u00edticos).\n\n- **Cash:**  \n  - Nivel de caja similar al promedio, pero con una funci\u00f3n distinta:  \n    - no para \u201csentirte seguro\u201d,  \n    - sino para tener **dry powder** que te permita actuar cuando:  \n      - haya correcciones fuertes en bolsa,  \n      - encuentres segundas rondas o ofertas secundarias en fondos privados a descuento,  \n      - surjan Club Deals que justifiquen mover ficha r\u00e1pido.\n\n---\n\n## GESTI\u00d3N DEL RIESGO  \n\nTu gesti\u00f3n de riesgo es sofisticada y m\u00e1s cualitativa que basada en m\u00e9tricas est\u00e1ndar, pero con ideas claras.\n\n### 1. Riesgo de iliquidez  \n\n- Lo **aceptas conscientemente** porque tu flujo del negocio te permite no vender.  \n- Mitigas ese riesgo con:  \n  - uso de fondos semil\u00edquidos,  \n  - diversificaci\u00f3n de vencimientos y periodos de lockup,  \n  - una base en mercados p\u00fablicos y cash que act\u00faa como colch\u00f3n.  \n- Tu criterio operativo: nunca comprometer m\u00e1s de lo que podr\u00edas aceptar ver \u201ccongelado\u201d durante un ciclo completo adverso.\n\n### 2. Riesgo de concentraci\u00f3n (real estate Per\u00fa y Club Deals)  \n\n- Existe una tensi\u00f3n clara:  \n  - tu principal edge est\u00e1 en real estate peruano,  \n  - pero tambi\u00e9n reconoces sentirte sobreexpuesto a ese mismo asset class.  \n- La forma saludable en que lo procesas es:  \n  - distinguir entre **riesgo que entiendes y controlas** vs **riesgo sist\u00e9mico pa\u00eds/sector** que no controlas,  \n  - limitar el tama\u00f1o relativo de cada Club Deal para que ning\u00fan proyecto individual pueda da\u00f1ar de forma desproporcionada el conjunto.\n\n### 3. Riesgo de manager en mercados privados  \n\n- Lo gestionas renunciando al mito del \u201cmanager estrella peque\u00f1o\u201d salvo en casos muy espec\u00edficos de Club Deals.  \n- Priorizas:  \n  - plataformas consolidadas,  \n  - equipos con experiencia en ciclos completos (no solo en \u00e9pocas de liquidez),  \n  - estructuras de fees y alineaci\u00f3n razonables.  \n- Aceptas conscientemente que esto te coloca m\u00e1s cerca del \u201csegundo cuartil consistente\u201d que del \u201ctop 5% con alta probabilidad de error de selecci\u00f3n\u201d.\n\n### 4. Riesgo de ciclo y valuaci\u00f3n  \n\n- En mercados p\u00fablicos, tu principal herramienta de riesgo es **la asignaci\u00f3n t\u00e1ctica**:  \n  - reduces exposici\u00f3n cuando percibes exuberancia y m\u00faltiplos muy por encima de la historia,  \n  - est\u00e1s preparado para aumentar de manera significativa tras una correcci\u00f3n o normalizaci\u00f3n de valuaciones.  \n- En privados, usas el mix equity/deuda y la selecci\u00f3n de vintages para navegar ciclos de cr\u00e9dito y de m\u00faltiplos de entrada.\n\n### 5. Riesgo de estar \u201cdemasiado poco\u201d en bolsa por demasiado tiempo  \n\n- Tu filosof\u00eda reconoce un peligro sutil:  \n  - esperar siempre \u201cla correcci\u00f3n perfecta\u201d puede dejarte estructuralmente subinvertido.  \n- Contrarrestas este sesgo manteniendo **una base m\u00ednima** en mercados p\u00fablicos a trav\u00e9s de ETFs globales, incluso cuando te parecen caros, y reservando los movimientos grandes para cambios claros de ciclo.\n\n### 6. Marco para decidir salidas en fondos y Club Deals  \n\nTu respuesta sobre cu\u00e1ndo salir revela una disciplina avanzada:\n\n- Ignoras el costo hundido y te preguntas:  \n  - \u201cA partir de hoy, considerando el descuento que tengo en mano y el entorno actual, \u00bfcu\u00e1l es el retorno esperado futuro de esta posici\u00f3n?\u201d  \n- Lo comparas contra:  \n  - nuevas oportunidades disponibles,  \n  - tu composici\u00f3n de portafolio (tama\u00f1o relativo y correlaci\u00f3n),  \n  - y el rol estrat\u00e9gico que esa posici\u00f3n sigue jugando o ya no.  \n\n---\n\n## DISCIPLINA Y SESGOS  \n\nTienes una disciplina de pensamiento clara, pero tambi\u00e9n algunos sesgos naturales que tu propia filosof\u00eda ayuda a contener.\n\n### Fortalezas disciplinarias  \n\n- Paciencia para **no sobreinvertir en bolsa** en fases de euforia.  \n- Humildad para **no sobreestimar tu capacidad de seleccionar managers** fuera de tu nicho.  \n- Capacidad de pensar en t\u00e9rminos de **retorno futuro esperado**, no de precio de compra.  \n- Uso consciente de **alternativos semil\u00edquidos** para equilibrar estabilidad y flexibilidad.\n\n### Sesgos potenciales  \n\n1. **\u201cHome bias sofisticado\u201d en real estate Per\u00fa:**  \n   - Justificado en parte por tu edge, pero con riesgo de sobreconcentraci\u00f3n pa\u00eds/sector.\n\n2. **Ilusi\u00f3n de estabilidad en privados:**  \n   - Sabes que la menor volatilidad reportada no significa menor riesgo real, pero tu portafolio tiende a preferir aquello que no cotiza a diario.\n\n3. **Sesgo a \u201cesperar la correcci\u00f3n ideal\u201d en mercados p\u00fablicos:**  \n   - Riesgo de incorporar demasiado market timing y quedar infraexpuesto si el mercado corrige menos o m\u00e1s tarde de lo que esperas.\n\nTu filosof\u00eda compensa estos sesgos con reglas de juego impl\u00edcitas. A continuaci\u00f3n las convertimos en **reglas accionables**.\n\n---\n\n### Reglas accionables (criterio + gatillo + l\u00edmite + monitoreo)\n\n1. **Regla del bloque inmobiliario total**  \n   - **Criterio:** distinguir entre aprovechar tu edge en real estate y asumir un riesgo pa\u00eds/sector excesivo.  \n   - **Gatillo:** al revisar tu portafolio, si la suma de propiedades directas, fondos de real estate, infraestructura y Club Deals inmobiliarios se convierte claramente en el bloque dominante frente a otros alternativos y mercados p\u00fablicos.  \n   - **L\u00edmite:** a partir de ese punto, no comprometer capital nuevo a proyectos inmobiliarios hasta que hayas equilibrado con aportes o decisiones hacia otros activos (private equity no inmobiliario, hedge funds, mercados p\u00fablicos).  \n   - **Qu\u00e9 monitorear:**  \n     - Distribuci\u00f3n del portafolio por *tipo de activo real* (inmobiliario vs otros reales vs financieros).  \n     - Exposici\u00f3n espec\u00edfica a Per\u00fa dentro de ese bloque.\n\n2. **Regla de entrada escalonada a mercados p\u00fablicos**  \n   - **Criterio:** evitar quedarte eternamente \u201cesperando la gran correcci\u00f3n\u201d.  \n   - **Gatillo:** cuando percibas que las valuaciones de acciones (especialmente en EE. UU.) han salido de la zona de euforia extrema \u2014por correcciones de precio, mejora en expectativas de beneficios o normalizaci\u00f3n de m\u00faltiplos respecto a su historia.  \n   - **L\u00edmite:** en lugar de hacer un gran movimiento de una sola vez, dividir el aumento de exposici\u00f3n a mercados p\u00fablicos en varias fases temporales (por ejemplo, aportes escalonados) para disminuir el riesgo de \u201ctiming perfecto\u201d.  \n   - **Qu\u00e9 monitorear:**  \n     - Evoluci\u00f3n de m\u00faltiplos agregados (CAPE, P/E forward) frente a historia.  \n     - Spreads de cr\u00e9dito y se\u00f1ales de estr\u00e9s financiero.  \n     - Tu exposici\u00f3n relativa a bolsa frente a alternativos.\n\n3. **Regla de elegibilidad para nuevos Club Deals**  \n   - **Criterio:** un Club Deal solo entra al portafolio si existe un edge claro y una prima de retorno evidente sobre tus fondos diversificados.  \n   - **Gatillo:** antes de comprometer capital, responder por escrito dos preguntas:  \n     1) \u201c\u00bfCu\u00e1l es exactamente mi ventaja aqu\u00ed (propia o v\u00eda socio) que no tendr\u00eda invirtiendo en un fondo grande?\u201d  \n     2) \u201c\u00bfPor qu\u00e9 espero que este proyecto rinda sustancialmente m\u00e1s que mis veh\u00edculos diversificados, despu\u00e9s de ajustar por su riesgo y concentraci\u00f3n?\u201d  \n   - **L\u00edmite:** ning\u00fan Club Deal individual debe ser tan grande que, si sale mal, comprometa la trayectoria global del portafolio. Y el conjunto de Club Deals debe seguir siendo un bloque importante pero acotado, no el n\u00facleo absoluto.  \n   - **Qu\u00e9 monitorear:**  \n     - N\u00famero de Club Deals activos y tama\u00f1o relativo de los mayores.  \n     - Cumplimiento de hitos de negocio vs plan original (ventas, ocupaci\u00f3n, covenants, etc.).  \n     - Calidad y frecuencia de la comunicaci\u00f3n del gestor.\n\n4. **Regla de selecci\u00f3n de managers privados**  \n   - **Criterio:** sostener el enfoque de \u201csegundo cuartil excelente\u201d en lugar de perseguir historias seductoras.  \n   - **Gatillo:** antes de invertir en un nuevo fondo privado, pasar un checklist m\u00ednimo:  \n     - \u00bfHa gestionado capital a trav\u00e9s de al menos un ciclo de estr\u00e9s serio?  \n     - \u00bfC\u00f3mo gana dinero el gestor y est\u00e1 alineado a tu resultado neto?  \n     - \u00bfEntiendes su proceso de inversi\u00f3n y de gesti\u00f3n de riesgos, no solo su track record?  \n   - **L\u00edmite:** solo una fracci\u00f3n acotada del bloque de privados puede ir a managers nuevos o de nicho; la mayor\u00eda debe estar en plataformas ya probadas.  \n   - **Qu\u00e9 monitorear:**  \n     - Evoluci\u00f3n de las m\u00e9tricas de cartera (defaults, write-offs, realizaciones).  \n     - Cambios en el equipo clave del manager.  \n     - Ajustes de estrategia que se alejen del mandato original.\n\n5. **Regla de revisi\u00f3n ex-ante para posibles salidas (fondos y Club Deals)**  \n   - **Criterio:** decidir con l\u00f3gica de *nuevo inversor*, no de *inversor atrapado*.  \n   - **Gatillo:**  \n     - cada vez que recibas una oferta secundaria,  \n     - o cuando haya un cambio material en ciclo, riesgo pa\u00eds, tesis del proyecto o en el manager.  \n   - **L\u00edmite:** si, al recalcular el retorno esperado desde hoy (ya incorporando el descuento o el precio impl\u00edcito de salida), ese retorno no supera de forma suficiente las alternativas nuevas disponibles \u2014y la posici\u00f3n ha dejado de ser clave para tu diversificaci\u00f3n\u2014 te das permiso para reducir o salir, incluso aceptando un descuento inc\u00f3modo.  \n   - **Qu\u00e9 monitorear:**  \n     - Retorno esperado futuro de cada veh\u00edculo vs nuevas oportunidades.  \n     - Tama\u00f1o relativo de esa posici\u00f3n en tu portafolio.  \n     - Su correlaci\u00f3n con el resto del portafolio (si todav\u00eda aporta algo \u00fanico o ya es redundante).\n\n---\n\n## Contradicciones y c\u00f3mo se integran en tu filosof\u00eda  \n\n1. **\u201cEstoy sobreexpuesto a real estate\u201d vs \u201cMi edge est\u00e1 en real estate peruano.\u201d**  \n   - Esto no es una incoherencia sino una tensi\u00f3n sana: reconoces que donde mejor juegas tambi\u00e9n est\u00e1s m\u00e1s expuesto.  \n   - La resoluci\u00f3n conceptual es:  \n     - mantener una *sobreponderaci\u00f3n intencional* en tu nicho de expertise,  \n     - pero vigilando que el bloque inmobiliario total no crezca sin control frente al resto de activos.\n\n2. **\u201cPortafolio all weather\u201d vs alta iliquidez estructural.**  \n   - Si se define all weather como \u201cpuedo vender todo ma\u00f1ana sin fricci\u00f3n\u201d, entonces tu portafolio no lo es.  \n   - Pero tu definici\u00f3n es distinta:  \n     - all weather es **no verte forzado a vender en el peor momento**,  \n     - y tener retornos m\u00e1s suaves en el tiempo gracias a menor exposici\u00f3n a p\u00e1nico de mercado.  \n   - Con tu flujo de negocio y el uso de semil\u00edquidos, esa versi\u00f3n de all weather es coherente.\n\n3. **\u201cNo me considero s\u00faper experto en managers\u201d vs alta concentraci\u00f3n en alternativos.**  \n   - Lo resuelves de forma madura:  \n     - concentras el esfuerzo de selecci\u00f3n en grandes plataformas con procesos robustos,  \n     - y reservas la b\u00fasqueda de valor idiosincr\u00e1tico para Club Deals donde s\u00ed hay conocimiento profundo (tuyo o de tu red).\n\nEn la construcci\u00f3n de esta filosof\u00eda he asumido, por coherencia con todo tu discurso y tu comportamiento efectivo, que cuando mencionas que \u201cno te sientes capacitado para tomar ciertas decisiones\u201d en tu nicho de real estate peruano se trata m\u00e1s de un lapsus de redacci\u00f3n que de una verdad literal; todo lo dem\u00e1s apunta a que **s\u00ed reconoces un edge claro en ese espacio** y lo aprovechas a trav\u00e9s de Club Deals y decisiones directas.\n\n---\n\n## REFLEXI\u00d3N FINAL  \n\nTu filosof\u00eda de inversi\u00f3n es la de alguien que ha decidido **jugar el juego largo** con convicciones claras:\n\n- Prefieres estar **del lado menos concurrido del barco**, en mercados privados y activos reales, antes que anclar tu patrimonio al flujo masivo que entra y sale de la bolsa todos los d\u00edas.  \n- Aceptas la iliquidez, las curvas de capital llamadas y la complejidad de los alternativos, a cambio de **mejor relaci\u00f3n riesgo-retorno y verdadera descorrelaci\u00f3n**.  \n- Reconoces con lucidez tus fortalezas (real estate peruano, entendimiento de alternativos) y tus l\u00edmites (stock picking en bolsa, selecci\u00f3n de managers de nicho sin informaci\u00f3n privilegiada), y dise\u00f1as tu portafolio alrededor de ese mapa de habilidades, no de un benchmark est\u00e1ndar.\n\nComparado con el portafolio promedio, el tuyo es menos \u201ctextbook\u201d y m\u00e1s **tesis personal ejecutada con rigor**:\n\n- sobreponderas alternativos, Club Deals y cripto por convicci\u00f3n,  \n- subponderas renta fija tradicional y mercados p\u00fablicos mientras las valuaciones no te convenzan,  \n- y usas los cuatro bloques (propiedades, p\u00fablicos, privados, Club Deals) como ejes estructurales, no como casillas que hay que llenar.\n\nTu desaf\u00edo, de aqu\u00ed en adelante, no es tanto cambiar de tesis como **refinar los l\u00edmites**:  \n- hasta d\u00f3nde llevar el peso inmobiliario total,  \n- c\u00f3mo y cu\u00e1ndo ir trasladando parte del portafolio hacia mercados p\u00fablicos a medida que el ciclo se normalice,  \n- y qu\u00e9 volumen de riesgo concentrado aceptar en Club Deals sin comprometer la estabilidad global.\n\nSi mantienes esta combinaci\u00f3n de convicci\u00f3n, humildad t\u00e9cnica y disciplina en la evaluaci\u00f3n ex-ante de cada decisi\u00f3n, tu portafolio seguir\u00e1 siendo, m\u00e1s que una colecci\u00f3n de activos, una expresi\u00f3n coherente de c\u00f3mo entiendes el riesgo, el tiempo y el juego de la inversi\u00f3n en el siglo XXI.",
      "type": "apiMessage",
      "dateTime": "2026-02-05T06:08:31.902Z",
      "attachments": []
    }
  ]
};

const STORAGE_KEY = 'sabbi_chat_categories';
const SELECTED_CATEGORY_KEY = 'sabbi_chat_selected_category';
const SALES_SESSION_KEY = 'martin-session-v2_CHAT';

// Load categories from localStorage or use defaults
export function getCategories() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading categories from localStorage:', error);
  }
  return DEFAULT_CATEGORIES;
}

// Save categories to localStorage
export function saveCategories(categories) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
    return true;
  } catch (error) {
    console.error('Error saving categories to localStorage:', error);
    return false;
  }
}

// Add a new category
export function addCategory(label) {
  const categories = getCategories();
  const value = label.toLowerCase().replace(/\s+/g, '-');

  // Check if category already exists
  if (categories.some(cat => cat.value === value)) {
    return { success: false, message: 'Category already exists' };
  }

  const newCategory = { value, label };
  categories.push(newCategory);

  if (saveCategories(categories)) {
    return { success: true, category: newCategory };
  }

  return { success: false, message: 'Failed to save category' };
}

// Save selected category to localStorage
export function saveSelectedCategory(category) {
  try {
    localStorage.setItem(SELECTED_CATEGORY_KEY, category);
    return true;
  } catch (error) {
    console.error('Error saving selected category:', error);
    return false;
  }
}

// Get last selected category from localStorage
export function getSelectedCategory() {
  try {
    return localStorage.getItem(SELECTED_CATEGORY_KEY);
  } catch (error) {
    console.error('Error loading selected category:', error);
    return null;
  }
}

// Clear selected category from localStorage
export function clearSelectedCategory() {
  try {
    localStorage.removeItem(SELECTED_CATEGORY_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing selected category:', error);
    return false;
  }
}

// ============================================
// SALES SESSION MANAGEMENT
// ============================================

// Get sales session data (chat history)
export function getSalesSession() {
  try {
    const stored = localStorage.getItem(SALES_SESSION_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading sales session:', error);
  }
  return null;
}

// Initialize sales session with history (first time only)
export function initializeSalesSession() {
  try {
    const existing = getSalesSession();

    // Only initialize if doesn't exist
    if (!existing) {
      localStorage.setItem(SALES_SESSION_KEY, JSON.stringify(SALES_CHAT_HISTORY));
      console.log('Sales session initialized with chat history');
      return true;
    }

    console.log('Sales session already exists');
    return false;
  } catch (error) {
    console.error('Error initializing sales session:', error);
    return false;
  }
}

// Save/update sales session data
export function saveSalesSession(chatHistory) {
  try {
    localStorage.setItem(SALES_SESSION_KEY, JSON.stringify(chatHistory));
    return true;
  } catch (error) {
    console.error('Error saving sales session:', error);
    return false;
  }
}

// Clear sales session data
export function clearSalesSession() {
  try {
    localStorage.removeItem(SALES_SESSION_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing sales session:', error);
    return false;
  }
}

// Initialize categories in localStorage if not present
export function initializeCategories() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    saveCategories(DEFAULT_CATEGORIES);
  }
}