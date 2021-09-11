import React from 'react'
import {contactSchema} from './schemas/contact_schema'
import {HookForm} from './components/hook_form'
import {useForms} from './hooks/use_forms'
import {Card} from './components/card'
import {SubFormValidation} from './components/sub_form_validation'
import {SubFormValues} from './components/sub_form_fields'
import { SubForms } from './components/sub_forms'

export const App = () => {
  const formKeys = useForms.useAllFormKeys()

  React.useEffect(() => {
    useForms.useStore.setState({schema: contactSchema})
  }, [])

  return (
    <>
    <Card>
      <>
        <div style={{textAlign: 'center'}}>{'use forms length equality'}</div>

        <button onClick={useForms.deleteAllForms}>Delete all forms</button>

        <button onClick={useForms.addBlankForm}>Add blank form</button>

        {formKeys.map((k) => (
          <div key={k}>
            <Card>
              <HookForm formKey={k} />
            </Card>

            <Card>
              <SubFormValues formKey={k} />
            </Card>

            <Card>
              <SubFormValidation formKey={k} />
            </Card>
          </div>
        ))}
      </>
    </Card>
    
    <Card>
      <SubForms/>
    </Card>
    </>
  )
}
