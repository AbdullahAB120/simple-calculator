let outputArea = document.querySelector(".outputArea");

let answer, clearStart;



function displayNumber(num) {
	if(num === "+" || num === "-" || num === "*" || num === "/") {
		outputArea.value += num;
		clearStart = false;
	} else if(clearStart) {
		outputArea.value = "";
		outputArea.value += num;
		clearStart = false;
	} else {
		outputArea.value += num;
	}
}


function clearNumber() {
	outputArea.value = "";
}


function deleteNumber() {
	outputArea.value = outputArea.value.slice(0, -1);
}


function answerOutput() {
	outputArea.value += answer;
}


function calculate() {
	if(outputArea.value !== "") {
		try {
			let result = eval(outputArea.value);
			outputArea.value = result;
			answer = result;
			clearStart = true;
		} catch {
			outputArea.value = "Math Error";
		}
	}
}