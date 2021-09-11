import {useForms} from 'src/hooks/use_forms'

export const SubToFormValues = ({formKey}: {formKey: string}) => {
  const values = useForms.useFormValues(formKey)

  const valuesString = JSON.stringify(values)

  return (
    <>
      <div style={{textAlign: 'center'}}>{formKey + ' sub deep values equality'}</div>
      <div>{'values: ' + valuesString}</div>
      <div>{'renderedAt: ' + new Date().toISOString()}</div>
    </>
  )
}
