import {useForms} from 'src/hooks/use_forms'

export const SubForms = () => {
  const values = useForms.useStore(s => s)

  const valuesString = JSON.stringify({...values.validationMap, ...values.valuesMap})

  return (
    <>
      <div style={{textAlign: 'center'}}>{'use form store shallow equality: ==='}</div>
      <div>{valuesString}</div>
      <div>{'renderedAt: ' + new Date().toISOString()}</div>
    </>
  )
}