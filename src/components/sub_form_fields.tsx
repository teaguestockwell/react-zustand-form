import {useForms} from 'src/hooks/use_forms'

export const SubFormValues = ({formKey}: {formKey: string}) => {
  const values = useForms.useFormValues(formKey)

  const valuesString = JSON.stringify(values)

  return (
    <>
      <div style={{textAlign: 'center'}}>{formKey + ' use form values deep equality'}</div>
      <div>{'values: ' + valuesString}</div>
      <div>{'renderedAt: ' + new Date().toISOString()}</div>
    </>
  )
}
