import { FormInputInterFace } from "@/app/interfaces/interfaces";
import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";

const FormInput = ({name, id, isRequired, isInvalid, errors, handleChange}: FormInputInterFace) => {
  return (
    <FormControl isInvalid={isInvalid} id={id} isRequired={isRequired}>
    <FormLabel>{name}</FormLabel>
    <Input _focusVisible={{ border: '2px solid #0F7173 '}} type="text" onChange={handleChange}/>
    <FormErrorMessage>{errors.join(' ')}</FormErrorMessage>
  </FormControl>
  )
}

export default FormInput;
