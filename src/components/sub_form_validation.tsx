import {useForms} from 'src/hooks/use_forms'

export const SubFormValidation = ({formKey}: {formKey: string}) => {
  const isValid = useForms.useFormValidation(formKey)

  return (
    <>
      <div style={{textAlign: 'center'}}>{formKey + ' use form validation equality'}</div>
      <div>{'isValid: ' + isValid}</div>
      <div>{'renderedAt: ' + new Date().toISOString()}</div>
    </>
  )
}
