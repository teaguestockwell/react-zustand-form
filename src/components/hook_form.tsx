import React from 'react'
import {useFormik} from 'formik'
import {useForms} from '../hooks/use_forms'

export const HookForm = ({formKey}: {formKey: string}) => {
  const initialValues = React.useRef(useForms.getInitValues(formKey)).current
  const validationSchema = React.useRef(useForms.getSchema()).current

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (_) => {},
    validate: (newVals: any) => useForms.updateGlobalState(newVals, formKey),
    validateOnChange: true,
  })

  React.useEffect(() => {
    formik.validateForm()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getField = (fieldKey: string) => {
    return (
      <div
        key={fieldKey}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 75,
          marginTop: 20
        }}
      >
        <label htmlFor={fieldKey}>{fieldKey}</label>

        <input
          id={fieldKey}
          name={fieldKey}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[fieldKey]}
        />

        {formik.errors[fieldKey] && (
          <div style={{color: 'red'}}>
            {'Error: ' + formik.errors[fieldKey]}
          </div>
        )}
      </div>
    )
  }

  const formFields = Object.keys(initialValues ?? {})

  return (
    <>
      <div style={{textAlign: 'center'}}>{formKey}</div>

      <form>{formFields.map((k) => getField(k))}</form>
    </>
  )
}
