import {useForms} from 'src/hooks/use_forms'

export const SubForms = () => {
  const obj = useForms.useStore(s => s)

  return (
    <>
      <div style={{textAlign: 'center', marginBottom: 10}}>{'use form store shallow equality: ==='}</div>
      {Object.entries(obj).filter(([k]) => k === 'valuesMap' || k === 'validationMap').map(([k,v]) => <div style={{whiteSpace:'nowrap'}}>{`${k}: "${JSON.stringify(v)}"`}</div>)}
      <div style={{whiteSpace:'nowrap', marginTop: 10}}>{'rendered: ' + Date.now()}</div>
    </>
  )
}