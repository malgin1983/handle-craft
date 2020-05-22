import * as React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


interface TextButtonProps {
	text: string
	color: string
}
/**
 * @TextButton- component-text-button *@param props.text - цвет элементов и значка.
 *@param props.text - text on button
 *@param props.color - color text
 */
const TextButton:React.FC<TextButtonProps> = props => {
	const { text, color} = props
	const TetxButton = withStyles({
		root: {
			color: `${color}`,
			marginLeft: '1rem',
		},
	})(Button);

	return (
		<>
			<TetxButton color="inherit" className={'top-navigation__login'}>{text}</TetxButton>
		</>
	)
}
export  default  TextButton
