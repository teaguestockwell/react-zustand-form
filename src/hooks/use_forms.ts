import create from 'zustand'
import {combine} from 'zustand/middleware'
import {isEqual} from 'lodash'
import {
  adjectives,
  colors,
  animals,
  uniqueNamesGenerator,
} from 'unique-names-generator'

const useStore = create(
  combine(
    {
      valuesMap: {} as {[key: string]: {[key: string]: string}},
      validationMap: {} as {[key: string]: boolean},
      schema: {} as any,
    },
    (set) => ({
      set,
    })
  )
)

const useFormValues = (formKey: string) =>
  useStore(
    (s) => s.valuesMap[formKey],
    (s0, s1) => isEqual(s0, s1)
  )

const useFormValidation = (formKey: string) =>
  useStore((s) => s.validationMap[formKey])

const getInitValues = (formKey: string) =>
  useStore.getState().valuesMap[formKey]

const getSchema = () => useStore.getState().schema

const useFormKeys = () =>
  useStore(
    (s) => Object.keys(s.validationMap),
    (s0, s1) => s0.length === s1.length
  )

const addBlankForm = () => {
  const key = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    length: 2,
  })

  const values = {
    firstName: '',
    lastName: '',
    email: '',
  }

  const prevState = useStore.getState()
  prevState.validationMap[key] = false
  prevState.valuesMap[key] = values

  useStore.setState({
    validationMap: prevState.validationMap,
    valuesMap: prevState.valuesMap,
  })
}

const updateGlobalState = (
  newVals: Record<string, string>,
  formKey: string
) => {
  const prevState = useStore.getState()

  prevState.schema.isValid(newVals).then((isValid: boolean) => {
    prevState.valuesMap[formKey] = newVals
    prevState.validationMap[formKey] = isValid

    useStore.setState({
      validationMap: prevState.validationMap,
      valuesMap: prevState.valuesMap,
    })
  })
}

const deleteForm = (key:string) => {
  const prev = useStore.getState()

  delete prev.validationMap[key]
  delete prev.valuesMap[key]

  useStore.setState({
    validationMap: prev.validationMap,
    valuesMap: prev.valuesMap,
  })
}

const deleteAllForms = () => {
  useStore.setState({
    validationMap: {},
    valuesMap: {},
  })
}

export const useForms = {
  useStore,
  useFormValues,
  useFormValidation,
  getInitValues,
  getSchema,
  useAllFormKeys: useFormKeys,
  addBlankForm,
  updateGlobalState,
  deleteForm,
  deleteAllForms
}
