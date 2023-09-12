import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChangeEventHandler, FormEvent, FormEventHandler } from "react";

interface IFilterField {
    type: "text" | "number",
    placeholder: string,
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
    htmlFor: string,
    id: string,
    label: string,
    value?: string | number
}

interface IFilterSwitch {
    onChange?: (checked: boolean) => void,
    id: string,
    label: string,
    value?: boolean,
    onClick?: FormEventHandler<HTMLButtonElement> | undefined;
}


export default function FilterField(
    { type, onChange, placeholder, htmlFor, id, label, value }: IFilterField
    ) {
    return (
        <>
        <div className="flex flex-col space-y-1.5">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input value={value} onChange={onChange} type={type} id={id} placeholder={placeholder} />
      </div>
        </>
    )
}

export function FilterSwitch(
    {  onChange, id, label, value, onClick }: IFilterSwitch
    ) {
    return (
        <>
    <div className="flex items-center space-x-2">
      <Switch checked={value} onCheckedChange={onChange} onClick={onClick}  id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
        </>
    )
}