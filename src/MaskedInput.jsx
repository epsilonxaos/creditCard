import { useRef, useState } from "react";
import { IMaskInput } from "react-imask";

const MaskedInput = ({ onChange = () => {}, min, max, normalizeZeros = false, focusFn, value = "", dispatch, forInput, mask, placeholder, titulo }) => {
	// const [val, setValue] = useState(value);
	const ref = useRef(null);
	const inputRef = useRef(null);

	return (
		<div>
			<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={forInput}>
				{titulo}:
			</label>
			<IMaskInput {...(focusFn && { onFocus: focusFn })} {...(min && { min: min })} {...(max && { max: max })} normalizeZeros={true} ref={ref} inputRef={inputRef} {...(dispatch && { dispatch: dispatch })} mask={mask} radix="." value={value} unmask={false} id={forInput} name={forInput} placeholder={placeholder} lazy={false} onAccept={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
		</div>
	);
};

export default MaskedInput;
