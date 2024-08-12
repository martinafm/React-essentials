import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState("");
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		// console.log(selectedTopic)
		// this log will show previous selectedTopic, because hook reschedules setSelectedTopic and when it calls it, it still has not updated this value
	}

	return (
		<section id="examples">
			<h2>Examples</h2>
			<menu>
				<TabButton
					isSelected={selectedTopic === "components"}
					onSelect={() => handleSelect("components")}>
					Components
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "jsx"}
					onSelect={() => handleSelect("jsx")}>
					JSX
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "props"}
					onSelect={() => handleSelect("props")}>
					Props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "state"}
					onSelect={() => handleSelect("state")}>
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
		</section>
	);
}
