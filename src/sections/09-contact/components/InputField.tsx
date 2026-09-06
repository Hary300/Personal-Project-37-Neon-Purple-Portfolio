import type { TypeField } from '@/data/10-contactData';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  type: TypeField;
  errorMessage?: string;
}

const InputField = <T extends FieldValues>({
  register,
  name,
  placeholder,
  type,
  errorMessage,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-1'>
      {errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}
      {type === 'textarea' ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={3}
          className='rounded-2xl bg-neutral-500 px-3 py-2 text-sm lg:text-md focus:outline-0'
        ></textarea>
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className='rounded-2xl bg-neutral-500 px-3 py-2 text-sm lg:text-md focus:outline-0'
        />
      )}
    </div>
  );
};

export default InputField;
