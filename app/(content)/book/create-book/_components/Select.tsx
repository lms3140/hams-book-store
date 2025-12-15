import { RequestBookInfo } from "@/app/_types/book";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type SelectOption = {
  id: string;
  value: string;
  text: string;
};

type SelectProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  label: Path<T>;
  list: SelectOption[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select<T extends FieldValues>({
  register,
  label,
  list,
  ...rest
}: SelectProps<T>) {
  return (
    <select {...register(label)} {...rest}>
      {list.map((v) => (
        <option key={v.id} value={v.value}>
          {v.text}
        </option>
      ))}
    </select>
  );
}
