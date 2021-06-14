import React, { Fragment } from "react";
import { MyNavbar } from "../component/my-navbar";
import { Footer } from "../component/footer";
import "../../styles/faq.scss";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export const Faq = () => {
	return (
		<Fragment>
			<MyNavbar />
			<div className="faq-container">
				<h1 className="faq-title">Preguntas Frecuentes</h1>
				<div className="preguntas">
					<Accordion className="accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className="preg-title">¿Cuál es nuestro objetivo?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="preg-answer">
								Nuestra misión siempre ha sido ofrecer experiencias inolvidables a nuestros viajeros y
								podemos decir con total seguridad que lo hemos conseguido! Quien se registra sabe que
								encontrará un servicio de calidad adaptado a sus exigencias.
								<br />
								<br />
								Muchas personas viajan por el mundo solas, por ese motivo creamos esta plataforma para
								que los usuarios puedan conocer otras personas interesadas en emprender un viaje, y de
								esta forma podrán realizar viajes en grupo a todos los fabulosos destinos que deseen
								conocer!
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className="preg-title">¿Sois una Agencia Online?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="preg-answer">
								SI, lo somos. Nuestro sistema de trabajo está pensado para que cómodamente desde nuestra
								aplicación, cada usuario que se registra pueda publicar una información detallada y
								fácil de consultar del destino, las fechas y las actividades que desean realizar.
								<br />
								Además estamos en continua evolución para proporcionar un servicio siempre más eficiente
								en lo que respecta a rapidez de respuesta, claridad, exhaustividad y herramientas
								tecnológicas.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className="preg-title">¿Cómo se reservan vuestros tours?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="preg-answer">
								Una vez que el usuario se ha registrado, puede proceder a proponer un viaje a través de
								su área personal, nosotros otorgamos todas las facilidades y herramientas técnologicas
								para que nuestros usuarios puedan no sólo proponer un viaje sino que también puedan
								comunicarse entre ellos para planificar la organización de la que será, sin lugar a
								dudas, su próxima aventura!
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className="preg-title">
								¿Vuestras salidas solo se realizan en fechas pre-establecidas?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="preg-answer">
								SI, los usuarios cuando proponen un viaje, deben indicar las fechas en las cuales desean
								realizarlo, se trata de una herramienta de organizacíon para la gestión no solo del
								alojamiento sino también de las actividades a disfrutar.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className="preg-title">¿Cúales son los destinos más propuestos?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="preg-answer">
								Depende de vostros!!! En la matoría de nuestros destinos la gente es muy amable y ayuda
								mucho al viajero y además hemos observado una tendencia creciente hacia pueblos, aldeas
								rurales o alojamientos en el campo, con lo cual la seguridad y tranquilidad está
								asegurada. Las medidas de seguridad que hay que tener en cuenta son las generales de
								cualquier viaje y cualquier destino.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className="preg-title">Trabajamos de forma simple e intuitiva</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className="preg-answer">
								Nuestros usuarios miran las propuestas de viajes en nuestra página Web y toman el primer
								contacto entre ellos a través del chat online; Para analizar las exigencias de cada
								usuario establecemos una serie de filtros, a través de los cuales pueden establecer su
								perfil así como sus gustos y preferencias a la hora de proponer un nuevo destino.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};
