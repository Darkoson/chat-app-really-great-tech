import { useState } from "react";

const useForm = (
  changeCallback: (event: React.ChangeEvent<HTMLInputElement>) => any = () => {}
) => {
  const [inputs, setInputs] = useState<{ [key: string]: any }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    changeCallback(event);
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleInputChange,
    inputs,
  };
};

export default useForm;
