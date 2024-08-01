import htmlicon from "../icons/web_db/html.svg";
import cssicon from "../icons/web_db/css.svg";
import bootstrapicon from "../icons/web_db/bootstrap.svg";
import bootswatchicon from "../icons/web_db/bootswatch.svg";
import nodeicon from "../icons/web_db/node.svg";
import reacticon from "../icons/web_db/react.svg";
import nexticon from "../icons/web_db/next.svg";
import nextwhiteicon from "../icons/web_db/nextwhite.svg";
import expressicon from "../icons/web_db/express.svg";
import expresswhiteicon from "../icons/web_db/expresswhite.svg";
import mysqlicon from "../icons/web_db/mysql.svg";
import sqlservericon from "../icons/web_db/sqlserver.svg";
import oracleicon from "../icons/web_db/oracle.svg";
import plsqlicon from "../icons/web_db/plsql.svg";
import mongodbicon from "../icons/web_db/mongodb.svg";
import saphanaicon from "../icons/web_db/saphana.svg";

import javaicon from "../icons/codding/java.svg";
import pythonicon from "../icons/codding/python.svg";
import javascripticon from "../icons/codding/javascript.svg";
import cicon from "../icons/codding/c.svg";
import cppicon from "../icons/codding/cpp.svg";
import csharpicon from "../icons/codding/csharp.svg";
import gamemakericon from "../icons/codding/gamemaker.svg";
import gamemakerwhiteicon from "../icons/codding/gamemakerwhite.svg";

import libraicon from "../icons/others/libra.svg";
import bashicon from "../icons/others/bash.svg";
import giticon from "../icons/others/git.svg";
import githubicon from "../icons/others/github.svg";
import netlifyicon from "../icons/others/netlify.svg";
import hsicon from "../icons/others/hs.svg";
import electronicaicon from "../icons/others/electronica.svg";
import officeicon from "../icons/others/office.svg";
import osticketicon from "../icons/others/osticket.svg";
import photoshopicon from "../icons/others/photoshop.svg";
import canvaicon from "../icons/others/canva.svg";
import powerbiicon from "../icons/others/powerbi.svg";
import wekaicon from "../icons/others/weka.svg";

import spaceinvaders from "../img/projects/space_invaders.jpg";
import bomberman from "../img/projects/bomberman.jpg";
import apreciacionestudiantil from "../img/projects/Apreciación-Estudiantil.jpg";

import az900icon from "../icons/certifications/az900.png";
import towaicon from "../icons/certifications/towa.png";
import ciscoicsicon from "../icons/certifications/ciscoics.png";

import profilepicture from "../img/me2.webp";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiMail, FiDownload, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaTelegram, FaWhatsapp} from "react-icons/fa";

