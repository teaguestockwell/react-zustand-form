import React from 'react'
import {contactSchema} from './schemas/contact_schema'
import {HookForm} from './components/hook_form'
import {useForms} from './hooks/use_forms'
import {Card} from './components/card'
import {SubToFormValidation} from './components/sub_form_validation'
import {SubToFormValues} from './components/sub_form_fields'

export const App = () => {
  const formKeys = useForms.useAllFormKeys()

  React.useEffect(() => {
    useForms.useStore.setState({schema: contactSchema})
  }, [])

  return (
    <Card>
      <>
        <div style={{textAlign: 'center'}}>{'sub all forms length equality'}</div>

        <button onClick={useForms.addBlankForm}>Add blank form</button>

        {formKeys.map((k) => (
          <div key={k}>
            <Card>
              <HookForm formKey={k} />
            </Card>

            <Card>
              <SubToFormValues formKey={k} />
            </Card>

            <Card>
              <SubToFormValidation formKey={k} />
            </Card>
          </div>
        ))}
      </>
    </Card>
  )
}
