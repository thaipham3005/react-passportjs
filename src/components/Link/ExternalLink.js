const ExternalLink = ({ children, to, targetBlank }) => {
    return (<>
        {
            targetBlank ?
                <a href={to} target='_blank' rel='noopener noreferrer'>
                    {children}
                </a > :
                <a href={to} >
                    {children}
                </a>}
    </>
    )
}

export default ExternalLink