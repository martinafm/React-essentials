import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState("");
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		// console.log(selectedTopic)
		// this log will show previous selectedTopic, because hook reschedules setSelectedTopic and when it calls it, it still has not updated this value
	}

	return (
		<Section title='Examples' id='examples'>
			<menu>
				<TabButton
					isSelected={selectedTopic === "components"}
					onClick={() => handleSelect("components")}>
					Components
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "jsx"}
					onClick={() => handleSelect("jsx")}>
					JSX
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "props"}
					onClick={() => handleSelect("props")}>
					Props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "state"}
					onClick={() => handleSelect("state")}>
					State
				</TabButton>
			</menu>
			{!selectedTopic && <p>components</p>}
			{selectedTopic && (
				<div id="tab-content">
					<h3>{EXAMPLES[selectedTopic].title}</h3>
					<p>{EXAMPLES[selectedTopic].description}</p>
					<pre>
						<code>{EXAMPLES[selectedTopic].code}</code>
					</pre>
				</div>
			)}
		</ Section>
	);
}
