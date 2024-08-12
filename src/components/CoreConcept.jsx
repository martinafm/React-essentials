export default function CoreConcept({image, title, description}) {
	return (
		<li>
			<img src={image} alt={title}></img>
			<h2>{title}</h2>
			<p>{description}</p>
		</li>
	);
}

//ANOTHER WAY 

// function CoreConcept(props) {
// 	return (
// 		<li>
// 			<img src={props.image} alt={props.title}></img>
// 			<h2>{props.title}</h2>
// 			<p>{props.description}</p>
// 		</li>
// 	);
// }