export const headerIntroData = {
  title: {
    es: "Hola, soy Andrés",
    en: "Hi, I'm Andres",
  },
  subtitle: "Web & Game Developer",
  description: {
    es: (
      <>
        Soy apasionado del mundo de la tecnología y el diseño del mismo,
        autodidacta y amante del aprendizaje.
        <br />
        Me encanta el trabajo en equipo y ayudar a los demás, ya que siempre he
        sido de la idea que el conocimiento si no se transmite no sirve de nada.
      </>
    ),
    en: (
      <>
        I am passionate about the world of technology and its design,
        self-taught and a lover of learning.
        <br />I love teamwork and helping others, as I have always believed that
        knowledge is useless if it is not shared.
      </>
    ),
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contacto",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        es: "Mis proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  cv: {
    name: "Curriculum",
    label: {
      es: "Descargar CV",
      en: "Download CV",
    },
    icon: FiDownload,
    color: "secondary-btn",
  },
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Asesor de Programación",
    title_EN: "Programming Tutor",
    description:
      "Se dan asesorías y regularizaciones a alumnos de la carrera de sistemas que tengan problemas para entender las clases de programación o a alumnos que tengan algún problema de aprendizaje.",
    description_EN:
      "I provide tutoring and regularization for students in the systems engineering program who have trouble understanding programming classes or for students with any learning difficulties.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Java", icon: javaicon },
      { name: "Python", icon: pythonicon },
      { name: "MySQL", icon: mysqlicon },
      
    ],
    image: "",
    deploymenturl: "",
    githuburl: "",
    deploymentbutton: "",
    deploymentbutton_EN: "",
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },{
    title: "Artículo",
    title_EN: "Article",
    description:
      "Impacto de la Cuarentena de Covid-19 en la Salud Mental y Posible Causa de Depresión en las Personas.",
    description_EN:
      "Impact of the Covid-19 Quarantine on Mental Health and Possible Cause of Depression in People.",
    technologies: [
      { name: "Weka", icon: wekaicon },
    ],
    image: "",
    deploymenturl: "/files/Impacto_de_la_Cuarentena_de_Covid_19_en_la_Salud_Mental_y_Posible_Causa_de_Depresión_en_las_Personas.pdf",
    githuburl: "",
    deploymentbutton: "Ver Artículo",
    deploymentbutton_EN: "View Article",
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Space Invaders",
    title_EN: "Space Invaders",
    description:
      "El jugador controla un cañón su objetivo es destruir filas de extraterrestres invasores que van acercándose a la tierra cada vez más rápidamente a medida que el jugador va destruyendo a los enemigos.",
    description_EN:
      "The player controls a cannon with the goal of destroying rows of invading aliens that keep approaching Earth more quickly as the player continues to destroy the enemies.",
    technologies: [
      { name: "C", icon: cicon },
    ],
    image: spaceinvaders,
    deploymenturl: "",
    githuburl: "",
      deploymentbutton: "Ver Demo",
      deploymentbutton_EN: "Live Demo",
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Bomberman 3D",
    title_EN: "Bomberman 3D",
    description:
      "El juego pertenece al género de estrategia y laberintos, cuyo objetivo es matar a todos los enemigos que se presentan por nivel con bombas.",
    description_EN:
      "The game belongs to the strategy and maze genres, with the objective of killing all the enemies that appear in each level with bombs.",
    technologies: [
      { name: "GameMaker", icon: gamemakerwhiteicon },
      { name: "Photoshop", icon: photoshopicon },
    ],
    image: bomberman,
    deploymenturl: "",
    githuburl: "",
    deploymentbutton: "Ver Demo",
    deploymentbutton_EN: "Live Demo",
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  }, 
  {
    title: "Instrumento de Apreciación Estudiantil",
    title_EN: "Student Appreciation Instrument",
    description:
      "Sistema de encuestas a alumos sobre la forma de enseñanza del profesor y sobre el aprendizaje que han adquirido por las clases en el cual se busca la Correlación Estadística entre estos datos y saber si el profesor es un buen docente.",
    description_EN:
      "A survey system for students about the teaching methods of the professor and the learning they have acquired from the classes, aiming to find the statistical correlation between these data and determine if the professor is an effective teacher.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: "Bootswatch", icon: bootswatchicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Nodejs", icon: nodeicon },
      { name: "React", icon: reacticon },
      { name: "Next", icon: nextwhiteicon },
      { name: "Powert BI", icon: powerbiicon },
    ],
    image: apreciacionestudiantil,
    deploymenturl: "",
    githuburl: "https://github.com/AndresRP645/impacto-academico-2.0",
    deploymentbutton: "",
    deploymentbutton_EN: "",
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    es: "Mas proyectos en mi Github",
    en: "More Projects on my Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Web & DB",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: bootstrapicon,
        color: "#9600DF",
      },
      {
        title: "NodeJS",
        hash: "#NodeJS",
        icon: nodeicon,
        color: "#11EA8E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#2DD3F5",
      },
      {
        title: "Next",
        hash: "#Next",
        icon: [nexticon, nextwhiteicon],
        color: ["#000", "#FFF"],
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expresswhiteicon],
        color: ["#000", "#FFF"],
      },
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysqlicon,
        color: "#2DD3F5",
      },
      {
        title: "SQL Server",
        hash: "#SQLServer",
        icon: sqlservericon,
        color: "#FF512A",
      },
      {
        title: "Oracle",
        hash: "#Oracle",
        icon: oracleicon,
        color: "#FF54E8",
      },
      {
        title: "PL/SQL",
        hash: "#PLSQL",
        icon: plsqlicon,
        color: "#FF5432",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#2EFF00",
      },
      {
        title: "SapHana",
        hash: "#SapHana",
        icon: saphanaicon,
        color: "#00BDFF",
      },
    ],
  },
] as const;

export const skillsCodding = [
  {
    skillsTitle: "Programming",
    skills: [
      { title: "Java", 
        hash: "#Java", 
        icon: javaicon, 
        color: "#F24E1E" },
      {
        title: "Python",
        hash: "#Python", 
        icon: pythonicon,
        color: "#FF61F6",
      },
      { title: "JavaScript",  
        hash: "#JavaScript", 
        icon: javascripticon, 
        color: "#F7DF1E"
      },
      { title: "C",  
        hash: "#C",  
        icon: cicon, 
        color: "#006EE9"
      },
      { title: "C++",  
        hash: "#C++",  
        icon: cppicon, 
        color: "#006EE9"
      },
      { title: "C#",  
        hash: "#CSharp", 
        icon: csharpicon, 
        color: "#7100DB"
      },
      { title: "GameMaker",  
        hash: "#GameMaker",  
        icon: [gamemakericon, gamemakerwhiteicon],
        color: ["#000", "#FFF"]
      },
    ],
  },
] as const;

