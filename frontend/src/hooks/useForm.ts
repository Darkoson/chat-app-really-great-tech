import { useState } from "react";

const useForm = () => {
  const [inputs, setInputs] = useState<{ [key: string]: any }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
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
