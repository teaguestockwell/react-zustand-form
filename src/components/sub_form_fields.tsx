import {useForms} from 'src/hooks/use_forms'

export const SubFormValues = ({formKey}: {formKey: string}) => {
  const obj = useForms.useFormValues(formKey)


  return (
    <>
      <div style={{textAlign: 'center', marginBottom: 10}}>{formKey + ' values deep equality'}</div>
      {Object.entries(obj).map(([k,v]) => <div style={{whiteSpace:'nowrap'}}>{`${k}: "${v}"`}</div>)}
      <div style={{whiteSpace:'nowrap', marginTop: 10}}>{'rendered: ' + Date.now()}</div>
    </>
  )
}
