import {useForms} from 'src/hooks/use_forms'

export const SubFormValidation = ({formKey}: {formKey: string}) => {
  const isValid = useForms.useFormValidation(formKey)

  return (
    <>
      <div style={{textAlign: 'center', marginBottom: 10}}>{formKey + ' validation equality'}</div>
      <div>{'isValid: ' + isValid}</div>
      <div style={{whiteSpace:'nowrap', marginTop: 10}}>{'rendered: ' + Date.now()}</div>
    </>
  )
}
