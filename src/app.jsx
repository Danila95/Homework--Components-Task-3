import { useState } from "react";
import cls from "./app.module.css";

const App = () => {
	const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const arrOperators = ["+", "-", "=", "C"];

	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("");

	const [display, setDisplay] = useState("");

	const handlerUpdateDisplay = (value) => {
		setDisplay((prev) => `${prev}${value}`);
	};

	const handlerResetDisplay = () => {
		setDisplay("");
		setOperand1("");
		setOperand2("");
		setOperator("");
	};

	const handlerCalculate = () => {
		const arr = display.match(/\d+|[+\-/]/g);

		if (arr[1] === "+") {
			if (arr[0] === "+") {
				setDisplay(0 + Number(arr[1]));
			} else {
				setDisplay(Number(arr[0]) + Number(arr[2]));
			}
		} else {
			if (arr[0] === "-") {
				setDisplay(0 - Number(arr[1]));
			} else {
				setDisplay(Number(arr[0]) - Number(arr[2]));
			}
		}

		setOperand1("");
		setOperand2("");
		setOperator("");
	};

	return (
		<>
			<div className={cls.calculator}>
				<input
					type="text"
					className={cls.display}
					readOnly
					value={display || 0}
				/>

				<div className={`${cls.buttons}`}>
					{arrOperators.map(
						(item, index) =>
							arrOperators[index] === "C" && (
								<button
									key={index}
									className={`${cls.btn} ${cls.clear}`}
									onClick={() => handlerResetDisplay()}
								>
									{item}
								</button>
							)
					)}

					{NUMS.map((item, index) =>
						NUMS[index] === 7 ||
						NUMS[index] === 8 ||
						NUMS[index] === 9 ? (
							<button
								key={index}
								className={`${cls.btn} ${cls.number}`}
								onClick={() => handlerUpdateDisplay(item)}
							>
								{item}
							</button>
						) : null
					)}

					{arrOperators.map(
						(item, index) =>
							arrOperators[index] === "+" && (
								<button
									key={index}
									className={`${cls.btn} ${cls.operator}`}
									onClick={() => {
										handlerUpdateDisplay(item);
										setOperator(item);
									}}
									disabled={
										operator === "+" || operator === "-"
											? true
											: false
									}
								>
									{item}
								</button>
							)
					)}

					{NUMS.map((item, index) =>
						NUMS[index] === 4 ||
						NUMS[index] === 5 ||
						NUMS[index] === 6 ? (
							<button
								key={index}
								className={`${cls.btn} ${cls.number}`}
								onClick={() => handlerUpdateDisplay(item)}
							>
								{item}
							</button>
						) : null
					)}

					{arrOperators.map(
						(item, index) =>
							arrOperators[index] === "-" && (
								<button
									key={index}
									className={`${cls.btn} ${cls.operator}`}
									onClick={() => {
										handlerUpdateDisplay(item);
										setOperator(item);
									}}
									disabled={
										operator === "+" || operator === "-"
											? true
											: false
									}
								>
									{item}
								</button>
							)
					)}

					{NUMS.map((item, index) =>
						NUMS[index] === 1 ||
						NUMS[index] === 2 ||
						NUMS[index] === 3 ? (
							<button
								key={index}
								className={`${cls.btn} ${cls.number}`}
								onClick={() => handlerUpdateDisplay(item)}
							>
								{item}
							</button>
						) : null
					)}

					{arrOperators.map(
						(item, index) =>
							arrOperators[index] === "=" && (
								<button
									key={index}
									className={`${cls.btn} ${cls.equals}`}
									onClick={() => handlerCalculate()}
									disabled={
										operand1 === "" &&
										operand2 === "" &&
										operator === ""
											? true
											: false
									}
								>
									{item}
								</button>
							)
					)}

					{NUMS.map(
						(item, index) =>
							NUMS[index] === 0 && (
								<button
									key={index}
									className={`${cls.btn} ${cls.number} ${cls.zero}`}
									onClick={() => handlerUpdateDisplay(item)}
								>
									{item}
								</button>
							)
					)}
				</div>
			</div>
		</>
	);
};

export default App;
