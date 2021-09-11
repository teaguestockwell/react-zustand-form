import {useForms} from 'src/hooks/use_forms'

export const SubToFormValidation = ({formKey}: {formKey: string}) => {
  const isValid = useForms.useFormValidation(formKey)

  return (
    <>
      <div style={{textAlign: 'center'}}>{formKey + ' sub validation equality'}</div>
      <div>{'isValid: ' + isValid}</div>
      <div>{'renderedAt: ' + new Date().toISOString()}</div>
    </>
  )
}
