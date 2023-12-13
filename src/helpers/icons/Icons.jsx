import { IconWrapper } from './IconWrapper'

export const BackIcon = ({ fill = 'white' }) => {
    return (
        <IconWrapper width={24} height={24} fill='none'>
            <path
                d='M15 19L8 12L15 5'
                stroke={fill}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </IconWrapper>
    )
}
