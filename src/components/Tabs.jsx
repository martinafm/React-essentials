export default function Tabs({children, buttons, buttonsContainer = 'menu'}) {
    return (
        <>
        <buttonsContainer>
        {buttons}
        </buttonsContainer>
        {children}
        </>
    )
}