export const IconWrapper = (props) => {
    const { width, height, fill, viewBox = '', children } = props

    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox || `0 0 ${width} ${height}`}
            fill={fill}
            xmlns='http://www.w3.org/2000/svg'
        >
            {children}
        </svg>
    )
}


