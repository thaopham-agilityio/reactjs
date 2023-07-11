import { ChangeEvent, memo } from 'react';

// Define the props for the Input component
interface InputProps {
  value: string;
  placeholder?: string;
  className?: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = memo(({ value, placeholder, className, type, onChange }: InputProps) => {
  return (
    <input
      value={value}
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
});