export const skillsOthers = [
  {
    skillsTitle: "Others",
    skills: [
      {
        title: "Libra ERP",
        hash: "#Libra",
        icon: libraicon,
        color: "#25BBE7",
      },{
        title: "Paquetería de office",
        hash: "#Office",
        icon: officeicon,
        color: "#DF5800",
      },
      {
        title: "Shell Windows & Linux",
        hash: "#Bash",
        icon: bashicon,
        color: "#868686",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: giticon,
        color: "#E96905",
      },
      {
        title: "Github",
        hash: "#Github",
        icon: githubicon,
        color: "#4600FF",
      },
      {
        title: "Netlify",
        hash: "#Netlify",
        icon: netlifyicon,
        color: "#00D2DC",
      },
      {
        title: "Hardware y Software",
        hash: "#hardwareSoftware",
        icon: hsicon,
        color: "#868686",
      },
      {
        title: "Circuitos Electrónicos",
        hash: "#Electronica",
        icon: electronicaicon,
        color: "#129941",
      },
      {
        title: "OsTicket",
        hash: "#OsTicket",
        icon: osticketicon,
        color: "#FF7C00",
      },
      {
        title: "Photoshop",
        hash: "#Photoshop",
        icon: photoshopicon,
        color: "#006CD8",
      },
      {
        title: "Canva",
        hash: "#Canva",
        icon: canvaicon,
        color: "#00E0FF",
      },
      {
        title: "Power BI",
        hash: "#PowerBI",
        icon: powerbiicon,
        color: "#FFC100",
      },
      {
        title: "Weka",
        hash: "#Weka",
        icon: wekaicon,
        color: "#0058BB",
      },
    ],
  },
] as const;

export const navLinks = [
  { es: "Inicio", en: "Home", hash: "#home", icon: GoHome },
  { es: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { es: "Cursos y Certificaciones", en: "Courses and Certifications", hash: "#certifications", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const sideBarRightMail = {
  link: "mailto:contacto@alex-rosewall.com.mx",
  text: "contacto@alex-rosewall.com.mx",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.facebook.com/AlexRosewall",
    icon: FiFacebook,
    altimgname: "facebook",
  },
  {
    link: "https://twitter.com/alex_rosewall",
    icon: FiTwitter,
    altimgname: "twitter",
  },
  {
    link: "https://www.instagram.com/alex_rosewall/",
    icon: FiInstagram,
    altimgname: "instagram",
  },
  {
    link: "https://github.com/AndresRP645",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "https://www.linkedin.com/in/andru00e9s-rosales-paredes-a200b021b/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "mailto:andresrp645@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
  {
    link: "http://wa.me/525581807893/",
    icon: FaWhatsapp,
    altimgname: "whatsapp",
  },
  {
    link: "https://t.me/Alex_Rosewall",
    icon: FaTelegram,
    altimgname: "telegram",
  },
] as const;

export const quotesData = [
  {
    es: '"No es tan importante hacerlo bien la primera vez. Es de vital importancia hacerlo bien la última vez."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    es: '"La web es como un lienzo y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const certificationsData = {
  title: "Cursos y Certificaciones",
  title_EN: "Courses and Certifications",
  description: "Algunos cursos y certificaciones que he obtenido",
  description_EN: "Some courses and certifications I have obtained",
  paragraphs_ES: [
    {
      title: "Azure",
      description:
        "Certificación: AZ-900 Fundamentos de Microsoft Azure",
      icon: az900icon,
      link: "/files/ARP-Azure-AZ-900.pdf",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
    {
      title: "Towa Software",
      description:
        "Certificación:  Entrenamiento de ingenieros guerreros: desafío difícil (C# y Java)",
      icon: towaicon,
      link: "/files/ARP-EngineerWarriorTraining.pdf",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
    {
      title: "Towa Software",
      description:
        "Curso: Entrenamiento Cobol",
      icon: towaicon,
      link: "",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
    {
      title: "Cisco",
      description:
        "Curso: Introducción a la ciberseguridad",
      icon: ciscoicsicon,
      link: "",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
  ],
  paragraphs_EN: [
    {
      title: "Azure",
      description:
        "Certification: AZ-900 Microsoft Azure Fundamentals",
      icon: az900icon,
      link: "/files/ARP-Azure-AZ-900.pdf",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
    {
      title: "Towa Software",
      description:
        "Certification: Engineer Warrior Training - Hard Challenge (C# and Java)",
      icon: towaicon,
      link: "/files/ARP-EngineerWarriorTraining.pdf",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
    {
      title: "Towa Software",
      description:
        "Course: Training Cobol",
      icon: towaicon,
      link: "",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
    {
      title: "Cisco",
      description:
        "Course: Introduction to Cybersecurity",
      icon: ciscoicsicon,
      link: "",
      colors: {
        main: "main-btn",
        second: "secondary-btn",
        icon: "white",
        projectcolor: "#70B9BE",
      },
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Escríbeme un mensaje y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Nombre",
        en: "Name",
      },
      type: "text",
      validation: {
        es: "Por favor, pon tu nombre",
        en: "Please fill your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "Correo Electrónico",
        en: "E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, pon tu correo electrónico",
        en: "Please fill your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Asunto",
        en: "Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, por un asunto",
        en: "Please fill a subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Tu mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, escribe tu mensaje",
      en: "Please fill your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Acepto que Andrés pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that Andres may use my personal data (name and e-mail address) to contact me.",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    es: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
