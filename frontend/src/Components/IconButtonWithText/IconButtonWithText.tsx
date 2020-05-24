import React from 'react';
import './IconButtonWithText.css'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PowerIcon from '@material-ui/icons/Power';
import IconButton from '@material-ui/core/IconButton';


interface IconButtonWithTextProps {
    typeIcon: 'service' | 'partners'
    text: string
    color?: 	'default' | 'inherit' | 'primary' | 'secondary'

}

const IconButtonWithText:React.FC<IconButtonWithTextProps> = props => {
    const { typeIcon, text, color} = props

    const IconSort = < T extends object,  R extends keyof T>(ob: T): Array<keyof T> => {
        const A = []
        for (let key in ob){
            A.push( key)
        }
        return A
    }

    const IconsObj = {
        'partners' : <EmojiPeopleIcon />,
        'service' : <PowerIcon />,

    }

    const icon = IconSort(IconsObj)
    const key  = icon.filter(Item => Item === typeIcon )
    // @ts-ignore
    const Icon = IconsObj[ key]

    return (
        <div className={'icon-button-with-text'}>
            <IconButton color={color} aria-label="icon" className={'icon-button-with-text__icon'} >
                {Icon}
            </IconButton>
            <span className={'icon-button-with-text__logo'}>{text}</span>
         </div>
    )
}
export  default  IconButtonWithText
