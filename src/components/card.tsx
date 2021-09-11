export const Card = ({children}: {children: JSX.Element}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: 10,
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  )
}
